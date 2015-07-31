angular.module('footballInfo')
	.controller('DetailedChampionshipCtrl', [
		'$scope', '$stateParams', 'teamsArr',
		function ($scope, $stateParams, teamsArr) {
			'use strict';
			$scope.championshipTeams = teamsArr;
		}
	]);