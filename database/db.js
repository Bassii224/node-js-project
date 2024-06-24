const mysql = require("mysql2");

// In a Node.js application, it's beneficial to use connection pooling to manage database connections efficiently.
// Opening and closing connections for each request can be resource-intensive. Instead, we maintain a pool of connections
// that can be reused, enhancing performance and scalability.

// Create a connection pool using mysql.createPool. This pool manages multiple connections.
// The connectionLimit parameter specifies the maximum number of connections the pool can have at any given time.

const pool = mysql.createPool({
  connectionLimit: 100, // The maximum number of connections allowed in the pool.
  host: "localhost", // The hostname of the database server.
  user: "root", // The username used to connect to the database.
  password: "", // The password used to authenticate the user.
  database: "photodb", // The name of the database to which we want to connect.
});

// Export the promise-based interface of the connection pool.
// This allows us to use async/await syntax when executing queries, making database interactions more convenient and readable.

module.exports = pool.promise();
