angular.module('footballInfo')
    .constant('constants', {
        championships : {
            url: 'http://footballbet.com.ua/api/championships/',
            idName: 'id_championship',
            emblemUrl: 'http://footballbet.com.ua/table/embl/'
        },

        teams : {
            url: 'http://footballbet.com.ua/api/teams/',
            idName: 'id_teams',
            emblemUrl: 'http://footballbet.com.ua/teams/embl/'
        },

        matches : {
            url: 'http://footballbet.com.ua/api/matches/',
            idName: 'idMatch',
            shouldNotCache: true
        }
    });