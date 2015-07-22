angular.module('fInfo', ['ngRoute'])
	.config(function ($routeProvider) {
		'use strict';

		$routeProvider.
			when('/dashboard', {
				templateUrl: 'templates/dashboard.html',
				controller: 'FInfoCtrl'
			}).
			when('/championships', {
				templateUrl: 'templates/championships.html',
				controller: 'FInfoCtrl'
			}).
			when('/matches', {
				templateUrl: 'templates/matches.html',
				controller: 'FInfoCtrl'
			}).
			when('/teams', {
				templateUrl: 'templates/teams.html',
				controller: 'FInfoCtrl'
			}).
			otherwise({
				redirectTo: '/dashboard'
			});
	});