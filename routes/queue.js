const path = require("path");
const express = require("express");
const orderQueue = require("../database/queries/order-queue");
const router = express.Router();

// POST request to /queue/order-queue
router.post("/order-queue", async (req, res, next) => {
  // Log that a POST request to /queue/order-queue has been received
  console.log("Received POST request at /queue/order-queue");

  // Log the contents of the request body
  console.log("Request body:", req.body);

  // Extract data from the request body based on the parameter names in the HTML form
  const { orderType, orderPack, location, dateOfEvent, hourOfEvent } = req.body;

  // Construct the data object to be passed to the orderQueue function
  const orderData = {
    orderType,
    orderPack,
    location,
    dateOfEvent,
    hourOfEvent,
  };

  // Call the orderQueue function with the extracted data
  await orderQueue(orderData);

  // Redirect the user to /orders.html after processing the order
  // This helps prevent accidental form resubmissions by the user
  res.redirect("/orders.html");
});

module.exports = router;
