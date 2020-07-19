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
    camino='public/index.html';
  }
  encaminar(pedido,respuesta,camino);

});

servidor.listen(8888);


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
      `<!doctype html><html><head></head><body style="background: skyblue; font-family: verdana; color #fff;">
          <div class="container" style="text-align: center;margin-top: 100px;">
          <h1>Respuesta</h1>
          
            <div class="form-group">
              <label for="nombres"><span class="glyphicon glyphicon-user"></span> Nombres y Apellidos</label><br>
              <input type="text" class="form-control" name="nombres" value="${formulario['nombres']}">
            </div>
            <div class="form-group">
              <label for="correo"><span class="glyphicon glyphicon-envelope"></span> Correo</label><br>
              <input type="text" class="form-control" name="correo" value="${formulario['correo']}">
            </div>
            <div class="form-group">
              <label for="telefono"><span class="glyphicon glyphicon-phone"></span> Telefono Movil</label><br>
              <input type="text" class="form-control" name="telefono" value="${formulario['telefono']}">
            </div>
            <div class="form-group">
              <label for="nacimiento"><span class="glyphicon glyphicon-heart-empty"></span> Fecha de Nacimiento</label><br>
              <input type="text" class="form-control" name="nacimiento" value="${formulario['nacimiento']}">
            </div>
            <div class="form-group">
              <label for="mensaje"><span class="glyphicon glyphicon-comment"></span> Mensaje</label><br>
              <input class="form-control" name="mensaje" value="${formulario['mensaje']}">
            </div>
      <br><br>
      <a href="index.html">Retornar</a>
         </div>

      </body></html>`;
    respuesta.end(pagina);
  });	
}




console.log('Servidor web iniciado');