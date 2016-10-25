app.controller('dashControl', ['$scope', '$location', '$cookies', 'userFactory', function ($scope, $location, $cookies, uF){
	$scope.join=()=>{
		$location.path(`join/${$scope.room}`);
	};
}]);