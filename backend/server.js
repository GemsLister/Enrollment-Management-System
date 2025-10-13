import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// Mongo DB
import connectDB from "./config/db.js";

// Routes
import userRoute from "./routes/userRoute.js";

dotenv.config();
const app = express();
connectDB();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/", userRoute); // For sign-up and login

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server running: ${process.env.PORT || 5000}`)
);
