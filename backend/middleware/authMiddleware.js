import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization;
  if (token && token.startsWith("Bearer")) {
    try {
      const actualToken = token.split(" ")[1];
      const decoded = jwt.verify(actualToken, process.env.JWT_SECRATE);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, invalid token");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, No Token");
  }
});

export { protect };
