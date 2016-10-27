app.controller('createControl', ['$scope', '$location', '$cookies', 'userFactory', 'roomFactory', '$cookies', function ($scope, $location, $cookies, uF, rF, $cookies){
	$scope.videos = [];
	$scope.video = $cookies.video;
	function getRoom(room){
		$scope.room = room;
		console.log(room)
		$location.url('/room/' + $scope.room._id);
	};
	function videoList(video){
		// console.log(video);
		$scope.videos = video.data.items;
	}
	$scope.searchVideo=function(){
		console.log('addvideo')
		rF.searchVid($scope.video, videoList);
		// $location.url('/create')
	}
	$scope.create=function(){
		rF.createRoom($scope.room, getRoom);
		$cookies.video ="";
	}
	$scope.selectVid=function(video){
		$cookies.video = video;
		$location.url('/create');
		console.log($cookies.video)
	}
	$scope.returnSearch=function(){
		$cookies.video ="";
		$location.url('/search')
	}
}]);