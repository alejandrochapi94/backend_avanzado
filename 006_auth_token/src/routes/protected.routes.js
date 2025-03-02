import express from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/profile", verifyToken, (req, res) => {
  res.json({ message: "Bienvenido a tu perfil", user: req.user, usuario: "Usuario nuevo" });
});

export default router;
