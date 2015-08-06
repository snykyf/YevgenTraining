angular.module('footballInfo')
	.directive('navigationD', ['$location',
		function ($location) {
			'use strict';

			return {
				restrict: 'E',
				templateUrl: 'templates/navigation.html',

				scope: {
					navigation: '=',
					isActive: "="
				},

				link: function (scope) {
					scope.isActive = function (route) {
						return $location.path().indexOf(route) >= 0;
					}
				}
			};
		}]);