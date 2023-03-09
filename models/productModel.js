const mongoose = require("mongoose");


const ProductoSquema = new mongoose.Schema({

 id: Number,
 name: { type: String, required:true},
 description: { type: String, required:true },
 price: { type: Number, min:0 },
 stock: Number,
 images:[String],

});


module.exports = mongoose.model("Producto", ProductoSquema);