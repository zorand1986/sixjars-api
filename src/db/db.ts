import knex from "knex";
import configs from "./knexfile";
const config = require("../../config");

const knexConfig = configs[config.NODE_ENV || "development"];

const db = knex(knexConfig);

export default db;
