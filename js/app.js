var app = angular.module("AicApp", ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/views/home.html',
      controller: 'HomeController'
    });
    
    $urlRouterProvider.otherwise('home');
  }]);
