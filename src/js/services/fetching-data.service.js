// A RESTful factory for retrieving data
angular.module('footballInfo')
	.factory('fetchingDataService', ['$http', '$q',
        function ($http, $q) {
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

            factory.getAllChampionships = function () {
                return fetchAllItems(championships);
            };

            factory.getChampionship = function (id) {
                return this
                    .getAllTeams()
                    .then(function (teamsArr) {
                        return teamsArr[id];
                    });
            };

            factory.getAllTeams = function () {
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
                return this
                    .getAllTeams()
                    .then(function (teamsArr) {
                        var result;

                        for (var index in teamsArr) {
                            result = findById(teamsArr[index], id, teams.idName);
                            if (result) {
                                break;
                            }
                        }

                        return result;
                    });
            };

            factory.getAllMatches = function () {
                return fetchAllItems(matches);
            };

            factory.getMatch = function (id) {
                return this
                    .getAllMatches()
                    .then(function (matchesArr) {
                        return findById(matchesArr, id, matches.idName);
                    });
            };

            return factory;
	}]);