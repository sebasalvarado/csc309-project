

/* Send request to server to get listings */
function getListings() {
  /* Get user input for listing (if exists) */

  /* If no user input, return all listings */

  /* get request */
  console.log("calling method");
  $.get("/api/listing", function(response) {
        console.log("requested");
        console.log(response);
  });
}


$(document).ready(function() {

    $("#navigation").find("#submitId").submit(function(event){
      event.preventDefault();
      /* Submit request to server */
      getListings();

    });

});
