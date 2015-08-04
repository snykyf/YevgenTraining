angular.module('footballInfo')
	.controller('DetailedChampionshipCtrl', [
		'$scope', '$stateParams', 'fetchingDataService',
		function ($scope, $stateParams, fetchingDataService) {
			'use strict';

            fetchingDataService
                .getChampionship($stateParams.id)
                .then(function (teamsArr) {
                    $scope.championshipTeams = teamsArr;
                });
        }
	]);