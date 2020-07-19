let model = require("../models/contacts_model");


module.exports = {
	show: function(req, res){
		model.find({},function(err, items){
			if(!err){
				let comments = []
				items.forEach(object => {
                    object.comentarios.forEach(comment => {
                    comments.push(comment)
                    });
                });
				res.status(200).json({
                comentarios: comments
                });
			}else{
				res.sendStatus(500);
				console.log(err);
			}
		});
	},
	create : function(req, res){
		let val_id = req.body.id;//req.params.id;
		//console.log(val_id);
		let datos = {
			autor: req.body.autor,
			mensaje : req.body.mensaje,
			fecha : req.body.fecha
		};
		model.findOne({_id:val_id},function(err,data){

			if(err){
				console.log(err);
				res.sendStatus(500);
			}else{
				data.comentarios.push(datos)
			    console.log(data);				
			   	model.updateOne({_id:val_id},data,function(err,newData){
			   		if(err){
				        console.log(err);
				        res.sendStatus(500);
			        }else{
				        res.send(newData);
			        }
			   	});
			}
		});
	},
	update : function(req, res){
		let val_id = req.body.id;//req.params.id;
		let var_autor = req.body.autor;
		let datos = {
			autor: req.body.autor,
			mensaje : req.body.mensaje,
			fecha : req.body.fecha
		};
        
        


		model.findOne({_id:val_id},function(err,data){
			if(err){
				console.log(err);
				res.sendStatus(500);
			}else{
				model.updateOne({'comentarios.autor': var_autor}, {'$set': {
    			'comentarios.$.mensaje': req.body.mensaje,
    			'comentarios.$.fecha': req.body.fecha
			}}, function(err, estado) {
          		if(err){
					console.log(err);
					res.sendStatus(500);
				}else{
				
			        model.findOne({_id:val_id},function(err,newData){
			        if(err){
				    	console.log(err);
				    	res.sendStatus(500);
			    	}else{
			    		//console.log(newData);
			    		res.status(200).json(newData);
			    		//res.sendStatus(200);
			    	}});
					
				}
			});
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


/*
detail : function(req, res){
		let val_id = req.params.id;
		model.findOne({_id:val_id},function(err, data){
			if(err){
				console.log(err);
				res.sendStatus(500);
			}else{
				res.json(data);
			}
		});
	},
*/
