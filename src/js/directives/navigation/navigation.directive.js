angular.module('footballInfo')
	.directive('navigationD', ['$location',
		function ($location) {
			'use strict';
			//TODO: move to view

			return {
				restrict: 'E',
				templateUrl: 'templates/navigation.html',

				scope: {
					navigation: '='
				},

				link: function (scope) {
					scope.isActive = function (route) {
						return $location.path().indexOf(route) >= 0;
					}
				}
			};
		}]);