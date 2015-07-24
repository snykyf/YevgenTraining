angular.module('footballInfo', ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider) {
		'use strict';

		$urlRouterProvider.otherwise("/dashboard");

		$stateProvider
			.state('dashboard', {
				templateUrl: 'templates/dashboard.html',
				controller: 'DashboardCtrl'
			})
			.state('championships.:id', {
				templateUrl: 'templates/detailed-championship.html',
				controller: 'DetailedChampionshipCtrl'
			})
			.state('championships', {
				templateUrl: 'templates/championships.html',
				controller: 'ChampionshipsCtrl'
			})
			.state('matches/:id', {
				templateUrl: 'templates/detailed-match.html',
				controller: 'DetailedMatchCtrl'
			})
			.state('matches', {
				templateUrl: 'templates/matches.html',
				controller: 'MatchesCtrl'
			})
			.state('teams/:id', {
				templateUrl: 'templates/detailed-team.html',
				controller: 'DetailedTeamCtrl'
			})
			.state('teams', {
				templateUrl: 'templates/teams.html',
				controller: 'TeamsCtrl'
			});
	});