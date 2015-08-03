// A RESTful factory for retrieving data
angular.module('footballInfo')
	.factory('fetchingService', ['$http', function ($http) {
		'use strict';

		//config objects
		var championships = {
			url: 'http://footballbet.com.ua/api/championships/',
			idName: 'id_championship'
		};

		var teams = {
			url: 'http://footballbet.com.ua/api/teams/',
			idName: 'id_teams'
		};

		var matches = {
			url: 'http://footballbet.com.ua/api/matches/',
			idName: 'idMatch'
		};

		//helper methods
		function fetchAllItems (store) {
            return $http
                .get(store.url, {cache: true})
                .then(function (resp) {
                    return resp.data.result;
                });
        }

		function findById (store, id, idName) {
			store = store.data || store;

			//TODO: add break
			return store.filter(function (item) {
				return item[idName] === id;
			})[0];
		}

		//service
		var factory = {};

		factory.allChampionships = function () {
			return fetchAllItems(championships);
		};

		factory.getChampionship = function (id) {
			return this
                .allChampionships()
                .then(function (championshipsArr) {
                    findById(championshipsArr, id);
                });
		};

		factory.getChampionshipTeams = function (id) {
			return this
				.allTeams()
				.then(function (teamsArr) {
					return teamsArr[id];
				});
		};

		factory.allTeams = function () {
			return fetchAllItems(teams)
				.then(function (teamsArr) {
					// get unique array of id_championship
					var championshipsId = {},
						teams = [];

					teamsArr.forEach(function (team) {
						championshipsId[team.id_championship] = null;
					});
					championshipsId = Object.keys(championshipsId);

					// sort teams by county
					championshipsId.forEach(function (championshipId) {
						teams[championshipId] = teamsArr.filter(function (team) {
							return team.id_championship == championshipId;
						});
					});

					return teams;
			});
		};

		factory.getTeam = function (id) {
			var result;
            this.allTeams().then(function (teamsArr) {
                for (var index in teams.data) {
                    result = findById(teamsArr[index], id, teams.idName);

                    if (result) {
                        break;
                    }
                }

                return result;
            });
		};

		factory.allMatches = function () {
			return fetchAllItems(matches);
		};

		factory.getMatch = function (id) {
			return findById(matches, id);
		};

		return factory;
	}]);