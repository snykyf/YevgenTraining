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
				resolve: {
					championshipsArr: ['fetchingService',
						function (fetchingService) {
							return fetchingService.allChampionships();
						}]
				},
				views: {
					'list': {
						templateUrl: 'templates/championships.html',
						controller: 'ChampionshipsCtrl'
					}
				}
			})
			.state('championships.detailed', {
				url: '/:id',
				resolve: {
					teamsArr: ['fetchingService', '$stateParams',
						function (fetchingService, $stateParams) {
							return fetchingService.getChampionshipTeams($stateParams.id);
						}]
				},
				views: {
					'detailed': {
						templateUrl: 'templates/championship-detailed.html',
						controller: 'DetailedChampionshipCtrl'
					}
				}
			})
			.state('teams', {
                url: '/teams',
                resolve: {
                    teamsArr: ['fetchingService',
                        function (fetchingService) {
                            return fetchingService.allTeams();
                        }],
					championshipsArr: ['fetchingService',
                        function (fetchingService) {
                            return fetchingService.allChampionships();
                        }]
                },
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
			})
			.state('matches', {
				url: '/matches',
				resolve: {
					matchesArr: ['fetchingService',
						function (fetchingService) {
							return fetchingService.allMatches();
						}]
				},
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
			});
	});