angular.module('footballInfo', ['ngRoute'])
	.config(function ($routeProvider) {
		'use strict';

		$routeProvider.
			when('/dashboard', {
				templateUrl: 'templates/dashboard.html',
				controller: 'DashboardCtrl'
			}).
			when('/championships/:id', {
				templateUrl: 'templates/detailed-championship.html',
				controller: 'DetailedChampionshipCtrl'
			}).
			when('/championships', {
				templateUrl: 'templates/championships.html',
				controller: 'ChampionshipsCtrl'
			}).
			when('/matches/:id', {
				templateUrl: 'templates/detailed-match.html',
				controller: 'DetailedMatchCtrl'
			})
			.when('/matches', {
				templateUrl: 'templates/matches.html',
				controller: 'MatchesCtrl'
			}).
			when('/teams/:id', {
				templateUrl: 'templates/detailed-team.html',
				controller: 'DetailedTeamCtrl'
			}).
			when('/teams', {
				templateUrl: 'templates/teams.html',
				controller: 'TeamsCtrl'
			}).
			otherwise({
				redirectTo: '/dashboard'
			});
	});