angular.module('footballInfo')
	.controller('ChampionshipsCtrl', [
		'$scope', 'fetchingDataService', 'constants',
		function ($scope, fetchingDataService, constants) {
			'use strict';

            fetchingDataService
                .getAllChampionships()
                .then(function (championshipsArr) {
                    $scope.championships = championshipsArr;
                });

			$scope.emblemUrl = constants.championships.emblemUrl;
		}
	]);