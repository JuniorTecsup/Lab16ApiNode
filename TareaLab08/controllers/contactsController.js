let model = require("../models/contacts_model");


module.exports = {
	show: function(req, res){
		model.find({},function(err, items){
			if(!err){
				res.json(items)
			}else{
				res.sendStatus(500);
				console.log(err);
			}
		});
	},
	create : function(req, res){
		let obj = new model;
		obj.titulo = req.body.titulo;
		obj.descripcion = req.body.descripcion;
		obj.categoria = req.body.categoria;
		obj.fecha = req.body.fecha;
		obj.comentarios = rep.body.comentarios;
		obj.save(function(err, newData){
			if(err){
				console.log(err);
			    res.sendStatus(500);
		    }else{
		    	res.json(newData);
		    }
		});
	},
	update : function(req, res){
		let val_id = req.body.id;
		let datos = {
			titulo: req.body.titulo,
			descripcion : req.body.descripcion,
			categoria : req.body.categoria,
			fecha : req.body.fecha
		};
		model.updateOne({_id:val_id},datos,function(err,newData){
			if(err){
				console.log(err);
				res.sendStatus(500);
			}else{
				res.send(newData);
			}
		});
	},
	remove : function(req, res){
		let val_id = req.params.id;
		model.deleteOne({_id:val_id}, function(err){
			if(err){
				console.log(err);
				res.sendStatus(500);
			}else{
				res.sendStatus(200);
			}
		});
	}
};
