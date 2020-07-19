var http = require('http'),
	fs = require('fs');

http.createServer(function(req, res){

		var date = new Date();
		var primerDia = new Date(date.getFullYear(), date.getMonth(), 1);
		var ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0);
 
		res.write("<br>El primer dia es:  "+primerDia.getDate());
		res.write("<br>El ultimo dia es:  "+ultimoDia.getDate());

	}).listen(8080);

