angular.module('footballInfo')
    .directive('matchesD', function () {
        'use strict';

        return {
            restrict: 'E',
            templateUrl: 'js/matches/matches.html',

            scope: {
                matches: '='
            }
        };
    });