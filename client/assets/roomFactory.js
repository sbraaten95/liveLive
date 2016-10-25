app.factory('roomFactory', ['$http', function ($http){
	var rooms = [];
	var factory = {};
	factory.getRoom=(id, callback)=>{
		$http(`rooms/${id}`).then((data)=>{
			console.log(data)
		});
	};
	return factory;	
}]);