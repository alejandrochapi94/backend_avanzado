import express from "express";
import { register, login } from "../controllers/auth.controller.js";

const router = express.Router();
//endpoints
router.post("/register", register);
router.post("/login", login);

export default router;
