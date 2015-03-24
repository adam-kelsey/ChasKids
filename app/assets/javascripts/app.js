 (function () {
   "use strict";
   angular.module('ChasKids', [
   'ngRoute',
   'admin',
   'user',
   'uiGmapgoogle-maps'
   ])
   .config(['$httpProvider',function($httpProvider) {
     $httpProvider.defaults.headers.common['X-CSRF-Token'] = $("meta[name=csrf-token]").attr("content");
   }])
   .config(['$routeProvider', function($routeProvider){
     $routeProvider
     .when('/', {
       templateUrl: 'assets/splash.html',
       controller: 'UserController as userCtrl'
     })
     .when('/not_found', {
       templateUrl: 'assets/404.html',
       controller: 'UserController as userCtrl'
     })
    .otherwise({
      redirectTo: '/not_found'
     })
   }])

      .constant('_', _)

 })();
