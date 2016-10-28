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

app.directive('youtube', function($window) {
	console.log('loading youtube directive')
	return {
		restrict: 'AE',

		scope: {
			height: '@',
			width: '@',
			videoid: '@'
		},

		template: '<div></div>',

		link: function(scope, element) {
			var tag = document.createElement('script');
			tag.src = "https://www.youtube.com/iframe_api";
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

			var player;

			$window.onYouTubeIframeAPIReady = function() {
				player = new YT.Player(element.children()[0], {
					height: scope.height,
					width: scope.width,
					videoId: scope.videoid,
					events: {
						'onReady': onPlayerReady
					}
				});
				console.log('Successfully loaded player, ', player);
			};

			$window.onPlayerReady = function(event) {
				console.log('reached immediate play function, about to play.')
				event.target.playVideo();
			};

			scope.$watch('videoid', function(newValue, oldValue) {
				if (newValue == oldValue) {
					return;
				}

				if (player) {
					player.cueVideoById(scope.videoid);
				}
			});



		},
	}
})