var _ = require("underscore")

var employeesCollection = [
     {
     	"id":1,
     	"name":"Soni",
     	"designation":"SE",
     	"salary":"25000"
     },
     {
     	"id":2,
     	"name":"Rhoit",
     	"designation":"SEE",
     	"salary":"35000"
     },
     {
     	"id":3,
     	"name":"Akanksha",
     	"designation":"Manager",
     	"salary":"45000"
     },
     {
     	"id":4,
     	"name":"Mohan",
     	"designation":"Accountant",
     	"salary":"30000"
     },
     {
     	"id":5,
     	"name":"Gina",
     	"designation":"SSE",
     	"salary":"35000"
     }
];

var cargos = _.map(employeesCollection,function(employee){
       return {nombre: employee.name, cargo: employee.designation};
});

/*console.log(cargos)
console.log(_.pluck(employeesCollection, "name"));
*/
var empleados_see = _.chain(employeesCollection)
.filter(function (employee){
	return employee.designation === 'SEE'
})
.map(function (employee){
	return {name: employee.name, id: employee.id};
})
.value();

console.log(empleados_see);