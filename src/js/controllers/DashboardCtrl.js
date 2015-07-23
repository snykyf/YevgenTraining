angular.module('footballInfo')
	.controller('DashboardCtrl', [
		'$scope',
		function ($scope) {
			'use strict';

			$scope.dashboard  = "Hi, it's Dashboard page";
		}
	]);