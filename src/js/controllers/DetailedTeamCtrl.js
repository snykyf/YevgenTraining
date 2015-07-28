angular.module('footballInfo')
	.controller('DetailedTeamCtrl', [
		'$scope', '$stateParams', '$http',
		function ($scope, $stateParams, $http) {
			'use strict';

			//TODO: move to service
			$http
				.get("http://footballbet.com.ua/api/teams/")
				.success(function (data) {
					$scope.team = data.result.filter(function (team) {
						return team.id_teams === $stateParams.id;
					})[0];
				});
		}
	]);