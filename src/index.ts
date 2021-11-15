const config = require("../config.js");
import * as express from "express";
import { graphqlHTTP } from "express-graphql";
import * as jwt from "express-jwt";
import schema from "./schema/schema";

const app = express();

app.use(
  "/protected",
  jwt({
    secret: JSON.stringify(config.JWT_TOKEN),
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

app.listen(config.PORT, () => {
  console.log(`Server listening on port ${config.PORT}.`);
});
