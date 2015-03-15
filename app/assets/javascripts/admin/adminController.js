(function () {
  "use strict";
  angular.module('ChasKids')
  .controller('AdminController', function (VenueService, $scope, $location, $routeParams){

    var adminCtrl = this;

    VenueService.getVenues().success(function(data){
      adminCtrl.venues = data;
    });

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
