var requestApp = {};
/** Helper function that renders one list entry in the list view
 *
 */
requestApp.renderListEntry = function(element){
  // Depending on the falg populat the list
  console.log(element);
  var data = {
    name: element.name,
    last: element.last,
    date: element.returndate.substring(0,9),
    urgency: element.urgency,
    price: element.price,
    pickup: element.pickup
  };
  console.log(data);
  //Produce header
  var entry = "<a " + " href='#' class='list-group-item'>";
  entry += "<h4 class='list-group-item-heading entryLeft'>name: " ;
  entry += data.name;
  entry += "</h4>";
  entry += "<h4 class='list-group-item-heading entryRight'>last: " ;
  entry += data.last;
  // Adding the scores
  entry += "<h4 class='list-group-item-heading entryLeft'>email: ";
  entry += data.email;
  entry += "</h4>";
  entry += "<h4 id = 'away'class='list-group-item-heading entryRight'>date: ";
  entry += data.date + "</h4>";
  entry += "<h4 id = 'away'class='list-group-item-heading entryLeft'>urgency: ";
  entry += data.urgency + "</h4>";
  entry += "<h4 id = 'away'class='list-group-item-heading entryLeft'>price: ";
  entry += data.price + "</h4>";
  entry += "<h2 class='list-group-item-heading'> pickup: ";
  entry += data.pickup + "</h2>";
  // Add the delete button
  entry += "</a>";

  //Append it to the list
  var list = $(".container").find("#content").find(".list-group");
  list.append(entry);
}

/** Function that calls the API and process the results
 * @param query path to call the request. calls populate list
 */
requestApp.getResults = function(query){
  $.get(query,function(response){
    // Data successfully gathered
    // Send it to populate list
    requestApp.populateList(response);
  });
}

/** Helper function that populates the listview with the received data
 * @param data is an array with all user objects
 */
requestApp.populateList = function(data){
  console.log(data);
  // Check if game is an array or an object
  console.log(data.length);
  if(data instanceof Array){
    // Produce an entry for every element
    console.log(data.length);
    if(data.length == 0){
      //Render one list element with no matches
      var entry = "<a href='#' class='list-group-item active'>";
      entry += "<h4 class='list-group-item-heading'>No requests yet </h4></a>";
      $(".container").find("#content").find(".list-group").append(entry);
      return;
    }
    var i;
    for(i = 0; i < data.length; i++){
      // Produce one list entry per game
      requestApp.renderListEntry(data[i]);
    }
    return;
  }
  else{
    requestApp.renderListEntry(data);
  }
}

requestApp.init = function(username){
  // Clean the page
  $("#content").find(".list-group").empty();
  $("#content").find("#headerDate").empty();
  $("#content").find("#description").empty();
  $("#content").find("#headerType").append("<h2> Requests on My Products</h2>");
  var query = '/api/request?username='+ username;
  requestApp.getResults(query);

}

$(document).ready(function() {
  // Add on change or click listener to the date picker
  var username = window.location.pathname.split("/")[1];
  requestApp.init(username);
});
