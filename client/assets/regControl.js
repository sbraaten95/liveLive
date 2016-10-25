app.controller('regControl', ['$location', '$cookies', 'userFactory', function ($location, $cookies, uF){
	var _this = this;
	this.register=()=>{
		uF.register(this.newUser, (user)=>{
			if (user.errmsg || user.errors) {
				_this.errors = user.errmsg ? user.errmsg : (user.errors ? user.errors : {});
			} else {
				$cookies.put('user', user._id);
				$location.path('/dashboard');
			}
		});
	};
}]);