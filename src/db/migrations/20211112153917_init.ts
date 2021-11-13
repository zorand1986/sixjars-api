const Knex = require("knex");

export function up(knex: typeof Knex) {
  return knex.schema.createTable("user", (table: typeof Knex.TableBuilder) => {
    table.uuid("id").notNullable().unique().primary();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.timestamps(true, true);
  });
}

export function down(knex: typeof Knex) {
  return knex.schema.dropTable("user");
}
