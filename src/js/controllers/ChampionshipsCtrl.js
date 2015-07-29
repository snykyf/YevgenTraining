angular.module('footballInfo')
	.controller('ChampionshipsCtrl', [
		'$scope', '$http', 'championshipsArr',
		function ($scope, $http, championshipsArr) {
			'use strict';

			$scope.championships = championshipsArr;
		}
	]);