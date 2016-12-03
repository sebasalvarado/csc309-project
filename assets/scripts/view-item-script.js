/* Load listing data to display on page */
var map;
var url = window.location.href.split('/');
var listingid = (url[url.length -1]);

/* Query server to get listing information */
$.get("/api/listing/" + listingid, function(response) {

      displayListing(response);

});

/* Display listing information */
function displayListing(response) {

  /* Log JSON object */
  console.log(response);

  /* Set page title */
  $('#itemHeader').text(response[0].email + "'s item: " + response[0].item);

  /* Set item information */
  var $item = $("<p>");
  $item.html("Item: " + response[0].item);

  var $itemDescription = $("<p>");
  $itemDescription.html("Item Description: " + response[0].description);

  var $itemCategory = $("<p>");
  $itemCategory.html("Item Category: " + response[0].category);


  $('#itemDetails').append($item);
  $('#itemDetails').append($itemDescription);
  $('#itemDetails').append($itemCategory);




  /* Set google maps location */
  var geocoder = new google.maps.Geocoder();
  var address = 'toronto'; // change to response.location when relevent location

  geocoder.geocode( { 'address': address}, function(results, status) {

    if (status == google.maps.GeocoderStatus.OK) {
    var latitude = results[0].geometry.location.lat();
    var longitude = results[0].geometry.location.lng();
    loadMapLocation(latitude, longitude);
    }
  });

}

/* Load google maps data, create map */
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
   center: {lat: 0, lng: 0},
   zoom: 12
 });
}

/* Load correct map location, helper function */
function loadMapLocation(latitude, longitude) {
    var latLng = new google.maps.LatLng(latitude, longitude);
    map.panTo(latLng);
}


/* Submit button to request item */
$(document).ready(function(){

  $("#requestButton").click(function() {

    /* Submit request to server */
    postRequest();

  });
});


function postRequest() {

  /* Retrieve all listing information */
  var listingid = 'test';
  var requestdate = 'test';
  var userid = 'test';

  /* Create ajax POST request */
  $.ajax({
    url: '/api/request',
    type: "POST",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify({
      'listingid': listingid,
      'requestdate': requestdate,
      'userid': userid,
    }),
    success: function(response) {
      alert(response);
    }
  });
}
