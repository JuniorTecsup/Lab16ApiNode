function parse_fechas(req){
	var arreglo_parametros = [];
	var parametros = [];
	var valores = [];
	if(req.url.indexOf('?')>0){
		var url_data = req.url.split('?');
		arreglo_parametros = url_data[1].split('&');
	}
	for(var i=0;i<arreglo_parametros.length;i++){
		var parametro = arreglo_parametros[i];
		var param_data = parametro.split('=');
		parametros[i] = param_data[0];
		valores[i] = param_data[1];
	}
	return {
		parametros : parametros,
		valores : valores
	}
}

var format = require('date-format');
format.asString(); //defaults to ISO8601 format and current date.
format.asString(new Date()); //defaults to ISO8601 format
var actu = format.asString('yyyy-MM-dd', new Date());

module.exports.parse_fechas =parse_fechas;

module.exports.actualF = {
     actual: actu
};