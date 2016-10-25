app.factory('roomFactory', ['$http', function ($http){
	var rooms = [];
	var factory = {};
	factory.getRoom=(id, callback)=>{
		$http.get(`rooms/${id}`).then((data)=>{
			console.log(data)
		});
	};
	factory.createRoom=(data, callback)=>{
		$http.post('rooms', data).then((data) => {
			callback(data.data)
		});
	}
	return factory;	
}]);