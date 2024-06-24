const doQuery = require("../query");

/**
 * Check login post
 * Check user login and return result
 * @param {Object} req object { email: xxx, password: xxx }
 * @returns {Object} Result of the query
 */
async function checkLogin(params) {
  const { email, password } = params;

  // Constructing the SQL query to check for the existence of a user
  const sql = `SELECT * FROM customers WHERE email = '${email}' AND password = '${password}'`;

  // Executing the query
  const result = await doQuery(sql);

  // Checking for the existence of the user
  if (result.length > 0) {
    // User found - return data
    return result;
  } else {
    // User not found - return error message
    return { error: "Incorrect email or password." };
  }
}

module.exports = checkLogin;
