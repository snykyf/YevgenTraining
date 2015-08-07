angular.module('footballInfo')
	.controller('NavigationCtrl', [
		'$scope', 'constants',
		function ($scope, constants) {
			'use strict';
			$scope.navigation = constants.navigation;
		}
	]);