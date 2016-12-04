/** Defining the global variables**/
/** Initialized with a date until the user changes it**/
var adminApp = {};
//Data gathered from the API
var data = {};
var flag = 0;


/** Helper function that renders one list entry in the list view
 *
 */
adminApp.renderListEntry = function(element){
  // Depending on the falg populat the list
  var data = {};
  var value;
  if(flag == 1){
    data.id = element.username
    data.first = element.first_name,
    data.second = element.last_name,
    data.third = element.email,
    data.fourth = element.username
    // Set the value to user
    value = "user"
  }
  if(flag == 0){
    data.id = element.listingid,
    data.first = element.item,
    data.second = element.category,
    data.third = element.location,
    data.fourth = element.description,
    value = "listing"
  }

  //Produce header
  var entry = "<a " + " href='#' class='list-group-item'>";
  entry += "<h4 id ='home'class='list-group-item-heading entryLeft'>" ;
  entry += data.second;
  entry += "</h4>";
  // Adding the scores
  entry += "<h4 class='list-group-item-heading entryLeft'>";
  entry += data.third;
  entry += "</h4>";
  entry += "<h4 id = 'away'class='list-group-item-heading entryRight'>";
  entry += data.fourth + "</h4>";
  entry += "<h2 class='list-group-item-heading'>";
  entry += data.first + "</h2>";
  // Add the delete button
  entry += "<button" + " value=" + value + " id=" + data.id + " type='submit' class='btn btn-default'>Delete</button>";
  entry += "</a>";

  //Append it to the list
  var list = $(".container").find("#content").find(".list-group");
  list.append(entry);
  // Add an onClick listener
  list.find("#" + data.id).on('click', function(e){
    // Get the URL that is in value of the attribute
    var result = confirm("Want to delete?");
    if (result) {
      var value = $(this).attr("value");
      var id = $(this).attr("id");
      //Choose if deleting user or listing
      var query = '../../api/';
      if(value == "user"){
        query+= "user/";
      }
      else{
        query += "listing/";
      }

      // Add the id
      query += id;
      //Delete call
      $.ajax({
          url: query,
          type: 'DELETE',
          success: function(result) {
            // Do something with the result
            // Empty the list
            $("#content").find("#list").empty();
            // Render it again
            adminApp.populateList(data);
        }
      });
    }
  });
}
/** Function that calls the API and process the results
 * @param flag 1 if user 0 if listing
 */
adminApp.getResults = function(query, flag){
  $.get(query,function(response){
    // Data successfully gathered
    data = response;
    // Send it to populate list
    adminApp.populateList(data,flag);
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


/**
 * Function that renders the title and depending on the option will set the API call
  @param Flag 1 if user and 0 if listing
 */
adminApp.beginProcess = function(option){
  if(option == "Users"){
    flag = 1
    adminApp.getResults('/api/user');

  }
  else if(option == "Listings"){
    flag = 0
    adminApp.getResults('/api/listing');
  }
}

adminApp.init = function(){
  //Add listeners so we do repeat when we hit submit button
  // Check if we are on users or listings
  // Clean the page
  $("#content").find(".list-group").empty();
  $("#content").find("#headerDate").empty();
  $("#content").find("#description").empty();
  var pathname = window.location.pathname;
  if(pathname == '/admin/index/user'){
    // Populate title with  All Users
    // API Call return data adn save it globally
    // Render each list element
    $("#content").find("#title").on('click', adminApp.beginProcess("Users"));
    $("#content").find("#headerType").append("<h2> All Users</h2>");
  }
  else{
    // Populate title with all Listings
    $("#content").find("#title").on('click', adminApp.beginProcess("Listings"));
    $("#content").find("#headerType").append("<h2> All Listings</h2>");
  }
}

$(document).ready(function() {
  // Add on change or click listener to the date picker
  adminApp.init();
});
