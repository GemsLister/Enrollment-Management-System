import { Router } from "express";
import { asyncHandler } from "../middleware/asyncHandler.js";
import setSignUp from "../controllers/signUpController.js";

const router = Router();

router.post("/", asyncHandler(setSignUp));

export default router;
