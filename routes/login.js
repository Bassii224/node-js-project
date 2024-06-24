const path = require("path");
const express = require("express");
const checkLogin = require("../database/queries/check-login");
const router = express.Router();

// Handling POST requests to /check-login endpoint
router.post("/check-login", async (req, res, next) => {
  // Logging that a POST request to /login/check-login has been received
  console.log("Received POST request at /login/check-login");

  // Logging the contents of the request body
  console.log("Request body:", req.body);

  // Calling the checkLogin function with the request body data
  const result = await checkLogin(req.body);

  // Handling the result of the login check
  if (result.error) {
    // Logging an error message if login failed
    console.error("Error message:", result.error);
    // Sending a 401 Unauthorized status and an error message response
    res.status(401).send("Invalid email or password!");
  } else {
    // Logging a success message if login succeeded
    console.log("Login succeeded!");
    // Redirecting the user to /orders.html after successful login
    res.redirect("/orders.html");
  }
});

// Exporting the router module
module.exports = router;
