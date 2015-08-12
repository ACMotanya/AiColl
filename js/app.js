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


app.directive('flexslider', function () {
  return {
    link: function (scope, element, attrs) {
      element.flexslider({
        animation: "slide"
      });
    }
  }
});
