app.controller('joinControl', ['$scope', '$location', 'userFactory', function ($scope, $location, uF){
	$scope.submit=()=>{
		$location.path('/room');
	}
}]);