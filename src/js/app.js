angular.module('footballInfo', ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider) {
		'use strict';

		$urlRouterProvider.otherwise("/dashboard");

		//TODO: move resolve
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
					championshipsArr: ['fetchingDataService',
						function (fetchingDataService) {
							return fetchingDataService.getAllChampionships();
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
						championshipTeamsArr: ['fetchingDataService', '$stateParams',
						function (fetchingDataService, $stateParams) {
							return fetchingDataService.getChampionshipTeams($stateParams.id);
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
                    teamsArr: ['fetchingDataService',
                        function (fetchingDataService) {
                            return fetchingDataService.getAllTeams();
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
					matchesArr: ['fetchingDataService',
						function (fetchingDataService) {
							return fetchingDataService.getAllMatches();
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