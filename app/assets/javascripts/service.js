(function () {
  "use strict";
  angular.module('ChasKids')
  .factory('VenueService', function($http, $location, $routeParams) {  //check: $routeParams, (_) for lodash/underscore


    var url = 'http://localhost:3000/venues';

    // var venues = [];

    var getVenues = function () {
      return $http.get('/venues.json');
      // return venues;
    };

    var getSingleVenue = function (id) {
      console.log('service getsinglevalue' + id);
      // return $http.get('/venues.json/' + id);
      return $http.get('/venues/' + id +'.json')
      // return venues[id];
    };

    var addVenue = function (venue) {
      // venue.comments = [];
      // venue.comments = [{author: 'calvin', content: 'this is a comment'}];
      $http.post('/venues.json', venue).success(function(){
        $location.path('/adminlist');
      });
      // venues.push(venue);
    };

    var deleteVenue = function (id) {  //for local: (venue)
      console.log('service delete', id);
      $http.delete('/venues/' + id + '.json').success(function(){
        $location.path('/adminlist')
      });
      // var index = venues.indexOf(venue);
      // venues.splice(index,1);
    };

    var editVenue = function (venue, id) {  //for local: (venue, index)
      console.log(venue);
      console.log('edit is working');
      console.log('service edit' + id);
        $http.put('/venues/' + id + '.json', venue).success(function(){
        $location.path('/adminlist');
      });
      // var index = venues.indexOf(venue);
      // venues[index] = venue;
    };

  //comments
    var addComment = function (venue, comment) {
      console.log(venue);

      $http.post('/venues/' + venue.id + '/comments.json', comment).success(function(){
        console.log('addComment for' + venue.id + 'works');

      });
    };


// Google map

// var getCoords = function (venue) {
//   var replacedStreet = venue.address_one.split(' ').join('+');
//   var replacedCity = venue.city.split(' ').join('+');
//   var address = replacedStreet + ',+' + replacedCity + ',+SC';
//   var apiKey = '&key=AIzaSyAs8I10swE9u9aptwkQfffQPZgN29tmN1s'
//   var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + apiKey;
//
//   console.log(address);
//   $http.get(url).success(function(dataset){
//     console.log(dataset);
//     var venueGeo = dataset.results[0].geometry.location
//     venue.coords = {};
//     venue.coords.longitude = venueGeo.lng;
//
//     venue.coords.latitude = venueGeo.lat;
//     editVenue(venue, venue._id);
//   });
// };



    return {
      getVenues: getVenues,
      getSingleVenue: getSingleVenue,
      addVenue: addVenue,
      deleteVenue: deleteVenue,
      editVenue: editVenue,
      addComment: addComment,
      // getCoords: getCoords
    };
  })
  .factory('FaveService', function ($http, _, $rootScope) {  //$rootScope?

    // var url = 'http://tiy-fee-rest.herokuapp.com/collections/totspotfaves';  //do I need a separate url
    var favorites = [];

    var addFavoriteVenue = function (venue) {
      $http.post('/venues.json', venue);
      $rootScope.$broadcast('venue:created');
      // favorites.push(venue);
    };
    var getFavoriteVenues = function () {    //for endpoint (in place of url): '/favorites.json' ?
      return $http.get('/venues.json');
      // return favorites;
    };
    var deleteFavoriteVenue = function (id) {  //for local: (venue), otherwise: (id)
      $http.delete('/venues/' + id + '.json').success(function(){
      });
      // $rootScope.$broadcast('venue:deleted');
      // var index = favorites.indexOf(venue);
      // favorites.splice(index,1);
    };

    return {
      getFavoriteVenues: getFavoriteVenues,
      addFavoriteVenue: addFavoriteVenue,
      deleteFavoriteVenue: deleteFavoriteVenue,

    };

  });
})();
