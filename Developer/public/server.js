var http=require('http');
var fs=require('fs')
var port=8888

var server = http.createServer(function(request,response){
	console.log(request)
    if(request.url === '/' || request.url === '/index.html'){
        response.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/index.html').pipe(response);
    }else if(request.url === '/nosotros.html'){
    	response.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/nosotros.html').pipe(response);
    }else if(request.url === '/servicios.html'){
    	response.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/servicios.html').pipe(response);
    }else if(request.url === '/contacto.html'){
    	response.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/contacto.html').pipe(response);
    }else if(request.url === '/menu.html'){
        response.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/public/menu.html').pipe(response);
    }else{
    	response.writeHead(404,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/404.html').pipe(response);
    }
})

server.listen(port,function(error){
	if(error){
		console.log('ocurrio un error al tratar de llamar al servidor')
	}else{
		console.log('El server ha sido lanzado en el puerto: '+port)
	}
})