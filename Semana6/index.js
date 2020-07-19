/*var _ = require("underscore")

var lista=[1,2,3,4,5,6]; _.each(lista,function(item){
     console.log(item)
});*/

var param_replacer = require('./lib/replace');

var objetivo = "%hello% %world%! -- %world% %hello%";
var ingles = "en";
var español = "es";
var reemplazos = {
	"en": {
       "hello" : "Hello",
       "world" : "World"
	},
	"es": {
		"hello" : "Hola",
		"world" : "Mundo"
	}
};

var resultado1 = param_replacer.replace(objetivo, reemplazos[ingles]);
var resultado2 = param_replacer.replace(objetivo, reemplazos[español]);

console.log(resultado1);
console.log(resultado2);


