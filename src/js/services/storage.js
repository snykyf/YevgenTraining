// A RESTful factory for retrieving data from API
angular.module('footballInfo')
	.factory('contacts', ['$http', function ($http) {
		'use strict';

		var path = 'http://footballbet.com.ua/api/championships/';
		var contacts = $http.get(path).then(function (resp) {
			return resp.result;
		});

		var factory = {};
		factory.all = function () {
			return contacts;
		};
		factory.get = function (id) {
			return contacts.then(function(){
				return utils.findById(contacts, id);
			})
		};
		return factory;
	}]);