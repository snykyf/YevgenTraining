angular.module('footballInfo')
	.controller('MatchesCtrl', [
		'$scope', 'matchesArr',
		function ($scope, matchesArr) {
			'use strict';
			$scope.matches = matchesArr;
		}
	]);