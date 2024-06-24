const doQuery = require("../query");

/**
 * Add a new user to the database.
 * @param {Object} userData
 */
async function userQueue(userData, userType) {
  try {
    const { email, password, phoneNumber, firstName, lastName, streetAddress } =
      userData;

    let sql, params;
    if (userType === "Customer") {
      // Insert into the customers table
      sql = `INSERT INTO customers (Email, Password, PhoneNumber, FirstName, LastName, StreetAddress, OrderNumber, CountOfAllOrders, OrderDate, OrderHour, DateOfEvent, HourOfEvent) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
      params = [
        email,
        password,
        phoneNumber,
        firstName,
        lastName,
        streetAddress,
        null,
        null,
        null,
        null,
        null,
        null,
      ];
    } else if (userType === "Photographer") {
      // Insert into the photographers table
      sql = `INSERT INTO customers (Email, Password, PhoneNumber, FirstName, LastName, StreetAddress, OrderNumber, CountOfAllOrders, PhotographerType, DateOfEvent, HourOfEvent) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
      params = [
        email,
        password,
        phoneNumber,
        firstName,
        lastName,
        streetAddress,
        null,
        null,
        null,
        null,
        null,
      ];
    } else {
      // Handle invalid userType
      throw new Error(
        "Invalid userType. Must be 'customer' or 'photographer'."
      );
    }

    // Execute the query using the doQuery function
    const result = await doQuery(sql, params);

    // Log the result (if needed)
    console.log("User added successfully:", result);
  } catch (error) {
    // Handle any errors that occur during execution
    console.error("Error adding user:", error);
  }
}

module.exports = userData;
