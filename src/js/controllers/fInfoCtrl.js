angular.module('fInfo', [])
	.controller('FInfoCtrl', [
		'$scope',
		function ($scope) {
			'use strict';
			$scope.gretting = "Hi, it's Football Info application";
		}
	]);