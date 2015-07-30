angular.module('footballInfo')
	.controller('DetailedChampionshipCtrl', [
		'$scope', '$stateParams', 'fetchingService',
		function ($scope, $stateParams, fetchingService) {
			'use strict';
			$scope.championship = fetchingService.getChampionship($stateParams.id);
		}
	]);