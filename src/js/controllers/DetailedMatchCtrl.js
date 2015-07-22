angular.module('footballInfo')
	.controller('DetailedMatchCtrl', [
		'$scope', '$routeParams', '$http',
		function ($scope, $routeParams, $http) {
			'use strict';

			//TODO: move to service
			$http
				.get("http://footballbet.com.ua/api/matches/")
				.success(function (data) {
					$scope.match = data.result.filter(function (match) {
						return match.idMatch === $routeParams.id;
					})[0];
				});
		}
	]);