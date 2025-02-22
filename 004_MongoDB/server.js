import "dotenv/config";
import app from "./app.js";
const PORT = process.env.PORT || 3000;
const entorno = process.env.NODE_ENV

const server = app.listen(PORT, () => {
    console.log(`Entorno actual: ${entorno}`);
    console.log(`Example app listening on port http://localhost:${PORT}`);
});

export default server; //temportal y test