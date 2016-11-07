app.controller('createControl', ['$scope', '$location', '$cookies', 'userFactory', 'roomFactory', '$cookies', function ($scope, $location, $cookies, uF, rF, $cookies){
	$scope.videos = [];
	$scope.video = $cookies.video;
	function getRoom(room){
		$scope.room = room;
		$location.url('/room/' + $scope.room._id);
	};
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
		$cookies.video = video;
	}
}]);