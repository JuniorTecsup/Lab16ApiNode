//Conexion
var mongoose = require("mongoose");
Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/test");
var modelSchema = new Schema({
	nombre: {type: String,required:true},
	descripcion: {type: String, required:true},
	imagen: String,
	precio: {type:String, required:true}
});

model = mongoose.model('producto', modelSchema, 'producto')
module.exports = model;