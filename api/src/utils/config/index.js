require("dotenv").config();

module.exports = {
  dbUser: process.env.DB_USER || "postgres",
  dbHost: process.env.DB_HOST || "localhost",
  dbPort: process.env.DB_PORT || 5432,
  dbPassword: process.env.DB_PASSWORD || "password",
  dbName: process.env.DB_NAME || "mgapp",
  PORT: process.env.PORT || 3001,
};
