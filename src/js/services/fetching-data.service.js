// A RESTful factory for retrieving data
angular.module('footballInfo')
	.factory('fetchingDataService', ['$http', '$q', 'constants',
		function ($http, $q, constants) {
			'use strict';

			//helper methods
			function fetchAllItems (config) {
				return $http
					.get(config.url, {cache: config.shouldCache})
					.then(function (resp) {
						return resp.data.result;
					});
			}

			function findById (store, id, idName) {
				var result;

				for (var key in store ) {
					if (store[key][idName] === id) {
						result = store[key];
						break;
					}
				}

				return result;
			}

			//service
			var factory = {};

			factory.getAllChampionships = function () {
				return $q
					.all([
						fetchAllItems(constants.championships),
						fetchAllItems(constants.teams)
					])
					.then(function (data) {
						var championshipsArr = data[0],
							teamsArr = data[1],
							championships = {}; //mapped by id

						championshipsArr.forEach(function (championship) {
							championship.teams = teamsArr.filter(function (team) {
								return team.id_championship == championship.id_championship;
							});
							championships[championship.id_championship] = championship;
						});

						return championships;
					});
			};

			factory.getChampionship = function (id) {
				return this
					.getAllChampionships()
					.then(function (championshipsObj) {
						return championshipsObj[id];
					});
			};

			factory.getAllTeams = function () {
				return fetchAllItems(constants.teams);
			};

			factory.getTeam = function (id) {
				return this
					.getAllTeams()
					.then(function (teamsArr) {
						return findById(teamsArr, id, constants.teams.idName);
					});
			};

			factory.getAllMatches = function () {
				return fetchAllItems(constants.matches);
			};

			factory.getMatch = function (id) {
				return this
					.getAllMatches()
					.then(function (matchesArr) {
						return findById(matchesArr, id, constants.matches.idName);
					});
			};

			return factory;
		}]);