import * as express from "express";
import { graphqlHTTP } from "express-graphql";
import * as jwt from "express-jwt";
import { resolve } from "path/posix";
import schema from "./schema/schema";

const app = express();

app.use(
  "/protected",
  jwt({
    secret: "UjfP:QUcG9x?W95XM3w39Z9Q/;56qxx-3nx<Oj8%m33e{vvENJgpAf*Q`_xDEM",
    algorithms: ["HS256"],
  }),
  (req, res) => {
    if (req.user) {
      return res.send(`Welcome ${req.user}`);
    }
  }
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Server listening on port 4000.");
});
