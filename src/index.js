const express = require('express');  //aca llamamos los modulos
const conectarBD = require('../config/db');
const cors = require('cors');


//creamos la variable app de nuestro servidor
const app = express();
const port = process.env.PORT || 5000;

//conexion bases de datos
conectarBD();
app.use(cors());
app.use(express.json());

//ruta para consumir la api cliente
app.use('/api/clientes', require('../routes/rutasCliente'));
app.use('/api/producto', require('../routes/rutasProducto'));



//creamos la ruta para verificar nuestro servidor en la web
app.get('/', (req, res) =>{
    res.send("hola estamos conectados desde la web")
});


//ruta de nuestro servidor
app.listen(port, () => {
    console.log("el servidor esta conectado http://localhost:5000/");
});