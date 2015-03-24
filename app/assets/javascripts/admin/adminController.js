(function () {
  "use strict";
  angular.module('ChasKids')
  .controller('AdminController', ['VenueService', '$scope', '$location', '$routeParams', function (VenueService, $scope, $location, $routeParams){

    var adminCtrl = this;


    VenueService.getVenues().success(function(data){
      adminCtrl.venues = data;
    });



    VenueService.getSingleVenue($routeParams.venueId).success(function(data){
      console.log(data);
      adminCtrl.singleVenue = data;
      console.log('adminctrl get single venue');
      console.log($routeParams.venueId);
      console.log(data);
    });

    //add new venue
    adminCtrl.addVenue = function (newVenue) {
      VenueService.addVenue(newVenue);
    };

    //delete venue
    adminCtrl.deleteVenue = function (id) {
      console.log('adminctrl delete');
      console.log(id);
      VenueService.deleteVenue(id);
    };

    //edit venue
    adminCtrl.editVenue = function (venue) {
      VenueService.editVenue (venue, $routeParams.venueId);
    };

  }]);

})();
