angular.module('footballInfo')
    .directive('championshipsD', function () {
        'use strict';

        return {
            restrict: 'E',
            templateUrl: 'templates/championships.html',

            scope: {
                championships: '='
            }
        };
    });