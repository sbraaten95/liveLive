app.controller('createControl', ['$scope', '$location', '$cookies', 'userFactory', 'roomFactory', '$cookies', '$route', function ($scope, $location, $cookies, uF, rF, $cookies, $route){
	$scope.videos = [];
	$scope.video = $cookies.video;
	function getRoom(room){
		$cookies.room = room;
		console.log(room)
		$location.url('/room/' + room._id);
	};
	function reloadPage(video){
		$cookies.video= video.video;
		console.log(video)
		// $location.url('/room/' + $cookies.room);
		$route.reload();
	}
	function videoList(video){
		$scope.videos = video.data.items;
	}
	$scope.searchVideo=function(){
		rF.searchVid($scope.video, videoList);
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
	$scope.updateVid=function(video){
		var data = {
			video: video.id.videoId,
			room: $cookies.room
		};
		rF.updateVid(data, reloadPage)

	}
}]);