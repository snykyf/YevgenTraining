angular.module('footballInfo')
	.controller('MatchesCtrl', [
		'$scope', 'fetchingDataService',
		function ($scope, fetchingDataService) {
			'use strict';

			fetchingDataService
				.getAllMatches()
				.then(function (matchesArr) {
					$scope.matches = matchesArr;
				});
		}
	]);