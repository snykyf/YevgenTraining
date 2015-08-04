angular.module('footballInfo')
	.controller('TeamsCtrl', [
		'$scope', 'fetchingDataService', 'constants',
		function ($scope, fetchingDataService, constants) {
			'use strict';

			$scope.emblemUrl = constants.teams.emblemUrl;
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