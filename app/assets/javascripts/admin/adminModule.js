(function () {
  "use strict";

  angular.module('admin', [
  'ngRoute',
  'ngAnimate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/adminlist', {
      templateUrl: '../assets/javascript/admin/adminListView.html',
      controller: 'AdminController as adminCtrl'
    })
    .when('/addvenue', {
      templateUrl: '../assets/javascript/admin/addNewVenue.html',
      controller: 'AdminController as adminCtrl'
    })
    .when('/edit/:venueId', {
      templateUrl: '../assets/javascript/admin/editVenue.html',
      controller: 'AdminController as adminCtrl'
    })

  });

})();
