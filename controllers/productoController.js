const Producto = require("../models/Producto");

//funcion agregar productos

exports.agregarProducto = async (req, res) => {
  try {
    let producto;
    producto = new Producto(req.body);
    await producto.save();
    res.json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error al agregar un producto");
  }
};

//funcion buscar todos los productos
exports.buscarProducto = async (req, res) => {
  try {
    const producto = await Producto.find();
    res.json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error al mostrar producto");
  }
};

//funcion buscar un producto por id, (un solo producto)
exports.mostrarProducto = async (req, res) => {
  try {
    let producto = await Producto.findById(req.params.id);
    if (!producto) {
      res.status(404).send({ msg: "Producto no encontrado con ese ID" });
    } else {
      res.json(producto);
    }
  } catch (error) {
    restart.status(500).send("hubo un error al mostrar un producto");
  }
};

//funcion modificar producto metodo patch
exports.modificarProducto = async (req, res) => {
  try {
    const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!producto) {
      res.status(404).send({ msg: "Producto no encontrado con ese ID" });
    } else {
      res.json(producto);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error al modificar el producto");
  }
};


//funcion modificar producto con el metodo put
exports.actualizarProducto = async (req, res) => {
  try {
    const producto = await Producto.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );

    if (!producto) {
      req.status(404).send({ msg: "hubo un error al actualizar Producto" });
    } else {
      res.json(producto);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error al actualizar producto");
  }
};


//funcion eliminar producto
exports.eliminarProducto = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(404).send({msg: " producto no encontrado con ese ID"});
        }else{
            await Producto.findOneAndDelete({_id: req.params.id});
            res.json({msg : "producto eliminado"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al eliminar producto')        
    }
}
