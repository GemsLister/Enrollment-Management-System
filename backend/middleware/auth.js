import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

export const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]; // Get the token from the header
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET_KEY); // Verify token
      req.user = await User.findById(decoded.id).select("-password"); // Get the user from the token
      next();
    } catch (error) {
      res.status(404).json({ message: "Error!" });
    }
  }
});
