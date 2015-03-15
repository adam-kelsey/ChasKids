(function () {
  "use strict";
  angular.module('ChasKids')
  .controller('UserController', function (VenueService, $routeParams, $location, $scope) {

    var userCtrl = this;

    //
    // from Brents map:
    // $scope.map = {
    //   center: {
    //     latitude: 32.8433,
    //     longitude: -79.9333
    //   },
    //   zoom: 12
    // };

    VenueService.getSingleVenue($routeParams.venueId).success(function (data) {
      userCtrl.singleVenue = data;
    });

    VenueService.getVenues().success(function (data) {
      userCtrl.venues = data;
    });

    userCtrl.currentIndex = $routeParams.venueId;


// favorites

    userCtrl.favorites = VenueService.getFavoriteVenues();
    // favorites.total = 0;

    userCtrl.addFavoriteVenue = function (item) {
      VenueService.addFavoriteVenue(item);
    };
    userCtrl.deleteFavoriteVenue = function (item) {
      VenueService.deleteFavoriteVenue(item);
    };

//add comments in detail view
    userCtrl.addComment = function (item, comment) {
      VenueService.addComment(item, comment);
      $scope.comment = {};
    };

  })
})();
