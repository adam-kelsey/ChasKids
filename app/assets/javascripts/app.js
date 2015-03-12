// var ChasKids = angular.module('ChasKids', ['ngRoute']).config(['$httpProvider', function($httpProvider){
//   $httpProvider.defaults.headers.common['X-CSRF-Token'] = $("meta[name=csrf-token]").attr("content");
// }])


#= require_self
#= require_tree ./admin/
#= require_tree ./user/

 (function () {
   "use strict";
   angular.module('ChasKids', [
   'ngRoute',
   // 'ngAnimate',
   // 'uiGmapgoogle-maps',
   'admin',
   'user'
   ])
   .config(function($httpProvider) {
     $httpProvider.defaults.headers.common['X-CSRF-Token'] = $("meta[name=csrf-token]").attr("content");
   })
   .config(function($routeProvider){
     $routeProvider
     .when('/', {
       templateUrl: '../assets/splash.html',
       controller: 'MainController as mainCtrl'
     })
    .otherwise({
      redirectTo: '/not-found'
     })


    });

      .constant('_', _)

 })();
