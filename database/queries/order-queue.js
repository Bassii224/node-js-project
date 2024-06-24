const doQuery = require("../query");

/**
 * Add a new order to the database.
 * @param {Object} orderData Object containing order data
 *                           { orderType, orderPack, pricePack, location, dateOfEvent, hourOfEvent }
 */

const moment = require("moment-timezone");
async function orderQueue(orderData) {
  try {
    const {
      orderType,
      orderPack,
      pricePack,
      location,
      dateOfEvent,
      hourOfEvent,
    } = orderData;

    // Convert dateOfEvent and hourOfEvent to a moment object in the Asia/Jerusalem timezone
    const eventDateTime = moment.tz(
      `${dateOfEvent} ${hourOfEvent}`,
      "YYYY-MM-DD HH:mm:ss",
      "Asia/Jerusalem"
    );
    const today = moment().tz("Asia/Jerusalem").startOf("day");

    // Check if the event date is today or in the future
    if (!eventDateTime.isSameOrAfter(today)) {
      throw new Error("Event date and time must be today or in the future.");
    }

    // Generate a unique OrderNumber
    const orderNumber = await generateUniqueOrderNumber();

    // Fetch OrderSerial based on OrderType
    const orderSerial = await getOrderSerial(orderType);

    // Fetch SerialPack based on OrderPack and PricePack
    const serialPack = await getSerialPack(orderPack, pricePack);

    // Get the current date and time
    const currentDateTime = getCurrentDateTime();

    const numericPrice = parseFloat(pricePack.match(/\d+\.?\d*/)[0]);
    // Prepare parameters for the query
    const params = [
      orderNumber,
      orderType,
      orderSerial,
      orderPack,
      serialPack,
      numericPrice,
      location,
      null, // ConfirmedBy is not provided by the user
      currentDateTime.date,
      currentDateTime.time,
      dateOfEvent,
      hourOfEvent,
    ];

    // Construct the SQL query
    const sql = `INSERT INTO Orders (OrderNumber, OrderType, OrderSerial, OrderPack, SerialPack, PricePack, LocationName, ConfirmedBy, OrderDate, OrderHour, DateOfEvent, HourOfEvent) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

    // Execute the query using the doQuery function
    const result = await doQuery(sql, params);

    // Log the result (if needed)
    console.log("Order added successfully:", result);
  } catch (error) {
    // Handle any errors that occur during execution
    console.error("Error adding order:", error);
  }
}

// Function to generate a unique OrderNumber
async function generateUniqueOrderNumber() {
  let orderNumber = 1001; // Starting from 1001

  // Check if the order number already exists in the database
  while (await isOrderNumberExists(orderNumber)) {
    orderNumber++; // If exists, try the next number
  }

  return orderNumber;
}

// Function to check if an order number exists in the database
async function isOrderNumberExists(orderNumber) {
  const sql = `SELECT COUNT(*) AS count FROM Orders WHERE OrderNumber = ?;`;
  const params = [orderNumber];
  const result = await doQuery(sql, params);
  return result[0].count > 0;
}

// Function to fetch OrderSerial based on OrderType
async function getOrderSerial(orderType) {
  const sql = `SELECT OrderSerial FROM ordertypes WHERE OrderType = ?;`;
  const params = [orderType];
  const result = await doQuery(sql, params);
  return result[0].OrderSerial;
}

// Function to fetch SerialPack based on OrderPack and PricePack
async function getSerialPack(orderPack, pricePack) {
  const sql = `SELECT SerialPack FROM orderpacks WHERE PackName = ? AND PricePack = ?;`;
  const params = [orderPack, pricePack];
  const result = await doQuery(sql, params);
  return result[0].SerialPack;
}

// Function to get the current date and time
function getCurrentDateTime() {
  let date = moment().tz("Asia/Jerusalem").format("YYYY-MM-DD");
  let time = moment().tz("Asia/Jerusalem").format("HH:mm:ss");
  return { date, time };
}

module.exports = orderQueue;
