(function () {
  "use strict";
  angular.module('ChasKids')
  .factory('VenueService', function($http, $location) {  //check: $routeParams, (_) for lodash/underscore

    // var url = 'http://localhost:3000';
    var url = 'http://tiy-fee-rest.herokuapp.com/collections/totspot';


    // var url = '/api/venues';


    // var venues = [];

    var getVenues = function () {
      return $http.get(url);
    };

    var getSingleVenue = function (id) {
      return $http.get(url + '/' + id);
    };

    var addVenue = function (venue) {
      // venue.comments = [];
      venue.comments = [{author: 'calvin', content: 'this is a comment'}];
      $http.post(url, venue).success(function(){
        $location.path('/adminlist');
      });
    };

    var deleteVenue = function (id) {
      $http.delete(url + '/' + id).success(function(){
        $location.path('/adminlist')
      });

    };

    var editVenue = function (venue, id) {
      $http.put(url + '/' + id, venue).success(function(){
        $location.path('/adminlist');
      });
    };

  //comments
    var addComment = function (venue, comment) {
      console.log(venue);
      venue.comments.push(comment);

      $http.put(url + '/' + venue._id, venue);
    };






    // from Brents Google Maps Service:
    // var getCoords = function (company) {
    //   var replacedStreet = company.address1.split(' ').join('+');
    //   var replacedCity = company.city.split(' ').join('+');
    //   var address = replacedStreet + ',+' + replacedCity + ',+SC';
    //   var apiKey = '&key=AIzaSyDO1iZdri67JXkir3pRcn8NrPcA0sIOuDk'
    //   var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + apiKey;
    //
    //   console.log(address);
    //   $http.get(url).success(function(dataset){
    //     console.log(dataset);
    //     var compGeo = dataset.results[0].geometry.location
    //     company.coords = {};
    //     company.coords.longitude = compGeo.lng;
    //
    //     company.coords.latitude = compGeo.lat;
    //     editCompany(company, company._id);
    //   });
    // };


    return {
      getVenues: getVenues,
      getSingleVenue: getSingleVenue,
      addVenue: addVenue,
      deleteVenue: deleteVenue,
      editVenue: editVenue,
      add Comment: addComment,
      // getCoords: getCoords
    };
  })
  .factory('FaveService', function ($http, _) {  //$rootScope?

    // var url = 'http://tiy-fee-rest.herokuapp.com/collections/totspotfaves';  //do I need a separate url
    var favorites = [];

    var addFavoriteVenue = function (venue) {
      // $http.post(url, venue);
      //$rootScope.$broadcast('venue:created');
      favorites.push(venue);
    };
    var getFavoriteVenues = function () {
      //return $http.get(url);
      return favorites;
    };
    var deleteFavoriteVenue = function (venue) {  //for $http: id
      // $http.delete(url + '/' + id);
      //$rootScope.$broadcast('venue:deleted');
      var index = favorites.indexOf(venue);
      favorites.splice(index,1);
    };


    return {
      getFavoriteVenues: getFavoriteVenues,
      addFavoriteVenue: addFavoriteVenue,
      deleteFavoriteVenue: deleteFavoriteVenue,

    };

  });
})();
