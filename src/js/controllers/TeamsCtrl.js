angular.module('footballInfo')
	.controller('TeamsCtrl', [
		'$scope', 'teamsArr', 'fetchingService',
		function ($scope, teamsArr, fetchingService) {
			'use strict';

            $scope.teams = teamsArr;
		}
	]);