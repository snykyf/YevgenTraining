angular.module('footballInfo')
    .directive('championshipD', function () {
        'use strict';

        return {
            restrict: 'E',
            templateUrl: 'js/championship/championship.html',

            scope: {
                championship: '=',
                emblemUrl: '='
            }
        };
    });