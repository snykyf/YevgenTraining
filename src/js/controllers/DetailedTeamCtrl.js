angular.module('footballInfo')
	.controller('DetailedTeamCtrl', [
		'$scope', '$routeParams', '$http',
		function ($scope, $routeParams, $http) {
			'use strict';

			//TODO: move to service
			$http
				.get("http://footballbet.com.ua/api/teams/")
				.success(function (data) {
					$scope.team = data.result.filter(function (team) {
						return team.id_championship === $routeParams.id;
					})[0];
				});
		}
	]);