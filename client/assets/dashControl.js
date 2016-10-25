app.controller('dashControl', ['$scope', '$location', '$cookies', 'userFactory', function ($scope, $location, $cookies, uF){
	$scope.getRooms=()=>{
		rf.getAll((rooms)=>{
			$scope.rooms = rooms;
		});
	};
	$scope.join=()=>{
		$location.path(`join/${$scope.room}`);
	};
}]);