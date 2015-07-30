// A RESTful factory for retrieving data
angular.module('footballInfo')
	.factory('fetchingService', ['$http', function ($http) {
		'use strict';

		//config objects
		var championships = {
			url: 'http://footballbet.com.ua/api/championships/',
			idName: 'id_championship',
			data: {}
		};

		var teams = {
			url: 'http://footballbet.com.ua/api/teams/',
			idName: 'id_teams',
			data: {}
		};

		var matches = {
			url: 'http://footballbet.com.ua/api/matches/',
			idName: 'idMatch',
			data: {}
		};

		//helper methods
		function fetchAllItems (store) {
			return $http.get(store.url)
				.then(function (resp) {
					return store.data = resp.data.result;
				});
		}

		function findById (store, id) {
			return store.data.filter(function (item) {
				return item[store.idName] === id;
			})[0];
		}

		//service
		var factory = {};

		factory.allChampionships = function () {
			return fetchAllItems(championships);
		};

		factory.getChampionship = function (id) {
			return findById(championships, id);
		};

		factory.allTeams = function () {
			return fetchAllItems(teams);
		};

		factory.getTeam = function (id) {
			return findById(teams, id);
		};

		factory.allMatches = function () {
			return fetchAllItems(matches);
		};

		factory.getMatch = function (id) {
			return findById(matches, id);
		};

		return factory;
	}]);