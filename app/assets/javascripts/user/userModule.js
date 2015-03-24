(function () {
  "use strict";

  angular.module('user', [
  'ngRoute',
  // 'ngAnimate'
  ])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/animals', {
      templateUrl: 'assets/user/catListViewAnimals.html',
      controller: 'UserController as userCtrl'
    })
    .when('/beaches', {
      templateUrl: 'assets/user/catListViewBeaches.html',
      controller: 'UserController as userCtrl'
    })
    .when('/indoor', {
      templateUrl: 'assets/user/catListViewIndoor.html',
      controller: 'UserController as userCtrl'
    })
    .when('/museums', {
      templateUrl: 'assets/user/catListViewMuseums.html',
      controller: 'UserController as userCtrl'
    })
    .when('/outdoor', {
      templateUrl: 'assets/user/catListViewOutdoor.html',
      controller: 'UserController as userCtrl'
    })
    .when('/parks', {
      templateUrl: 'assets/user/catListViewParks.html',
      controller: 'UserController as userCtrl'
    })
    .when('/party', {
      templateUrl: 'assets/user/catListViewParty.html',
      controller: 'UserController as userCtrl'
    })
    .when('/resources', {
      templateUrl: 'assets/user/otherResources.html',
      controller: 'UserController as userCtrl'
    })
    .when('/map', {
      templateUrl: 'assets/user/mapView.html',
      controller: 'UserController as userCtrl'
    })
    .when('/favorites', {
      templateUrl: 'assets/user/favoritesView.html',
      controller: 'FavoritesController as faveCtrl'
    })
    .when('/details/:venueId', {
      templateUrl: 'assets/user/detailView.html',
      controller: 'UserController as userCtrl'
    })
    .when('/detailsparty/:venueId', {
      templateUrl: 'assets/user/detailViewParty.html',
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
  }]);

})();
