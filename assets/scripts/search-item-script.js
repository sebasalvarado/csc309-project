
$(document).ready(function() {

    $("#submitButton").click(function() {

      /* Submit request to server */
      getListings();
      // alert("hi");

    });

});

/* Send request to server to get listings */
function getListings() {

  /* Get user input for listing (if exists) */


  /* If no user input, return all listings */



  /* Ajax request */
  $.ajax({
    url: "/api/listing",
    type: "GET",
    contentType: "application/json; charset=utf-8",
    success: function(response) {

      alert(response);

    }
  });

}
