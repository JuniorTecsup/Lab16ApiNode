const http=require('http');
const url=require('url');
const fs=require('fs');
const querystring = require('querystring');

const mime = {
   'html' : 'text/html',
   'css'  : 'text/css',
   'jpg'  : 'image/jpg',
   'ico'  : 'image/x-icon',
   'mp3'  : 'audio/mpeg3',
   'mp4'  : 'video/mp4'
};

const servidor=http.createServer((pedido ,respuesta) => {
    const objetourl = url.parse(pedido.url);
  let camino='public'+objetourl.pathname;
  if (camino=='public/'){//Pagina de Inicio
    camino='public/menu.html';
  }else if(camino=='public/nosotros.html'){//NOSOTROS
    camino='public/nosotros.html'
  }else if(camino=='public/contacto.html'){//CONTACTO
    camino='public/contacto.html'
  }else if(camino=='public/servicios.html'){//SERVICIOS
    camino='public/servicios.html'
  }
  encaminar(pedido,respuesta,camino);

});

servidor.listen(8080);


function encaminar (pedido,respuesta,camino) {
  console.log(camino);
  switch (camino) {
    case 'public/recuperardatos': {
      recuperar(pedido,respuesta);
      break;
    }	
    default : {  
      fs.stat(camino, error => {
        if (!error) {
        fs.readFile(camino,(error, contenido) => {
          if (error) {
            respuesta.writeHead(500, {'Content-Type': 'text/plain'});
            respuesta.write('Error interno');
            respuesta.end();					
          } else {
            const vec = camino.split('.');
            const extension=vec[vec.length-1];
            const mimearchivo=mime[extension];
            respuesta.writeHead(200, {'Content-Type': mimearchivo});
            respuesta.write(contenido);
            respuesta.end();
          }
        });
      } else {
        respuesta.writeHead(404,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/public/404.html').pipe(respuesta);
        }
      });	
    }
  }	
}


function recuperar(pedido,respuesta) {
  let info = '';
  pedido.on('data', datosparciales => {
    info += datosparciales;
  });
  pedido.on('end', () => {
    const formulario = querystring.parse(info);
    respuesta.writeHead(200, {'Content-Type': 'text/html'});
    const pagina=
      `<!doctype html><html><head></head><body>
          Nombres y Apellidos: ${formulario['nombres']}<br>
          Correo: ${formulario['correo']}<br>
          Telefono Movil: ${formulario['telefono']}<br>
          Fecha de Nacimiento: ${formulario['nacimiento']}<br>
          Mensaje: ${formulario['mensaje']}<br>
      <a href="contacto.html">Retornar</a>

      </body></html>`;
    respuesta.end(pagina);
  });	
}




console.log('Servidor web iniciado');