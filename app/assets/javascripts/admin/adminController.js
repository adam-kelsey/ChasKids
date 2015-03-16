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
      adminCtrl.singleVenue = data;
      console.log(data);
    });

    //add new venue
    adminCtrl.addVenue = function (newVenue) {
      VenueService.addVenue(newVenue);
    };

    //delete venue
    adminCtrl.deleteVenue = function (id) {
      VenueService.deleteVenue(id);
    };

    //edit venue
    adminCtrl.editVenue = function (venue) {
      VenueService.editVenue (venue, venue._id); //or $routeParams.venueId?
    };

  });

})();
