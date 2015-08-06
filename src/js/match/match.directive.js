angular.module('footballInfo')
    .directive('matchD', function () {
        'use strict';

        return {
            restrict: 'E',
            templateUrl: 'js/match/match.html',

            scope: {
                match: '=',
                flagUrl: '='
            }
        };
    });