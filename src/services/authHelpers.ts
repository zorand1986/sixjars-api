import * as jsonwebtoken from "jsonwebtoken";
const config = require("../../config");

const generateToken = (id: string, email: string) => {
  return jsonwebtoken.sign(
    {
      id,
      email,
    },
    JSON.stringify(config.JWT_TOKEN),
    { expiresIn: "1y" }
  );
};

export default generateToken;
