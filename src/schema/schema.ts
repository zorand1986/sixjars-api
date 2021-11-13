import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";

import db from "./../db/db";

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

export default new GraphQLSchema({
  query: RootQuery,
});
