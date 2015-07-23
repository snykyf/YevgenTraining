angular.module('footballInfo')
	.controller('ChampionshipsCtrl', [
		'$scope', '$http',
		function ($scope, $http) {
			'use strict';

			$http
				.get("http://footballbet.com.ua/api/championships/")
				.success(function (data) {
					$scope.championships = data.result;
				});
		}
	]);