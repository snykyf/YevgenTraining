angular.module('footballInfo')
	.service('notesService', function () {
		var data = [
			{id:1, title:'Note 1'},
			{id:2, title:'Note 2'}
		];

		return {
			notes: function () {
				return data;
			},
			addNote: function (noteTitle) {
				var currentIndex = data.length + 1;
				data.push({
					id:currentIndex, title:noteTitle
				});
			}
		};
	})
	.directive('myNotebook', function () {
		return {
			restrict:"E",
			scope:{
				notes:'='
			},
			templateUrl: "js/directives/notebook-directive.html"
		};
	})
	.directive('myNote', function () {
		return {
			restrict:'E',
			scope:{
				note:'='
			}
		};
	})
	.controller('NotebookCtrl', ['$scope', 'notesService', function ($scope, notesService) {
		$scope.getNotes = function () {
			return notesService.notes();
		};

		$scope.addNote = function (noteTitle) {
			if(noteTitle != '') {
				notesService.addNote(noteTitle);
			}
		};

		$scope.resetForm = function() {
			$scope.noteTitle = '';
		};
	}]);