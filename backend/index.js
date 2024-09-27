const connectDatabase = require('./config/database');


// config.env file
require("dotenv").config({ path: "config/config.env" });

console.log(process.env.DB_URI);

// Connect to database
connectDatabase();