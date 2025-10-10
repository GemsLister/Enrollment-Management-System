import express from "express";
import dotenv from "dotenv";

// Mongo DB
import connectDB from "./config/db.js";

// Routes
import signUpRoute from "./routes/signUpRoute.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use("/api/signUp", signUpRoute);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server running: ${process.env.PORT || 5000}`)
);
