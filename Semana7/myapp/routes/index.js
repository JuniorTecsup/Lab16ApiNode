var express = require('express');
var router = express.Router();

//RUTEO------------------------------------------->
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { nombre: 'Junior Vilchez Ramos' });
});

router.get('/pruebaJunior', function(req, res, next) {
  res.render('Hello', { nombre: 'Junior Vilchez Ramos' });
});

module.exports = router;
