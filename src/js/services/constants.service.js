angular.module('footballInfo')
	.constant('constants', {
		//TODO: add one more constants for navigation
		championships : {
			url: 'http://footballbet.com.ua/api/championships/',
			idName: 'id_championship',
			emblemUrl: 'http://footballbet.com.ua/table/embl/',
			shouldCache: true
		},

		teams : {
			url: 'http://footballbet.com.ua/api/teams/',
			idName: 'id_teams',
			emblemUrl: 'http://footballbet.com.ua/teams/embl/',
			shouldCache: true
		},

		matches : {
			url: 'http://footballbet.com.ua/api/matches/',
			idName: 'idMatch',
			flagUrl: 'http://footballbet.com.ua/teams/country/',
			shouldCache: false
		},

		navigation: {
			home: {
				url: 'dashboard',
				name: 'Football Info'
			},
			links: [
				{ url: 'dashboard',     name: 'Dashboard' },
				{ url: 'championships', name: 'Championships'},
				{ url: 'teams',         name: 'Teams'},
				{ url: 'matches',       name: 'Matches'}
			]
		}
	});