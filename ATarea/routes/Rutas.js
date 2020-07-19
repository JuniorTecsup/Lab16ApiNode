var express = require('express');
var router = express.Router();
//var controllerComentario = require('../Controller/ComentarioController');
var controllerPost = require('../Controller/PostController');

/* GET users listing. */
router.get('/contacto/show', function(req, res) {
  	controllerPost.show(req, res);
});

router.get('/contacto/buscar/:id', function(req, res){
	controllerPost.buscar(req, res);
})

router.post('/contacto/create', function(req, res){
	controllerPost.create(req, res);
});

router.post('/contacto/edit', function(req, res){
	controllerPost.update(req, res);
});

router.post('/contacto/delete/:id', function(req, res){
	controllerPost.remove(req, res);
});

module.exports = router;