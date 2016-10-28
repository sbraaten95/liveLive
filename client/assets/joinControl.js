app.controller('joinControl', ['$routeParams', '$scope', '$location', 'userFactory', 'roomFactory', function ($routeParams, $scope, $location, uF, rF){
	$scope.password=[];
	$scope.getRoom=()=>{
		rF.getRoom($routeParams.id, (room)=>{
			$scope.room = room;
		});
	};
	$scope.getRoom();

	$scope.join=(room)=>{
		var check = {
			roomId: room._id,
			password: room.password
		}
		console.log(check)
		rF.checkRoom(check, (room)=>{
			console.log(room)
			$location.path(`/room/${room._id}`);
		});
	};
}]);