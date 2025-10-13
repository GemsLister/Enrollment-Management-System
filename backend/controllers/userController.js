import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const setSignUp = async (req, res) => {
  // Saving an account
  const { username, email, password, role } = req.body;
  // Checks if the user is already inside the database
  const existingEmail = await User.findOne({ email });
  if (existingEmail)
    return res.status(404).json({ message: "User already exists" });

  const hashPassword = await bcrypt.hash(password, 10);
  const register = await User.create({
    username,
    email,
    password: hashPassword,
    role,
  });
  res.status(200).json({
    message: "Success",
    User: {
      username: register.username,
      email: register.email,
      password: register.password,
      role: register.role,
    },
  });
};

export const setLogin = async (req, res) => {
  const { email, password } = req.body;

  // Checks if the user's email matches to the stored email
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User does not exists" });

  // Checks if the user's password matches to the stored password
  const matchPassword = await bcrypt.compare(password, user.password);
  if (!matchPassword)
    return res.status(404).json({ message: "Incorrect Password" });

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.TOKEN_SECRET_KEY,
    {
      expiresIn: process.env.TOKEN_EXPIRE_KEY,
    }
  );

  res.status(200).json({ message: "Login Successful", token });
};
