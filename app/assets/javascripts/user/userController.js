(function () {
  "use strict";
  angular.module('ChasKids')
  .controller('UserController', function (VenueService, $routeParams, $location, $scope, uiGmapGoogleMapApi) {

    var userCtrl = this;
    // var latitude = '';
    // var longitude = '';



    // userCtrl.singleVenue = VenueService.getSingleVenue($routeParams.venueId);  (for local)
    if($routeParams.venueId) {
      VenueService.getSingleVenue($routeParams.venueId).success(function (data) {
        userCtrl.singleVenue = data;
        console.log(data);

        // latitude=userCtrl.singleVenue.latitude
        // userCtrl.executeMap(latitude);
        // longitude=userCtrl.singleVenue.longitude
        // userCtrl.executeMap(longitude);

      });

    }

    // userCtrl.venues = VenueService.getVenues();  (for local)
    VenueService.getVenues().success(function (data) {
      userCtrl.venues = data;
      for( var i = 0; i < userCtrl.venues.length ; i++) {
        VenueService.getCoords(userCtrl.venues[i]);
        console.log('looping ' + i);
    }
  });

    userCtrl.currentIndex = $routeParams.venueId;

    // add comments in detail view
    userCtrl.addComment = function (venue, comment) {
      console.log('inside add comment in ctrl');
      VenueService.addComment(venue, comment);
      console.log('inside add comment in ctrl after VenueService command');
      $scope.comment = {};
    };


    uiGmapGoogleMapApi.then(function(maps) {

    });

    // userCtrl.executeMap = function(longitude){
    //   console.log('this is data' + longitude);

      $scope.map = {
        center: {
          latitude: 32.8433,
          longitude: -79.9333
        },
        zoom: 12
      }

      // $scope.marker = {
      //   id: 0,
      //   coords: {
      //     latitude: userCtrl.singleVenue.latitude,
      //     longitude: userCtrl.singleVenue.longitude
      //   }
      // };

    // };

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
