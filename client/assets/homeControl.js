app.controller('homeControl', ['$location', '$cookies', 'userFactory', function ($location, $cookies, uF){
	var _this = this;
	this.login=()=>{
		uF.login(_this.reqUser, (user)=>{
			$cookies.put('user', user._id);
			$location.path('/dashboard');
		});
	};
}]);