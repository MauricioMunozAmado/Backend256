const Cliente = require("../models/Cliente");

//funcion agregar clientes

exports.agregarClientes = async (req, res) => {
  try {
    let clientes;
    clientes = new Cliente(req.body);
    await clientes.save();
    res.json(clientes);
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error al agregar un cliente");
  }
};

//funcion buscar todos los clientes
exports.buscarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error al mostrar clientes");
  }
};

//funcion buscar un cliente por id, (un solo cliente)
exports.mostrarCliente = async (req, res) => {
  try {
    let clientes = await Cliente.findById(req.params.id);
    if (!clientes) {
      res.status(404).send({ msg: "Cliente no encontrado con esE ID" });
    } else {
      res.json(clientes);
    }
  } catch (error) {
    res.status(500).send('hubo un error al mostrar los clientes');
  }
};

//funcion modificar cliente metodo patch
exports.modificarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!clientes) {
      res.status(404).send({ msg: "Cliente no encontrado con ese ID" });
    } else {
      res.json(clientes);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error al modificar el cliente");
  }
};


//funcion modificar cliente con el metodo put
exports.actualizarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findOneAndUpdate(
      { _id: req.params.id },
      req.body
    );

    if (!clientes) {
      req.status(404).send({ msg: "hubo un error al actualizar Cliente" });
    } else {
      res.json(clientes);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("hubo un error al actualizar cliente");
  }
};


//funcion eliminar cliente
exports.eliminarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).send({msg: " cliente no encontrado con ese ID"});
        }else{
            await Cliente.findOneAndDelete({_id: req.params.id});
            res.json({msg : "cliente eliminado"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error al eliminar cliente')        
    }
}
