angular.module('footballInfo')
	.controller('ChampionshipsCtrl', [
		'$scope', 'championshipsArr',
		function ($scope, championshipsArr) {
			'use strict';

			$scope.championships = championshipsArr;
			$scope.emblemBaseUrl = 'http://footballbet.com.ua/table/embl/';
		}
	]);