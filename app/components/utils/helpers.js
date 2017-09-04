// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Geocoder API
var geocodeAPI = "4215c1187d5e4c2ebc0a50cc225dd3ae";
var searchTerm;
var searchLink;

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(topic) {

    // Figure out the geotopic
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=4215c1187d5e4c2ebc0a50cc225dd3ae&q=" + topic + "&begin_date=19960312&end_date=19980312";

    return axios.get(queryURL).then(function(response) {
      searchTerm = response.data.response.docs[0].snippet;
      searchLink = response.data.response.docs[0].web_url;
      
      if (response.data.response.docs[0]) {
        return response.data.response.docs[0].snippet;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
  getHistory: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postHistory: function(topic) {
    return axios.post("/api", { topic: searchTerm, link: searchLink });
  }
};

// We export the API helper
module.exports = helper;
