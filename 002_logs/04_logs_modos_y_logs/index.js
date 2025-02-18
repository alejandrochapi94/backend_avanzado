const express = require('express');
const morgan = require('morgan');
const winston = require('winston');
const app = express();

const port = 3000;

//Obtener el valor de la variable de estado
const entornoActual = process.env.NODE_ENV || 'dev';

console.log("entorno actual de trabajo: ",entornoActual)

//winston
const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [
        new winston.transports.File({filename: 'error.log', level: 'error'}),
        new winston.transports.File({filename: 'combined.log'}),
    ],
});


//Middlewares
if (entornoActual === 'dev') {
    app.use(morgan('dev'));
    console.log(entornoActual, "<- en este estamos trabajando")
    logger.info("Acceso correcto a la ruta raíz desde desarrollo")
    console.log("Servidor ha accedido en modo desarrollo!!!");
} else {
    console.log("Servidor ha accedido en modo producción!!!")
    logger.info("Acceso correcto a la ruta raíz desde produccion")
}


app.get('/', (req, res) => {    
    console.log("Éxito al acceder a la ruta raíz")
    res.send('Servidor con node y logs en producción')
})

app.get("/error", (req, res) => {    
    //log por consola (desarrollo) (error)
    console.error('Error en la solicitud a la ruta /error');
    res.send('Error en la solicitud')
})

app.listen(port, () => {
    console.log(`Ejecutando en http://localhost:${port}`);
})


//Tarea

//Crear un servidor (busque una idea para un servidor)
