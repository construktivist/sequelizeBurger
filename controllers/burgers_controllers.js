var express = require('express');
var router = express.Router();
var models = require('../models');
var sequelizeConnection = models.sequelize;
sequelizeConnection.sync()


router.get('/', function (request, result) {
	result.redirect('/burger');
});

router.get('/burger', function (request, result) {
	models.Burger.findAll()
	
	.then(function(burger){
		var hbsObject = { burgers: burger };
		console.log(hbsObject);
		result.render('index', hbsObject);
	})
});

router.post('/burger/create', function (request, result) {
	models.Burger.create({
		burger_name: request.body.name
	})
	.then(function(){
		result.redirect("/burger");
	})
});

router.put('/burger/update/:id', function (request, result) {
	models.Burger.update({
		devoured: true
	},
	{
		where: {id : request.params.id}
	})
	.then(function(){
		result.redirect("/burger");
	})
});




// 	var condition = 'id = ' + request.params.id;

// 	console.log('condition', condition);

// 	burger.update("burgers", { devoured: request.body.devoured }, condition, function () {
// 		result.redirect('/burger');
// 	});
// });

module.exports = router;
