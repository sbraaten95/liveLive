app.controller('regControl', ['$scope', '$location', '$cookies', 'userFactory', "$sce", function ($scope, $location, $cookies, uF, $sce){
	$scope.errors=[];
	$scope.register=()=>{
		$scope.errors = [];
		if($scope.newUser.password == $scope.newUser.checkpassword){	
			uF.register($scope.newUser, (user)=>{
				if (user.errors) {
					console.log(user)
					if(user.errors.email){
						$scope.errors.push(user.errors.email.message);
					}
					if(user.errors.password){
						$scope.errors.push(user.errors.password.message);
					}
				} else {
					$cookies.put('user', user._id);
					$location.url('/dashboard');
				}

			});
		}
		else{
			$scope.errors.push("Passwords must match")
		}
	};
}]);