angular.module('footballInfo')
	.controller('TeamsCtrl', [
		'$scope', 'fetchingService', 'teamsArr', 'championshipsArr',
		function ($scope, fetchingService, teamsArr, championshipsArr) {
			'use strict';

			$scope.teams = teamsArr;
			$scope.championships = championshipsArr;
			$scope.emblemBaseUrl = 'http://footballbet.com.ua/teams/embl/';
			$scope.sortingOrder = false;

			$scope.getChampionship = function (id) {
				//TODO: try to find out how to call service method here
				return this.championships.filter(function (championship) {
					return championship['id_championship'] === id;
				})[0];
			};

			$scope.setSortingOrder = function () {
				$scope.sortingOrder = !$scope.sortingOrder;
			};
		}
	]);