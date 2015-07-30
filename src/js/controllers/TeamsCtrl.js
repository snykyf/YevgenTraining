angular.module('footballInfo')
	.controller('TeamsCtrl', [
		'$scope', 'teamsArr',
		function ($scope, teamsArr) {
			'use strict';
			$scope.teams = teamsArr;
		}
	]);