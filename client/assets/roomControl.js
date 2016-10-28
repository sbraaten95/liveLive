app.controller('roomControl', ['$routeParams', '$scope', '$location', 'userFactory', 'roomFactory', '$cookies', function ($routeParams, $scope, $location, uF, rF, $cookies){
	$scope.room={};
	getRoom=()=>{
		rF.getRoom($routeParams.id, (room)=>{
			$scope.room = room;
			console.log('loaded room')
		});
	};
	getRoom();
	if(!$cookies.get('user')){
		$location.url('/')
	}
}]);