app.factory('roomFactory', ['$http', function ($http){
	var rooms = [];
	var factory = {};
	factory.getRoom=(id, callback)=>{
		$http.get(`/rooms/${id}`).then((data)=>{
			callback(data.data)
		});
	};
	factory.getAll=(callback)=>{
		$http.get('/rooms').then((data)=>{
			callback(data.data);
		})
	}
	factory.createRoom=(data, callback)=>{
		$http.post('/rooms', data).then((data)=>{
			callback(data.data);
		});
	};
	factory.checkRoom=(data, callback)=>{
		$http.post(`/rooms/${data.roomId}`, data).then((data)=>{
			console.log(data)
			callback(data.data);
		});
	};
	return factory;	
}]);