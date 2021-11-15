import { randomUUID } from "crypto";
import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("transaction").del();
  await knex("user").del();

  await knex("user").insert([
    {
      id: "52506786-e793-4722-ba2c-452076e898b1",
      email: "zorand1986@gmail.com",
      password: "123123",
    },
    {
      id: "befda6cc-4548-463d-ac85-0ab1bcd7ec9c",
      email: "test123@gmail.com",
      password: "123123",
    },
    {
      id: "ad968d73-7d30-4ca9-944b-0e0f99e485c1",
      email: "zoran.damjanac@gmail.com",
      password: "123123",
    },
  ]);

  await knex("transaction").insert([
    {
      id: randomUUID(),
      jar: "ESS",
      amount: -30,
      note: "Lebac",
      date: "2020-01-08T19:47:00.000Z",
      user_id: "befda6cc-4548-463d-ac85-0ab1bcd7ec9c",
      necessary: false,
    },
    {
      id: randomUUID(),
      jar: "ESS",
      amount: -22,
      note: "Racun za struju",
      date: "2020-01-08T19:47:00.000Z",
      user_id: "befda6cc-4548-463d-ac85-0ab1bcd7ec9c",
      necessary: true,
    },
    {
      id: randomUUID(),
      jar: "ENT",
      amount: -100,
      note: "Restoran",
      date: "2020-01-08T19:47:00.000Z",
      user_id: "befda6cc-4548-463d-ac85-0ab1bcd7ec9c",
      necessary: false,
    },
    {
      id: randomUUID(),
      jar: "ESS",
      amount: -60,
      note: "Lebac",
      date: "2020-01-08T19:47:00.000Z",
      user_id: "52506786-e793-4722-ba2c-452076e898b1",
    },
    {
      id: randomUUID(),
      jar: "ESS",
      amount: -12,
      note: "Taxi",
      date: "2020-01-08T19:47:00.000Z",
      user_id: "52506786-e793-4722-ba2c-452076e898b1",
    },
    {
      id: randomUUID(),
      jar: "SHR",
      amount: -5.5,
      note: "Taxi",
      date: "2020-01-08T19:47:00.000Z",
      user_id: "52506786-e793-4722-ba2c-452076e898b1",
    },
  ]);
}
