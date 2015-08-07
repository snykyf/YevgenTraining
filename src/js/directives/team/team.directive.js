angular.module('footballInfo')
    .directive('teamD', function () {
        'use strict';

        return {
            restrict: 'E',
            templateUrl: 'templates/team.html',

            scope: {
                team: '=',
                emblemUrl: '='
            }
        };
    });