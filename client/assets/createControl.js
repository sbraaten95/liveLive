app.controller('createControl', ['$scope', '$location', '$cookies', 'userFactory', 'roomFactory', function ($scope, $location, $cookies, uF, rF){
	function getRoom(room){
		$scope.room = room;
		console.log(room)
		$location.url('/room/' + $scope.room._id);
	};
	$scope.addVideo=function(){
		$location.url('/create')
	}

	$scope.create=function(){
		rF.createRoom($scope.room, getRoom);
	}
}]);