angular.module('footballInfo')
    .directive('championshipsD', function () {
        'use strict';

        return {
            restrict: 'E',
            templateUrl: 'js/championships/championships.html',

            scope: {
                championships: '='
            }
        };
    });