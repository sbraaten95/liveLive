app.controller('homeControl', ['$scope', '$location', '$cookies', 'userFactory', function ($scope, $location, $cookies, uF){
	$scope.login=()=>{
		uF.login($scope.reqUser, (user)=>{
			$cookies.put('user', user._id);
			$location.path('/dashboard');
		});
	};
}]);