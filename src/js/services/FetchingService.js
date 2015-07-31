// A RESTful factory for retrieving data
angular.module('footballInfo')
	.factory('fetchingService', ['$http', function ($http) {
		'use strict';

		//config objects
		var championships = {
			url: 'http://footballbet.com.ua/api/championships/',
			idName: 'id_championship',
			data: null
		};

		var teams = {
			url: 'http://footballbet.com.ua/api/teams/',
			idName: 'id_teams',
			data: {}
		};

		var matches = {
			url: 'http://footballbet.com.ua/api/matches/',
			idName: 'idMatch',
			data: null
		};

		//helper methods
		function fetchAllItems (store) {
            return $http
                .get(store.url)
                .then(function (resp) {
                    return resp.data.result;
                });
        }

		function findById (store, id, idName) {
			var store = store.data || store;

			return store.filter(function (item) {
				return item[idName] === id;
			})[0];
		}

		//service
		var factory = {};

		factory.allChampionships = function () {
			return championships.data = fetchAllItems(championships);
		};

		factory.getChampionship = function (id) {
			return this
                .allChampionships()
                .then(function (championshipsArr) {
                    debugger;
                    findById(championshipsArr, id);
                });
		};

		factory.allTeams = function () {
			return fetchAllItems(teams)
				.then(function (teamsArr){
					// get unique array of id_championship
					var championshipsId = {};

					teamsArr.forEach(function (team) {
						championshipsId[team.id_championship] = null;
					});
					championshipsId = Object.keys(championshipsId);

					// sort teams by county
					championshipsId.forEach(function (championshipId) {
						teams.data[championshipId] = teamsArr.filter(function (team) {
							return team.id_championship == championshipId;
						});
					});

					return teams.data;
			});
		};

		factory.getTeam = function (id) {
			var result;
			for (var index in teams.data) {
				result = findById(teams.data[index], id, teams.idName);

				if (result) {
					break;
				}
			}

			return result;
		};

		factory.allMatches = function () {
			return matches.data = fetchAllItems(matches);
		};

		factory.getMatch = function (id) {
			return findById(matches, id);
		};

		return factory;
	}]);