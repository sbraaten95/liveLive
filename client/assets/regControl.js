app.controller('regControl', ['$scope', '$location', '$cookies', 'userFactory', function ($scope, $location, $cookies, uF){
	$scope.register=()=>{
		uF.register($scope.newUser, (user)=>{
			if (user.errmsg || user.errors) {
				console.log(user)
				$scope.errors = user.errmsg ? user.errmsg : (user.errors ? user.errors : {});
			} else {
				$cookies.put('user', user._id);
				$location.path('/dashboard');
			}
		});
	};
}]);