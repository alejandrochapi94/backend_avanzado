import express from "express";
import morgan from "morgan";
import "dotenv/config";
import mongoose from "mongoose";

//Conexión a la bbdd con variables de entorno
//const DB_URL = "mongodb://localhost:27017/003_apirest";
const DB_URL = (process.env.NODE_ENV === "dev"
    ? 'mongodb://localhost:27017/003_apirest_test'
    : process.env.DB_URL || "mongodb://localhost:27017/003_apirest");

mongoose.connect(DB_URL)
.then(() => {
    console.log(`Conectado a la base de datos: ${DB_URL}`);
})
.catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
})

const app = express();

app.get("/", (req, res) => {    
    res.send("¡Hola, Node.js!");
});

export default app;