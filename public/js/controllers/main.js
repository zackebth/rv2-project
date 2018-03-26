angular.module('todoController', ['rv2Flash'])

	.controller('mainController', ['$scope','$http','Todos', 'Flash', function($scope, $http, Todos, Flash) {
		$scope.formData = {};
		$scope.loading = true;
		$scope.successLoad = function () {
			var message = '<strong>Loaded!</strong> All the todos was loaded successful.';
			Flash.create('info', message);
		};
		$scope.succesCreate = function () {
        	var message = '<strong>Success!</strong> The todo was added to the list.';
        	Flash.create('success', message);
    	};
		$scope.succesDelete = function () {
			var message = '<strong>Success!</strong> The todo was removed from the list.';
			Flash.create('success', message);
		};
		$scope.nameChanged = function () {
			var message = '<strong>Success!</strong> Your name was changed.';
			Flash.create('success', message);
		};

		Todos.get()
			.success(function(data) {
				$scope.todos = data;
				$scope.loading = false;
				$scope.successLoad();
			});

		$scope.createTodo = function() {

			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				Todos.create($scope.formData)

					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {};
						$scope.todos = data;
						$scope.succesCreate();
					});
			}
		};

		$scope.deleteTodo = function(id) {
			$scope.loading = true;

			Todos.delete(id)
				.success(function(data) {
					$scope.loading = false;
					$scope.todos = data;
					$scope.succesDelete();
				});
		};
	}]);
