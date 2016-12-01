
$(document).ready(function() {

    $("#submitButton").click(function() {

      /* Submit request to server */
      getListings();

    });

});

/* Send request to server to get listings */
function getListings() {
  /* Get user input for listing (if exists) */

  /* If no user input, return all listings */

  /* get request */
  $.get("/api/listing", function(response) {
       let message = JSON.parse(response);
       alert(message);
  });

}
