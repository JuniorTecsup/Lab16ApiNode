//Conexion
var mongoose = require("mongoose");
Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/users");
///
var modelSchema = new Schema({
	//id: {type: String,required:true},
	titulo: {type: String,required:true},
	descripcion: {type: String, required:true},
	categoria: {type:String, required:true},
	fecha: {type:String, required:true},
	comentarios: []
});

model = mongoose.model('contacts', modelSchema, 'contacts')
module.exports = model;