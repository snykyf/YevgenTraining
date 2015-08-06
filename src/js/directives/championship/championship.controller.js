angular.module('footballInfo')
	.controller('ChampionshipCtrl', [
		'$scope', '$stateParams', 'fetchingDataService', 'constants',
		function ($scope, $stateParams, fetchingDataService, constants) {
			'use strict';

			fetchingDataService
				.getChampionship($stateParams.id)
				.then(function (championshipObj) {
					$scope.championship = championshipObj.teams;
					$scope.emblemUrl = constants.championships.emblemUrl + championshipObj.image;
				});
		}
	]);