angular.module('footballInfo')
	.controller('DetailedChampionshipCtrl', [
		'$scope', '$stateParams', 'fetchingDataService', 'constants',
		function ($scope, $stateParams, fetchingDataService, constants) {
			'use strict';

            fetchingDataService
                .getChampionship($stateParams.id)
                .then(function (championshipObj) {
                    $scope.championshipTeams = championshipObj.teams;
					$scope.emblemUrl = constants.championships.emblemUrl + championshipObj.image;
                });
        }
	]);