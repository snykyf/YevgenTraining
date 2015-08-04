angular.module('footballInfo')
	.controller('DetailedTeamCtrl', [
		'$scope', '$stateParams', 'fetchingDataService',
		function ($scope, $stateParams, fetchingDataService) {
			'use strict';

            fetchingDataService
                .getTeam($stateParams.id)
                .then(function (team) {
                    $scope.team = team;
                });
		}
	]);