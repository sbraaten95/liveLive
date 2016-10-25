app.controller('dashControl', ['$scope', '$location', '$cookies', 'userFactory', function ($location, $cookies, uF){
	$scope.join=()=>{
		$location.path(`join/${$scope.room}`);
	};
}]);