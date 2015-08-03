angular.module('footballInfo')
	.controller('TeamsCtrl', [
		'$scope', 'fetchingService', 'teamsArr', 'championshipsArr',
		function ($scope, fetchingService, teamsArr, championshipsArr) {
			'use strict';

			$scope.teams = teamsArr;
			$scope.championships = championshipsArr;
			$scope.emblemBaseUrl = 'http://footballbet.com.ua/teams/embl/';
			$scope.sortingOrder = false;

			$scope.setSortingOrder = function () {
				$scope.sortingOrder = !$scope.sortingOrder;
			};
		}
	]);