// las rutas

//Agregamos el codido del word

var express= require('express');
var router = express.Router();
var controller = require('../controllers/productoController');

router.get('/', function(req, res){
      controller.show(req, res);
});

router.post('/',function(req, res){
	controller.create(req, res);
});

router.get('/show/:id', function(req, res){
	controller.detail(req, res);
});

router.post('/update', function(req, res){
	controller.update(req, res);
});

router.get('/delete/:id', function(req, res){
	controller.delete(req, res);
});

module.exports = router;