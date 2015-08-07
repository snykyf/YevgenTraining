angular.module('footballInfo')
    .directive('championshipD', function () {
        'use strict';
		//TODO:  emblemUrl: '=' to  emblemUrl: '@'

        return {
            restrict: 'E',
            templateUrl: 'templates/championship.html',

            scope: {
                championship: '=',
                emblemUrl: '='
            }
        };
    });