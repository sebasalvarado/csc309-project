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

    /* */
    var $div = $("<div>", {id: "foo", "class": "a",
    "style": "border:1px solid black; padding:40px"});

    /* Create description tag for item */
    var text = "Item: " + response[i].item +
    " , location: "  + response[i].location
    + "email: " + response[i].email
    + "listingid: " + response[i].listingid;
    $div.text(text);

    var id = response[i].listingid;
    var url = "/view/" + id.toString();

    /* Attach button to view more information */
    var $button = $("<button>");
    $button.text("More Information");
    $button.click( function() {

    /* redirect user to item page */
    event.preventDefault();
    console.log(url);

    location.replace(url);

    });

    $div.append($button);

    $("#data").append($div);

  }


}
