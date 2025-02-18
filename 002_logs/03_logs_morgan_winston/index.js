const express = require('express');
const app = express();
const morgan = require('morgan');
const winston = require('winston');
const port = 3000;

//Winston

const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [
        new winston.transports.File({filename: 'error.log', level: 'error'}),
        new winston.transports.File({filename: 'combined.log'}),
    ],
});
    


//middlewares
app.use(morgan('dev'));

app.get('/', (req, res) => {
    console.log("Acceso correcto a la ruta raíz")
    console.info("Acceso correcto a la ruta raíz desde info")
    logger.info("Acceso correcto a la ruta raíz desde info logger")
    res.send('Servidor con node y logs en producción')
})
app.get('/error', (req, res) => {
    //log por consola (desarrollo) (error)
    logger.error('Error en la solicitud');//muestra un mensaje en rojo
    console.error("Errro desde el console.error")
    res.send('Error en la solicitud')
})



app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
})