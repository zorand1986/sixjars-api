const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  JWT_TOKEN: process.env.JWT_TOKEN,
  PORT: process.env.PORT,
};
