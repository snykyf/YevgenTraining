angular.module('footballInfo')
	.controller('DetailedTeamCtrl', [
		'$scope', '$stateParams', 'fetchingService',
		function ($scope, $stateParams, fetchingService) {
			'use strict';
			$scope.team = fetchingService.getTeam($stateParams.id);
		}
	]);