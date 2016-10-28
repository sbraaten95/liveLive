app.controller('joinControl', ['$routeParams', '$scope', '$location', 'userFactory', 'roomFactory', '$cookies', function ($routeParams, $scope, $location, uF, rF, $cookies){
	$scope.password=[];
	$scope.joinerror="";
	$scope.getRoom=()=>{
		rF.getRoom($routeParams.id, (room)=>{
			$scope.room = room;
		});
	};
	$scope.getRoom();

	$scope.join=(room)=>{
		$cookies.put('room', room._id);
		var check = {
			roomId: room._id,
			password: room.roompassword
		}
		rF.checkRoom(check, (newroom)=>{
			
			if(newroom._id){
				$location.path(`/room/${newroom._id}`);
			}
			else{
				console.log("meeee", room)
				$scope.error="Invalid Password";
			}
		});
	};
	if(!$cookies.get('user')){
		$location.url('/')
	}
}]);