app.controller('homeControl', ['$scope', '$location', '$cookies', 'userFactory', function ($scope, $location, $cookies, uF){
	$scope.login=()=>{
		$scope.errors = "";
		uF.login($scope.reqUser, (user)=>{
			if(!user.error){				
				$cookies.put('user', user._id);
				$location.path('/dashboard');
			}
			else{
				$scope.errors = "Invalid Login";
			}
		});
	};
	$scope.logout=function(){
		$cookies.remove('user');
		$location.url('/');

	}
}]);