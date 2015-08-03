angular.module('footballInfo')
	.controller('TeamsCtrl', [
		'$scope', 'teamsArr',
		function ($scope, teamsArr) {
			'use strict';

			$scope.teams = teamsArr;
			$scope.emblemBaseUrl = 'http://footballbet.com.ua/teams/embl/';
			$scope.sortingOrder = false;

			$scope.setSortingOrder = function () {
				$scope.sortingOrder = !$scope.sortingOrder;
			};
		}
	]);