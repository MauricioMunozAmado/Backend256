const mongoose = require ('mongoose');

const productoSchema =mongoose.Schema({

producto:{
    type: String,
    required: true
},

categoria:{
    type: String,
    required: true
},

cantidad:{
    type: Number,
    required: true
},

medida:{
    type: String,
    required: true
},

lote:{
    type: Number,
    required: true
},

ubicacion:{
    type: String,
    required: true
},


},{versionKey:false});

module.exports = mongoose.model('Producto', productoSchema );