var username = window.location.pathname.split("/")[1];

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
    var $div = $("<div>", {id: "itemDesc", "class": "a",
    "style": "border:1px solid black; padding:40px"});

    var itemImage = $('<img id="itemImage" src="../images/logo.png">');

    var itemDescription = $('<p id="itemDescription">');
    itemDescription.text("Item: " + response[i].item);
    $div.append(itemDescription);

    var itemLocation = $('<p id="itemDescription">');
    itemLocation.text("Location: " + response[i].location);
    $div.append(itemLocation);


    var id = response[i].listingid;
    var url = username.toString() + "/view/" + id.toString();

    /* Attach button to view more information */
    var $button = $('<button id="itemButton">');
    $button.text("More Information");
    $button.click( function() {

    /* redirect user to item page */
    event.preventDefault();
    location.replace(url);
    });

    $div.append($button);
    // $div.append(itemImage);


    $("#data").append($div);

  }


}
