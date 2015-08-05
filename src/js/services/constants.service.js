angular.module('footballInfo')
	.constant('constants', {
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
		}
	});