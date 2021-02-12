const PORT       = process.env.PORT || 8000;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
require('dotenv').config();
const app        = express();

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());


// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const noteRoutes = require("./routes/notes");
const loginRoutes = require("./routes/login");
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
 app.use("/api/notes", noteRoutes(db));
 app.use("/api/login", loginRoutes(db));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
}); 