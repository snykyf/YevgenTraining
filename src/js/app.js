angular.module('footballInfo', ['ui.router'])
	.config(function ($stateProvider) {
		'use strict';

		$stateProvider
			.state('dashboard', {
				url: '/dashboard',
				views: {
					'list': {
						template: "Hi, it's Dashboard page"
					}
				}
			})
			.state('championships', {
				url: '/championships',
				views: {
					'list': {
						template: '<championships-d championships="championships"></championships-d>',
						controller: 'ChampionshipsCtrl'
					}
				}
			})
			.state('championships.detailed', {
				url: '/:id',
				views: {
					'detailed': {
						template: '<championship-d championship="championship" emblem-url="emblemUrl"></championship-d>',
						controller: 'ChampionshipCtrl'
					}
				}
			})
			.state('teams', {
				url: '/teams',
				views: {
					'list': {
						template: '<teams-d championships="championships"></teams-d>',
						controller: 'TeamsCtrl'
					}
				}
			})
			.state('teams.detailed', {
				url: '/:id',
				views: {
					'detailed': {
						template: '<team-d team="team" emblem-url="emblemUrl"></team-d>',
						controller: 'TeamCtrl'
					}
				}
			})
			.state('matches', {
				url: '/matches',
				views: {
					'list': {
						template: '<matches-d matches="matches"></matches-d>',
						controller: 'MatchesCtrl'
					}
				}
			})
			.state('matches.detailed', {
				url: '/:id',
				views: {
					'detailed': {
						template: '<match-d match="match" flag-url="flagUrl"></match-d>',
						controller: 'MatchCtrl'
					}
				}
			});
	});