(function () {
  "use strict";

  angular.module('user', [
  'ngRoute',
  // 'ngAnimate'
  ])
  .config(function($routeProvider){
    $routeProvider
    .when('/list', {
      templateUrl: 'assets/javascripts/user/catListView.html',
      controller: 'UserController as userCtrl'
    })
    .when('/map', {
      templateUrl: 'assets/javascripts/user/mapView.html',
      controller: 'UserController as userCtrl'
    })
    .when('/favorites', {
      templateUrl: 'assets/javascripts/user/favoritesView.html',
      controller: 'UserController as userCtrl'
    })
    .when('/details/:venueId', {
      templateUrl: 'assets/javascript/user/detailView.html',
      controller: 'UserController as userCtrl'
    })
    .when('/suggestions', {
      templateUrl: 'assets/javascript/user/suggestionsView.html',
      controller: 'UserController as userCtrl'
    })
  });

})();
