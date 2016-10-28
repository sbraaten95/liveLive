app.controller('joinControl', ['$routeParams', '$scope', '$location', 'userFactory', 'roomFactory', '$cookies', function ($routeParams, $scope, $location, uF, rF, $cookies){
	$scope.password=[];
	$scope.getRoom=()=>{
		rF.getRoom($routeParams.id, (room)=>{
			$scope.room = room;
		});
	};
	$scope.getRoom();

	$scope.join=(room)=>{
		$cookies.room = room._id
		var check = {
			roomId: room._id,
			password: room.password
		}
		rF.checkRoom(check, (room)=>{
			$location.path(`/room/${room._id}`);
		});
	};
}]);