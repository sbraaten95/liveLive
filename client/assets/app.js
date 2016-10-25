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
	}).otherwise({
		redirectTo: '/'
	});
});