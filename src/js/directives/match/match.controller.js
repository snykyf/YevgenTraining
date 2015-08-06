angular.module('footballInfo')
	.controller('MatchCtrl', [
		'$scope', '$stateParams', 'fetchingDataService', 'constants',
		function ($scope, $stateParams, fetchingDataService, constants) {
			'use strict';

			$scope.flagUrl = constants.matches.flagUrl;

			fetchingDataService
				.getMatch($stateParams.id)
				.then(function (match) {
					$scope.match = match;
				});
		}
	]);