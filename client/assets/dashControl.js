app.controller('dashControl', ['$scope', '$location', '$cookies', 'userFactory', 'roomFactory', function ($scope, $location, $cookies, uF, rF){
	$scope.getRooms=()=>{
		rF.getAll((rooms)=>{
			$scope.rooms = rooms;
		});
	};
	$scope.getRooms();
	$scope.join=()=>{
		$location.path(`join/${$scope.room}`);
	};
}]);