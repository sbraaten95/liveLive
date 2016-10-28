app.controller('roomControl', ['$routeParams', '$scope', '$location', 'userFactory', 'roomFactory', function ($routeParams, $scope, $location, uF, rF){
	getRoom=()=>{
		rF.getRoom($routeParams.id, (room)=>{
			$scope.room = room;
			console.log('loaded room')
		});
	};
	getRoom();
}]);