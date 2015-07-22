angular.module('fInfo')
	.controller('FInfoCtrl', [
		'$scope',
		function ($scope) {
			'use strict';

			$scope.matches = "Hi, it's Matches page";
			$scope.teams = "Hi, it's Teams page";
			$scope.championships = "Hi, it's Championships page";
			$scope.dashboard  = "Hi, it's Dashboard page";
		}
	]);