/* Load listing data to display on page */

/* Load google maps data */
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
   center: {lat: -34.397, lng: 150.644},
   zoom: 8
 });
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
