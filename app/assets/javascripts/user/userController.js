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
      console.log(data);

    });

    VenueService.getVenues().success(function (data) {
      userCtrl.venues = data;
    });

    userCtrl.currentIndex = $routeParams.venueId;

    // add comments in detail view
    userCtrl.addComment = function (venue, comment) {
      console.log('inside ad comment in ctrl');
      VenueService.addComment(venue, comment);
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
