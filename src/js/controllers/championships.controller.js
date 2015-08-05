angular.module('footballInfo')
	.controller('ChampionshipsCtrl', [
		'$scope', 'fetchingDataService',
		function ($scope, fetchingDataService) {
			'use strict';

            fetchingDataService
                .getAllChampionships()
                .then(function (championshipsArr) {
                    $scope.championships = championshipsArr;
                });
		}
	]);