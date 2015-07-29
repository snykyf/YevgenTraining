angular.module('footballInfo')
	.controller('DetailedMatchCtrl', [
		'$scope', '$stateParams', '$http',
		function ($scope, $stateParams, $http) {
			'use strict';

			//TODO: move to service
			var url = 'http://footballbet.com.ua/api/matches/';
			$http
				.get(url)
				.success(function (data) {
					$scope.match = data.result.filter(function (match) {
						return match.idMatch === $stateParams.id;
					})[0];
				});
		}
	]);