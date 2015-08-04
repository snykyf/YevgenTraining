angular.module('footballInfo')
	.controller('TeamsCtrl', [
		'$scope', 'fetchingDataService',
		function ($scope, fetchingDataService) {
			'use strict';

			$scope.emblemBaseUrl = 'http://footballbet.com.ua/teams/embl/';
			$scope.sortingOrder = false;

            fetchingDataService
                .getAllChampionships()
                .then(function (championshipsObj) {
                    $scope.championships = championshipsObj;
                });

			$scope.setSortingOrder = function () {
				$scope.sortingOrder = !$scope.sortingOrder;
			};
		}
	]);