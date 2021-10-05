import jwt from "jsonwebtoken";

const genarateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRATE, {
    expiresIn: "30d",
  });
};

export default genarateToken;
