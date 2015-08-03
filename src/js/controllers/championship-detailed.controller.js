angular.module('footballInfo')
	.controller('DetailedChampionshipCtrl', [
		'$scope', 'championshipTeamsArr',
		function ($scope, championshipTeamsArr) {
			'use strict';
			$scope.championshipTeams = championshipTeamsArr;
		}
	]);