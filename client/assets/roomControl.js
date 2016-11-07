app.controller('roomControl', ['$routeParams', '$window', '$scope', '$location', 'userFactory', 'roomFactory', function ($routeParams, $window, $scope, $location, uF, rF){
	$scope.room={};
	getRoom=()=>{
		rF.getRoom($routeParams.id, (room)=>{
			$scope.room = room;
			console.log('loaded room')
		});
	};
	getRoom();
}]);