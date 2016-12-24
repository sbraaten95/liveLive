/*
Using cookies to check to see if a user is logged in. If the cookie is not set for the user with the user id, then we call a location function to redirect to the demo page.
*/

var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(($routeProvider)=>{
	$routeProvider.when('/', {
		controller: 'homeControl',
		templateUrl: 'partials/home.html'
	}).when('/login', {
		controller: 'loginControl',
		templateUrl: 'partials/log_in.html'
	}).when('/register', {
		controller: 'regControl',
		templateUrl: 'partials/sign_up.html'
	}).when('/dashboard', {
		controller: 'dashControl',
		templateUrl: 'partials/dashboard.html'
	}).when('/create', {
		controller: 'createControl',
		templateUrl: 'partials/create.html'
	}).when('/search', {
		controller: 'createControl',
		templateUrl: 'partials/search.html'
	}).when('/join/:id', {
		controller: 'joinControl',
		templateUrl: 'partials/join.html'
	}).when('/room/:id', {
		controller: 'roomControl',
		templateUrl: 'partials/room.html'
	}).when('/join', {
		controller: 'dashControl',
		templateUrl: 'partials/join.html'
	}).otherwise({
		redirectTo: '/'
	});
});

app.directive('youtube', ['$window', function($window) {
	return {
		restrict: 'E',

		scope: {
			height: '=',
			width: '=',
			videoid: '='
		},

		template: '<div></div>',

		link: function(scope, element) {
			var storage = new Object() {
				var m = 0;
				var firstScriptTag = document.getElementsByTagName('script')[m++];
				while (firstScriptTag.src != "http://localhost:8000/angular/angular.js") {
					firstScriptTag = document.getElementsByTagName('script')[m++]
				}
				// ^ A loop that will go until it has found youtube iframe api as the src for a script
				var tag = document.createElement('script');
				tag.src = "https://www.youtube.com/iframe_api";

				firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

				var player;
				var player1;

				$window.onYouTubeIframeAPIReady = function() {
					// This function is only called once, even though there are two directivesh
					console.log(player)
					if (player) {
						player1 = new YT.Player(element.children()[1], {
							height: scope.height,
							width: scope.width,
							videoId: scope.videoid,
							events: {
								'onReady': onPlayerReady
							}
						});
					} else {
						player = new YT.Player(element.children()[0], {
							height: scope.height,
							width: scope.width,
							videoId: scope.videoid,
							events: {
								'onReady': onPlayerReady
							}
						});
					}
					console.log(element)
				};

				$window.onPlayerReady = function(event) {
					event.target.playVideo();
				};

				scope.$watch('videoid', function(newValue, oldValue) {
					if (newValue == oldValue) {
						return;
					}

					if (player) {
						console.log(player);
						player.cueVideoById();
					}
				});
			}
		}
	}
}]);