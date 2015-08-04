angular.module('footballInfo')
	.controller('TeamsCtrl', [
		'$scope', 'fetchingDataService',
		function ($scope, fetchingDataService) {
			'use strict';

			$scope.emblemBaseUrl = 'http://footballbet.com.ua/teams/embl/';
			$scope.sortingOrder = false;

            fetchingDataService
                .getAllTeams()
                .then(function (teamsArr) {
                    $scope.teams = teamsArr;
                });

			$scope.setSortingOrder = function () {
				$scope.sortingOrder = !$scope.sortingOrder;
			};
		}
	]);