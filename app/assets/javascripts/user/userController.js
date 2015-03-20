(function () {
  "use strict";
  angular.module('ChasKids')
  .controller('UserController', function (VenueService, $routeParams, $location, $scope, uiGmapGoogleMapApi) {

    var userCtrl = this;

    uiGmapGoogleMapApi.then(function(maps) {

    });

    $scope.map = {
      center: {
        latitude: 32.8433,
        longitude: -79.9333
      },
      zoom: 12
    };


    // userCtrl.singleVenue = VenueService.getSingleVenue($routeParams.venueId);  (for local)

    VenueService.getSingleVenue($routeParams.venueId).success(function (data) {
      userCtrl.singleVenue = data;
      console.log(data);
    });

    // userCtrl.venues = VenueService.getVenues();  (for local)
    VenueService.getVenues().success(function (data) {
      userCtrl.venues = data;
    });

    userCtrl.currentIndex = $routeParams.venueId;

    // add comments in detail view
    userCtrl.addComment = function (venue, comment) {
      console.log('inside add comment in ctrl');
      VenueService.addComment(venue, comment);
      console.log('inside add comment in ctrl after VenueService command');
      $scope.comment = {};
    };
  })


  // favorites

  .controller('FavoritesController', function(FaveService) {

    var faveCtrl = this;

    faveCtrl.favorites = FaveService.getFavoriteVenues();


    faveCtrl.addFavoriteVenue = function (venue) {
      FaveService.addFavoriteVenue(venue);
      console.log('fave venue added');
    };
    faveCtrl.deleteFavoriteVenue = function (venue) {
      FaveService.deleteFavoriteVenue(venue);
    };

  });

})();
