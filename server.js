const express = require("express");
const mysql = require("mysql");

const cors = require("cors");

const app = express();

// Enable CORS for all routes
app.use(cors());

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "9543349700",
  database: "chattool_db",
});

// Define your API endpoints
app.get("/", (req, res) => {
  // Query the database using the connection pool
  pool.query("SELECT * FROM new_table", (error, results) => {
    if (error) {
      // Handle the error
      console.error(error);
      res.status(500).send({ message: "An error occurred" });
      return;
    }

    // Send the results back to the client
    res.send(results);
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
