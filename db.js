const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "cadef117",
  host: "localhost",
  port: 5432,
  database: "sixjars",
});

module.exports = pool;
