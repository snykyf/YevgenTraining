angular.module('footballInfo')
	.controller('DetailedMatchCtrl', [
		'$scope', '$stateParams', 'fetchingDataService',
		function ($scope, $stateParams, fetchingDataService) {
			'use strict';

			fetchingDataService
                .getMatch($stateParams.id)
                .then(function (match) {
                    $scope.match = match;
                });
		}
	]);