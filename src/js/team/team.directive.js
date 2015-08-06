angular.module('footballInfo')
    .directive('teamD', function () {
        'use strict';

        return {
            restrict: 'E',
            templateUrl: 'js/team/team.html',

            scope: {
                team: '=',
                emblemUrl: '='
            }
        };
    });