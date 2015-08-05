angular.module('footballInfo')
	.controller('DetailedTeamCtrl', [
		'$scope', '$stateParams', 'fetchingDataService', 'constants',
		function ($scope, $stateParams, fetchingDataService, constants) {
			'use strict';
			$scope.emblemUrl = constants.teams.emblemUrl;

            fetchingDataService
                .getTeam($stateParams.id)
                .then(function (team) {
                    $scope.team = team;
                });
		}
	]);