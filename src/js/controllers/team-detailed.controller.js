angular.module('footballInfo')
	.controller('DetailedTeamCtrl', [
		'$scope', '$stateParams', 'fetchingDataService',
		function ($scope, $stateParams, fetchingDataService) {
			'use strict';
			$scope.team = fetchingDataService.getTeam($stateParams.id);
		}
	]);