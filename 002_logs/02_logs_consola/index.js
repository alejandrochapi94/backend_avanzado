//logs en la Etapa de desarrollo

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    //log por consola (desarrollo) (debug)
    console.debug('Solicitud recibida');
    console.log("Acceso correcto a la ruta raíz")
    res.send('Hola servidor con logs!')
})


//ruta para un error
app.get('/error', (req, res) => {
    //log por consola (desarrollo) (error)
    console.error('Error en la solicitud');//muestra un mensaje en rojo
    res.send('Error en la solicitud')
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
})