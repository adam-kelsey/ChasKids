(function () {
  "use strict";

  angular.module('admin', [
  'ngRoute',
  // 'ngAnimate'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/adminlist', {
      templateUrl: 'assets/admin/adminListView.html',
      controller: 'AdminController as adminCtrl'
    })
    .when('/addvenue', {
      templateUrl: 'assets/admin/addNewVenue.html',
      controller: 'AdminController as adminCtrl'
    })
    .when('/edit/:venueId', {
      templateUrl: 'assets/admin/editVenue.html',
      controller: 'AdminController as adminCtrl'
    })

  }]);

})();
