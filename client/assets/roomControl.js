app.controller('roomControl', ['$routeParams', '$scope', '$location', 'userFactory', 'roomFactory', function ($routeParams, $scope, $location, uF, rF){
	getRoom=()=>{
		rF.getRoom($routeParams.id, (room)=>{
			$scope.room = room;
		});
	};
	getRoom();

	var id = 'fIuZdhFbLXk';
	var tag = document.createElement('script');

	tag.src = 'https://www.youtube.com/iframe_api'
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	var player;
	function onYouTubeIframeAPIReady() {
		console.log('b')
	    player = new YT.Player('player', {
	        height: '390',
	        width: '640',
	        videoId: id,
	        events: {
	            'onReady': onPlayerReady
	        }
	    });
	}
}]);