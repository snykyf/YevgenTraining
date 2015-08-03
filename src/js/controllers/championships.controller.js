angular.module('footballInfo')
	.controller('ChampionshipsCtrl', [
		'$scope', 'championshipsArr',
		function ($scope, championshipsArr) {
			'use strict';

			//TODO; move urls to constant service
			$scope.championships = championshipsArr;
			$scope.emblemBaseUrl = 'http://footballbet.com.ua/table/embl/';
		}
	]);