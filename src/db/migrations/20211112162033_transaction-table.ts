const Knex = require("knex");

export function up(knex: typeof Knex): Promise<void> {
  return knex.schema.createTable(
    "transaction",
    (table: typeof Knex.TableBuilder) => {
      table.uuid("id").primary().notNullable().unique();
      table
        .enu("jar", ["ESS", "FFR", "ENT", "LTP", "PGR", "SHR"])
        .notNullable();
      table.float("amount").notNullable();
      table.string("note").notNullable();
      table.timestamp("date").notNullable();
      table.uuid("user_id").references("id").inTable("user");
      table.boolean("necessary").defaultTo(false);
      table.timestamps(true, true);
    }
  );
}

export function down(knex: typeof Knex): Promise<void> {
  return knex.schema.dropTable("transaction");
}
