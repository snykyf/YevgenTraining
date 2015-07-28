angular.module('footballInfo', ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider) {
		'use strict';

		$urlRouterProvider.otherwise("/dashboard");

		$stateProvider
			.state('dashboard', {
				url: '/dashboard',
				views: {
					'list': {
						templateUrl: 'templates/dashboard.html',
						controller: 'DashboardCtrl'
					}
				}
			})
			.state('championships', {
				url: '/championships',
				views: {
					'list': {
						templateUrl: 'templates/championships.html',
						controller: 'ChampionshipsCtrl'
					}
				}
			})
			.state('championships.detailed', {
				url: '/:id',
				views: {
					'detailed': {
						templateUrl: 'templates/championship-detailed.html',
						controller: 'DetailedChampionshipCtrl'
					}
				}
			})
			.state('matches', {
				url: '/matches',
				views: {
					'list': {
						templateUrl: 'templates/matches.html',
						controller: 'MatchesCtrl'
					}
				}
			})
			.state('matches.detailed', {
				url: '/:id',
				views: {
					'detailed': {
						templateUrl: 'templates/match-detailed.html',
						controller: 'DetailedMatchCtrl'
					}
				}
			})
			.state('teams', {
				url: '/teams',
				views: {
					'list': {
						templateUrl: 'templates/teams.html',
						controller: 'TeamsCtrl'
					}
				}
			})
			.state('teams.detailed', {
				url: '/:id',
				views: {
					'detailed': {
						templateUrl: 'templates/team-detailed.html',
						controller: 'DetailedTeamCtrl'
					}
				}
			});
	});