import { Router } from "express";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { setSignUp, setLogin } from "../controllers/userController.js";

const router = Router();

router.post("/signup", asyncHandler(setSignUp));
router.post("/login", asyncHandler(setLogin));


export default router;
