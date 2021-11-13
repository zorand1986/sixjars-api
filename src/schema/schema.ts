import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

import db from "./../db/db";
import generateToken from "../services/authHelpers";

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
    transactions: {
      type: new GraphQLList(TransactionType),
      resolve(parent, { id }) {
        return db().select("*").from("transaction").where("user_id", parent.id);
      },
    },
  }),
});

const TransactionType: GraphQLObjectType = new GraphQLObjectType({
  name: "Transaction",
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    jar: {
      type: GraphQLString,
    },
    amount: {
      type: GraphQLInt,
    },
    note: {
      type: GraphQLString,
    },
    date: {
      type: GraphQLString,
    },
    necessary: {
      type: GraphQLBoolean,
    },
    user: {
      type: UserType,
      resolve(parent, { id }) {
        return db()
          .select("*")
          .from("user")
          .where("id", parent.user_id)
          .first();
      },
    },
  }),
});

const AuthPayloadType = new GraphQLObjectType({
  name: "Authpayload",
  fields: () => ({
    token: {
      type: GraphQLString,
    },
    message: {
      type: GraphQLString,
    },
    user: {
      type: UserType,
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parent, { id }) {
        return db().select("*").from("user").where("id", id).first();
      },
    },
    transaction: {
      type: TransactionType,
      args: { id: { type: GraphQLString } },
      resolve(parent, { id }) {
        return db().select("*").from("transaction").where("id", id).first();
      },
    },
  },
});
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    registerUser: {
      type: AuthPayloadType,
      args: {
        email: {
          type: GraphQLString,
        },
        password: {
          type: GraphQLString,
        },
      },
      async resolve(parent, { email, password }) {
        const id = uuidv4();
        await db("user").insert({
          id,
          email,
          password: await bcrypt.hash(password, 10),
        });

        const token = generateToken(id, email);
        return {
          token,
          user: {
            id,
            email,
          },
          message: "user registered correctly",
        };
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
