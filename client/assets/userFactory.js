app.factory('userFactory', ['$http', function ($http){
	var users = [];
	var factory = {};
	factory.login=(inputUser, callback)=>{
		$http.post(`/users/${inputUser.email}`).then((data)=>{
			console.log(data);
			callback(data);
		});
	};	
	factory.register=(inputData, callback)=>{
		$http.post('/users', inputData).then((data)=>{
			console.log(data)
			if (data.data && data.data.errmsg) {
				callback(data.data);
			} else if (data.data && data.data.errors) {
				callback(data.data);
			} else {
				user = data.data;
				callback(user);
			}
		});
	};
	factory.getUsers=(callback)=>{
		$http.get('/users').then((data)=>{
			callback(data.data);
		});
	};
	factory.getCurrentUser=(id, callback)=>{
		$http.get(`/users/${id}`).then((data)=>{
			callback(data.data);
		});
	};
	return factory;	
}]);