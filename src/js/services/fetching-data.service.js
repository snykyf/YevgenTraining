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
            function fetchAllItems (store, shouldNotCache) {
                return $http
                    .get(store.url, {cache: !shouldNotCache})
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
                var promises = [];
                promises.push(fetchAllItems(championships));
                promises.push(fetchAllItems(teams));

                return $q
                    .all(promises)
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
                        return championshipsObj[id]['teams'];
                    });
            };

            factory.getAllTeams = function () {
                return fetchAllItems(teams);
            };

            factory.getTeam = function (id) {
                return this
                    .getAllTeams()
                    .then(function (teamsArr) {
                        return findById(teamsArr, id, teams.idName);
                    });
            };

            factory.getAllMatches = function () {
                return fetchAllItems(matches, true);
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