angular.module('footballInfo')
	.controller('MatchesCtrl', [
		'$scope', '$http',
		function ($scope, $http) {
			'use strict';

			$http
				.get("http://footballbet.com.ua/api/matches/")
				.success(function (data) {
					$scope.matches = data.result;
			});
		}
	]);