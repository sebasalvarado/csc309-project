
$(document).ready(function() {

    $("#navigation").find("#submitId").submit(function(event){
      event.preventDefault();

      /* Submit request to server */
      $.get("/api/listing", function(response) {
            console.log(response);

            displayListings(response);

      });

    });

});


/* Helper function to display listing information */
function displayListings(response) {

  var dataDiv = $('data');

  /* Loop through all listings returned */
  for (var i = 0; i < response.length; i++) {

    var $div = $("<div>", {id: "foo", "class": "a",
    "style": "border:1px solid black; padding:40px"});
    $div.text('hi');
    $("#data").append($div);

  }







}
