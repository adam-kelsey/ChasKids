 (function () {
   "use strict";
   angular.module('ChasKids', [
   'ngRoute',
   'admin',
   'user',
  //  'uiGmapgoogle-maps'
   ])
   .config(function($httpProvider) {
     $httpProvider.defaults.headers.common['X-CSRF-Token'] = $("meta[name=csrf-token]").attr("content");
   })
   .config(function($routeProvider){
     $routeProvider
     .when('/', {
       templateUrl: 'assets/splash.html',
       controller: 'UserController as userCtrl'
     })
    .otherwise({
      redirectTo: '/not-found'
     })
    })

      .constant('_', _)

 })();
