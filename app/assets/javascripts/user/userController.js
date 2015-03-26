(function () {
  "use strict";
  angular.module('ChasKids')
  .controller('UserController', ['VenueService', '$routeParams', '$location', '$scope', 'uiGmapGoogleMapApi', function (VenueService, $routeParams, $location, $scope, uiGmapGoogleMapApi) {

    var userCtrl = this;


    if($routeParams.venueId) {
      VenueService.getSingleVenue($routeParams.venueId).success(function (data) {
        userCtrl.singleVenue = data;
      });

    }

    VenueService.getVenues().success(function (data) {
      userCtrl.venues = data;
      // for( var i = 0; i < userCtrl.venues.length ; i++) {
      //   VenueService.getCoords(userCtrl.venues[i]);
    // }
  });

    userCtrl.currentIndex = $routeParams.venueId;

    // add comments in detail view


    userCtrl.addComment = function (venue, comment) {
      VenueService.addComment(venue, comment);
      $scope.comment = {};
    };


    //function to submit suggestions form after validation

    $scope.submitForm = function(isValid) {
        if (isValid) {
          alert('Thank you for submitting your suggestions!');
        };
        $scope.submitted = true;
        // $location.path('/');

    };


    //Google Maps

    uiGmapGoogleMapApi.then(function(maps) {
      for( var i = 0; i < userCtrl.venues.length ; i++) {
        VenueService.getCoords(userCtrl.venues[i]);
      }
    });



      $scope.map = {
        center: {
          latitude: 32.8433,
          longitude: -79.9333
        },
        zoom: 12
      }

  }])


  // favorites

  .controller('FavoritesController', ['FaveService', function(FaveService) {

    var faveCtrl = this;

    FaveService.getFavoriteVenues().success(function (data) {
      faveCtrl.venues = data;
    });


    faveCtrl.addFavoriteVenue = function (venue) {
      FaveService.addFavoriteVenue(venue);
    };

    faveCtrl.deleteFavoriteVenue = function (venue) {
      FaveService.deleteFavoriteVenue(venue.id);
      var index = _.indexOf(faveCtrl.venues, venue);
      console.log(index);
      faveCtrl.venues.splice(index,1);
    };



  }]);

})();
