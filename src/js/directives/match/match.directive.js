angular.module('footballInfo')
    .directive('matchD', function () {
        'use strict';

        return {
            restrict: 'E',
            templateUrl: 'templates/match.html',

            scope: {
                match: '=',
                flagUrl: '='
            }
        };
    });