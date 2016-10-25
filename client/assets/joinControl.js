app.controller('joinControl', ['$routeParams', '$scope', '$location', 'userFactory', 'roomFactory', function ($routeParams, $scope, $location, uF, rF){
	$scope.getRoom=()=>{
		rF.getRoom($routeParams.id, (room)=>{
			$scope.room = room;
		});
	};
	$scope.getRoom();

	$scope.submit=()=>{
		$location.path(`room/${$routeParams.id}`);
	};
}]);