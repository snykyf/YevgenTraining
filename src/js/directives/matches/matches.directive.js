angular.module('footballInfo')
    .directive('matchesD', function () {
        'use strict';

        return {
            restrict: 'E',
            templateUrl: 'templates/matches.html',

            scope: {
                matches: '='
            }
        };
    });