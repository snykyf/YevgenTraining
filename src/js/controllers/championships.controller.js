angular.module('footballInfo')
	.controller('ChampionshipsCtrl', [
		'$scope', 'fetchingDataService',
		function ($scope, fetchingDataService) {
			'use strict';

			//TODO: move urls to constant service
            fetchingDataService
                .getAllChampionships()
                .then(function (championshipsArr) {
                    $scope.championships = championshipsArr;
                });

			$scope.emblemBaseUrl = 'http://footballbet.com.ua/table/embl/';
		}
	]);