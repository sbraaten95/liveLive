app.controller('joinControl', ['$routeParams', '$scope', '$location', 'userFactory', 'roomFactory', function ($routeParams, $scope, $location, uF, rF){
	$scope.getRoom=()=>{
		rF.getRoom($routeParams.id, (room)=>{
			$scope.room = room;
		});
	};
	$scope.getRoom();

	$scope.submit=()=>{
		var check = {
			roomId: $scope.room._id,
			password: $scope.password
		}
		rF.checkRoom(check, (room)=>{
			$location.path(`room/${room._id}`);
		});
	};
}]);