import SignUp from "../models/signUpModel.js";
import bcrypt from "bcrypt";

const setSignUp = async (req, res) => {
  const { username, email, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10);
  const newUser = await SignUp.create({
    username,
    email,
    password: hashPassword,
  });

  await newUser.save();
  res
    .status(200)
    .json({
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
    });
};

export default setSignUp;