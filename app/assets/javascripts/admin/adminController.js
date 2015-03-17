(function () {
  "use strict";
  angular.module('ChasKids')
  .controller('AdminController', function (VenueService, $scope, $location, $routeParams){

    var adminCtrl = this;

    // adminCtrl.venues = VenueService.getVenues();   (for local)

    VenueService.getVenues().success(function(data){
      adminCtrl.venues = data;
    });


    // adminCtrl.singleVenue = VenueService.getSingleVenue($routeParams.venueId);   (for local)

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
      VenueService.editVenue (venue, venue.id); //venueId or venue.id or $routeParams.venueId?
    };

  });

})();
