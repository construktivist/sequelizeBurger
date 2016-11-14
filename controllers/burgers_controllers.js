var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (request, result) {
	result.redirect('/burger');
});

router.get('/burger', function (request, result) {
	burger.all(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		result.render('index', hbsObject);
	});
});

router.post('/burger/create', function (request, result) {
	burger.create(['burger_name'], [request.body.name], function () {
		result.redirect('/burger');
	});
});

router.put('/burger/update/:id', function (request, result) {
	var condition = 'id = ' + request.params.id;

	console.log('condition', condition);

	burger.update("burgers", { devoured: request.body.devoured }, condition, function () {
		result.redirect('/burger');
	});
});

module.exports = router;
