angular.module('footballInfo')
	.controller('TeamsCtrl', [
		'$scope', '$http',
		function ($scope, $http) {
			'use strict';

			$http
				.get("http://footballbet.com.ua/api/teams/")
				.success(function (data) {
					$scope.teams = data.result;
				});
		}
	]);