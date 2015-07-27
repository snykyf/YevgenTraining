angular.module('footballInfo', ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider) {
		'use strict';

		$urlRouterProvider.otherwise("/dashboard");

		$stateProvider
			.state('dashboard', {
				url: '/dashboard',
				templateUrl: 'templates/dashboard.html',
				controller: 'DashboardCtrl'
			})
			.state('championships', {
				url: '/championships',
				templateUrl: 'templates/championships.html',
				controller: 'ChampionshipsCtrl'
			})
			.state('championship', {
				url: '/championships/:id',
				templateUrl: 'templates/detailed-championship.html',
				controller: 'DetailedChampionshipCtrl'
			})
			.state('matches', {
				url: '/matches',
				templateUrl: 'templates/matches.html',
				controller: 'MatchesCtrl'
			})
			.state('match', {
				url: '/matches/:id',
				templateUrl: 'templates/detailed-match.html',
				controller: 'DetailedMatchCtrl'
			})
			.state('teams', {
				url: '/teams',
				templateUrl: 'templates/teams.html',
				controller: 'TeamsCtrl'
			})
			.state('team', {
				url: '/teams/:id',
				templateUrl: 'templates/detailed-team.html',
				controller: 'DetailedTeamCtrl'
			});
	});