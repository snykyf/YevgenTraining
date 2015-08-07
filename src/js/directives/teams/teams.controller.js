angular.module('footballInfo')
	.controller('TeamsCtrl', [
		'$scope', 'fetchingDataService',
		function ($scope, fetchingDataService) {
			'use strict';

			fetchingDataService
				.getAllChampionships()
				.then(function (championshipsObj) {
					$scope.championships = championshipsObj;
				});
		}
	]);