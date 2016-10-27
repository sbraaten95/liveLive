app.controller('createControl', ['$scope', '$location', '$cookies', 'userFactory', 'roomFactory', function ($scope, $location, $cookies, uF, rF){
	$scope.videos = [];
	function getRoom(room){
		$scope.room = room;
		console.log(room)
		$location.url('/room/' + $scope.room._id);
	};
	function videoList(video){
		console.log(video);
		$scope.videos = video.data.items;
	}
	$scope.searchVideo=function(){
		console.log('addvideo')
		rF.searchvid($scope.video, videoList);
		// $location.url('/create')
	}
	$scope.create=function(){
		rF.createRoom($scope.room, getRoom);
	}
}]);