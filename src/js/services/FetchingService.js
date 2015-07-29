// A RESTful factory for retrieving data
angular.module('footballInfo')
	.factory('fetchingService', ['$http', function ($http) {
		'use strict';

		//var path = 'http://footballbet.com.ua/api/championships/';
		//var championships = $http.get(path).then(function (resp) {
		//	console.log("got championships!");
		//	return resp.result;
		//});
		//
		var factory = {};
		//factory.all = function () {
		//	console.log("need championships!");
		//	return championships;
		//};
		//factory.get = function (id) {
		//	return championships.filter(function (championship) {
		//		return championship.id_championship === id;
		//	})[0];
		//};

		factory.all = function () {
			return [
				{id_championship: 1, title: 'first'},
				{id_championship: 2, title: 'second'}
			];
		};
		factory.get = function (id) {
			return {
				name: "championship name " + id,
				sename: "championship sename " + id,
				title: "championship title " + id
			};
		};

		return factory;
	}]);