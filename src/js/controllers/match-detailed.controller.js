angular.module('footballInfo')
	.controller('DetailedMatchCtrl', [
		'$scope', '$stateParams', 'fetchingDataService',
		function ($scope, $stateParams, fetchingDataService) {
			'use strict';
			$scope.match = fetchingDataService.getMatch($stateParams.id);
		}
	]);