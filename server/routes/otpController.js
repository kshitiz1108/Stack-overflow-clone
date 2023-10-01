// routes/routes.js

import express  from "express";
const router = express.Router();
// Correct import for otpController


import { sendOtp, verifyOtp } from "../controller/otpController.js";

// Define your routes here
router.post("/sendOtp", sendOtp);
router.post("/verifyOtp", verifyOtp);

export default router;
