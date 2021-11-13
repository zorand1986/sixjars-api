import * as jsonwebtoken from "jsonwebtoken";

const generateToken = (id: string, email: string) => {
  return jsonwebtoken.sign(
    {
      id,
      email,
    },
    // TODO: import from .env file
    "UjfP:QUcG9x?W95XM3w39Z9Q/;56qxx-3nx<Oj8%m33e{vvENJgpAf*Q`_xDEM",
    { expiresIn: "1y" }
  );
};

export default generateToken;
