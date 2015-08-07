angular.module('footballInfo')
    .directive('teamsD', function () {
        'use strict';
		//TODO: how not change url in accordion?
		//TODO: why it tries to get match flag without match.image

        return {
            restrict: 'E',
            templateUrl: "templates/teams.html",

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