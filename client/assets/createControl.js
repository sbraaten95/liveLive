app.controller('createControl', ['$scope', '$location', '$cookies', 'userFactory', 'roomFactory', '$route', function ($scope, $location, $cookies, uF, rF, $route){
	$scope.videos = [];
	$scope.video = $cookies.video;
	function getRoom(room){
		$scope.room = room;
		$location.url('/room/' + $scope.room._id);
	};
	function reloadPage(video){
		$cookies.put('video', video.video);
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
		$cookies.remove('video');
	}
	$scope.selectVid=function(video){
		console.log(video)
		$cookies.video = video;
		console.log($cookies.video)
		$location.url('/create');
	}
	$scope.returnSearch=function(){
		$cookies.remove('video');
		$location.url('/search')
	}
	$scope.updateVid=function(video){
		var data = {
			video: video.id.videoId,
			room: $cookies.get('room')
		};
		rF.updateVid(data, reloadPage)
	}
	if(!$cookies.get('user')){
		$location.url('/')
	}
}]);