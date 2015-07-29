angular.module('footballInfo')
	.controller('TeamsCtrl', [
		'$scope', '$http',
		function ($scope, $http) {
			'use strict';

			var url = 'http://footballbet.com.ua/api/teams/';
			$http
				.get(url)
				.success(function (data) {
					$scope.teams = data.result;
				});
		}
	]);