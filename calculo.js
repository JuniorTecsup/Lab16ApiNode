var http = require('http'),
    fs = require('fs')
    parser = require('./parse_fecha.js'),//asi se llama el archivo
    p = parser.parse_fechas;//asi se llama la function
    datos = parser.actualF;

http.createServer(function(req,res){
    fs.readFile('./fecha.html', function(err,html){
        var html_string = html.toString();

        var respuesta = p(req),
        parametros = respuesta['parametros'],
        valores = respuesta['valores'];

        for(var i=0; i<parametros.length; i++){
            var html_string = html_string.replace('{'+parametros[i]+'}',valores[i]);
        }

        html_string = html_string.replace('{actual}',datos['actual']);

        res.writeHead(200,{'Content-type':'text/html'});
        res.write(html_string);
        res.end();
    });

}).listen(8080);
