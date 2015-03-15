(function () {
  "use strict";

  angular.module('user', [
  'ngRoute',
  // 'ngAnimate'
  ])
  .config(function($routeProvider){
    $routeProvider
    .when('/list/', {
      templateUrl: 'assets/user/catListView.html',
      controller: 'UserController as userCtrl'
    })
    .when('/map', {
      templateUrl: 'assets/user/mapView.html',
      controller: 'UserController as userCtrl'
    })
    .when('/favorites', {
      templateUrl: 'assets/user/favoritesView.html',
      controller: 'UserController as userCtrl'
    })
    .when('/details', {      //change to /:venueId when set up correctly
      templateUrl: 'assets/user/detailView.html',
      controller: 'UserController as userCtrl'
    })
    .when('/suggestions', {
      templateUrl: 'assets/user/suggestionsView.html',
      controller: 'UserController as userCtrl'
    })
    .when('/other', {
      templateUrl: 'assets/user/otherResources.html',
      controller: 'UserController as userCtrl'
    })
  });

})();
