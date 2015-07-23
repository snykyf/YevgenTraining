angular.module('footballInfo')
	.controller('DetailedChampionshipCtrl', [
		'$scope', '$routeParams', '$http',
		function ($scope, $routeParams, $http) {
			'use strict';

			// TODO: move to factory
			$http
				.get("http://footballbet.com.ua/api/championships/")
				.success(function (data) {
					$scope.championship = data.result.filter(function (championship) {
						return championship.id_championship === $routeParams.id;
					})[0];
				});
		}
	]);