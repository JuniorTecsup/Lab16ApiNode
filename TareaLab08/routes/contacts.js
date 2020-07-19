// las rutas

var express= require('express');
var router = express.Router();
var controller = require('../controllers/contactsController');

router.get('/posts/show', function(req, res){
	controller.show(req, res);
});

router.post('/posts/create', function(req, res){
	controller.create(req, res);
});

router.post('/posts/update', function(req, res){
	controller.update(req, res);
});

router.post('/posts/remove/:id', function(req, res){
	controller.remove(req, res);
});

module.exports = router;