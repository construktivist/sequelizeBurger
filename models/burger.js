var orm = require('../config/orm.js');

var burger = {
	all: function (callback) {
		orm.selectAll('burgers', function (result) {
			callback(result);
		});
	},
	// cols and vals are arrays
	create: function (cols, vals, callback) {
		orm.insertOne('burgers', cols, vals, function (result) {
			callback(result);
		});
	},
	update: function (table, objColVals, condition, callback) {
		orm.updateOne('burgers', objColVals, condition, function (result) {
			callback(result);
		});
	}
};

module.exports = burger;