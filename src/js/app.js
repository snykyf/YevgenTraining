angular.module('footballInfo', ['ngRoute'])
	.config(function ($routeProvider) {
		'use strict';

		$routeProvider.
			when('/dashboard', {
				templateUrl: 'templates/dashboard.html',
				controller: 'DashboardCtrl'
			}).
			when('/championships', {
				templateUrl: 'templates/championships.html',
				controller: 'ChampionshipsCtrl'
			}).
			when('/matches', {
				templateUrl: 'templates/matches.html',
				controller: 'MatchesCtrl'
			}).
			when('/teams', {
				templateUrl: 'templates/teams.html',
				controller: 'TeamsCtrl'
			}).
			otherwise({
				redirectTo: '/dashboard'
			});
	});