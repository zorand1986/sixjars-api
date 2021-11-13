import { Knex } from "knex";

interface IKnexConfig {
  [key: string]: Knex.Config;
}

const configs: IKnexConfig = {
  development: {
    client: "postgresql",
    connection: {
      database: "sixjars",
      user: "postgres",
      port: 5432,
      password: "0492",
    },
    seeds: {
      directory: "./seeds",
    },
    debug: true,
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

export default configs;
