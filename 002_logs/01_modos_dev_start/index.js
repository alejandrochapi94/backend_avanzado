import express from "express";

const app = express();
const port = 3000;

const entornoActual = process.env.NODE_ENV || 'dev';

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
    console.log(`Entorno actual en el que estamos: ${entornoActual}`);
})