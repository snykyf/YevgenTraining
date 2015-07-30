angular.module('footballInfo')
	.controller('DetailedMatchCtrl', [
		'$scope', '$stateParams', 'fetchingService',
		function ($scope, $stateParams, fetchingService) {
			'use strict';
			$scope.match = fetchingService.getMatch($stateParams.id);
		}
	]);