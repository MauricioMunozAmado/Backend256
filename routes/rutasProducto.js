const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');


//rutas del crud

router.post('/', productoController.agregarProducto);
router.get('/', productoController.buscarProducto);
router.get('/:id', productoController.mostrarProducto);
//router.patch('/:id', productoController.modificarProducto);  //metodo patch
router.put('/:id', productoController.actualizarProducto);
router.delete('/:id', productoController.eliminarProducto);

module.exports = router;