var express= require('express');
var router = express.Router();
var controller = require('../controllers/comentariosController');

router.get('/comment/listar', function(req, res){
	controller.show(req, res);
});

router.post('/comment/create', function(req, res){
	controller.create(req, res);
});

router.post('/comment/update', function(req, res){
	controller.update(req, res);
});

router.post('/comment/remove/:id', function(req, res){
	controller.remove(req, res);
});

module.exports = router;