var http = require('http'),
	fs = require('fs');

http.createServer(function(req, res){
	var dia=new Date()
	var theoccasion=new Date(dia.getFullYear(), 12, 25)
	var beforeOccasionText="para navidad!"
	var onOccasiontext="¡Feliz navidad!"
	var monthtext=new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre")
	theoccasion.setMonth(theoccasion.getMonth()-1) //change to 0-11 month format
	var showdate=""
	var one_day=1000*60*60*24
	var calculatediff=""
	calculatediff=Math.ceil((theoccasion.getTime()-dia.getTime())/(one_day))
	if (calculatediff<0){
	var nextyeartoday=new Date()
	nextyeartoday.setFullYear(dia.getFullYear()+1)
	calculatediff=Math.ceil((nextyeartoday.getTime()-dia.getTime())/(one_day)+calculatediff)
	}
	var pluraldayornot=(calculatediff==1)? "dia" : "dias"
	if (calculatediff>0)
		res.write("<b>Faltan "+calculatediff+" "+pluraldayornot+" "+beforeOccasionText+" "+showdate+"!</b>")
	else if (calculatediff==0)
	res.write("<b>"+onOccasiontext+" "+showdate+"!</b>") 

	}).listen(8080);