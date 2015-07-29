angular.module('footballInfo')
	.controller('MatchesCtrl', [
		'$scope', '$http',
		function ($scope, $http) {
			'use strict';

			var url = 'http://footballbet.com.ua/api/matches/';
			$http
				.get(url)
				.success(function (data) {
					$scope.matches = data.result;
			});
		}
	]);