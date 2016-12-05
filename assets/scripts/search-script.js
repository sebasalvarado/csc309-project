/** Defining the global variables**/
/** Initialized with a date until the user changes it**/
var adminApp = {};
//Data gathered from the API

adminApp.renderListEntry = function(element){
  // Depending on the falg populat the list
  var data = {
    id: element.listingid,
    item: element.item,
    email: element.email,
    category: element.category,
    phone: element.phone,
    description: element.description,
    location: element.location
  };
  //Produce header
  var entry = "<a " + " href='#' class='list-group-item'>";
  entry += "<h4 class='list-group-item-heading entryLeft'>item: " ;
  entry += data.item;
  entry += "</h4>";
  entry += "<h4 class='list-group-item-heading entryRight'>description: " ;
  entry += data.description;
  // Adding the scores
  entry += "<h4 class='list-group-item-heading entryLeft'>Owner email: ";
  entry += data.email;
  entry += "</h4>";
  entry += "<h4 id = 'away'class='list-group-item-heading entryRight'>category: ";
  entry += data.category + "</h4>";
  entry += "<h4 id = 'away'class='list-group-item-heading entryLeft'>phone: ";
  entry += data.phone + "</h4>";
  entry += "<h2 class='list-group-item-heading'> location: ";
  entry += data.location + "</h2>";
  entry += "<button" + " id=" + data.id + " type='submit' class='btn btn-default'>View</button>";
  // Add the delete button
  entry += "</a>";

  //Append it to the list
  var list = $(".container").find(".col-md-10").find(".list-group");
  list.append(entry);
  list.find("#" + data.id).on('click', function(e){
    // Get the URL that is in value of the attribute
    var id = $(this).attr("id");
    // Redirecto to the path we Want
    var username = window.location.pathname.split('/')[1];
    var path = "/" + username + "/view/" + id;
    console.log(path);
    window.location = (path);
  });
}

/** Function that calls the API and process the results
 * @param flag 1 if user 0 if listing
 */
adminApp.getResults = function(query){
  $.get(query,function(response){
    // Data successfully gathered
    // Send it to populate list
    adminApp.populateList(response);
  });
}

/** Helper function that populates the listview with the received data
 * @param data is an array with all user objects
 */
adminApp.populateList = function(data){

  // Check if game is an array or an object
  if(data instanceof Array){
    // Produce an entry for every element
    var i;
    for(i = 0; i < data.length; i++){
      // Produce one list entry per game
      adminApp.renderListEntry(data[i]);
    }
    return;
  }
}


adminApp.init = function(){
  //Add listeners so we do repeat when we hit submit button
  // Check if we are on users or listings
  // Clean the page
  $(".container").find("#list").empty();
  adminApp.getResults('/api/listing');

}

$(document).ready(function() {
  // Add on change or click listener to the date picker
  adminApp.init();
});
