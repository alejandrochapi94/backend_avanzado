import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import winston from "winston";
import authRoutes from "./routes/auth.routes.js";
import protectedRoutes from "./routes/protected.routes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//Winston

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
      new winston.transports.File({filename: 'error.log', level: 'error'}),
      new winston.transports.File({filename: 'combined.log'}),
  ],
});

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);

const DB_URL = (process.env.NODE_ENV === "dev"
    ? 'mongodb://localhost:27017/jwt-auth'
    : process.env.DB_URL || "mongodb://localhost:27017/jwt-auth");
    

mongoose
  .connect(DB_URL)
  .then(() => console.log("Conectado a la base de datos: ", DB_URL))
  .catch((error) => console.error("Error en la conexión a MongoDB:", error));

export default app;

