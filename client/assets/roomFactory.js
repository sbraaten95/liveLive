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
			rooms = data.data;
			callback(rooms);
		});
	};
	factory.createRoom=(data, callback)=>{
		$http.post('/rooms', data).then((data)=>{
			callback(data.data);
		});
	};
	factory.checkRoom=(data, callback)=>{
		$http.post(`/rooms/${data.roomId}`, data).then((data)=>{
			callback(data.data);
		});
	};
	factory.searchVid=function(data, callback){
		var url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCaEWRwZALuph0aaaY27hugZlFneh9C9WE&part=snippet&q=";
		$http.get(url+data).then(function(data, err){
			if(err){
				console.log(err);
			}
			else{
				callback(data);
			}
		})
	}
	return factory;	
}]);