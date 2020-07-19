var express = require('express');
var router = express.Router();

/* GET Dashboard page. */
router.get('/', function(req, res, next) {
  datos = {
  	"nombre": req.app.locals.usuario,
  };
  console.log();
  res.render('dash',function(err,html){
  	res.render('templates/layout',{
      'usuario': datos,
  		'tituloSeccion':'Dashboard',
  		'seccion':html
  	});
  });
});

module.exports = router;