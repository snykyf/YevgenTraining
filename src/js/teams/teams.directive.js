angular.module('footballInfo')
    .directive('teamsD', function () {
        'use strict';

        return {
            restrict: 'E',
            templateUrl: "js/teams/teams.html",

            scope: {
                championships: '='
            },

            link: function (scope) {
                scope.sortingOrder = false;
                scope.setSortingOrder = function () {
                    scope.sortingOrder = !scope.sortingOrder;
                };
            }
        };
    });