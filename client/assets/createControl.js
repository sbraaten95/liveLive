app.controller('createControl', ['$scope', '$location', '$cookies', 'userFactory', function ($scope, $location, $cookies, uF){
	$scope.addVideo=function(){
		$location.url('/create')
	}
	$scope.create=function(){
		$location.url('/room')
	}
}]);