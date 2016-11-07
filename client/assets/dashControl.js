app.controller('dashControl', ['$scope', '$location', '$cookies', 'userFactory', 'roomFactory', function ($scope, $location, $cookies, uF, rF){
	
	$scope.getRooms=()=>{
		rF.getAll((rooms)=>{
			$scope.rooms = rooms;
		});
	};
	$scope.getRooms();
	if(!$cookies.get('user')){
		$location.url('/')
	}
}]);