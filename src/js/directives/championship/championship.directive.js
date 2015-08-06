angular.module('footballInfo')
    .directive('championshipD', function () {
        'use strict';

        return {
            restrict: 'E',
            templateUrl: 'templates/championship.html',

            scope: {
                championship: '=',
                emblemUrl: '='
            }
        };
    });