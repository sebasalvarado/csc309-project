/** Defining the global variables**/
/** Initialized with a date until the user changes it**/
var adminApp = {};
//Data gathered from the API
var data = {};

/** Helper function that produces the Date String and appends it to the DOM
 *
 */
function produceTitleDate(){
  var monString = monToString[month];
  var result = "<h2>" + monString + " , " + day + ", " + year + "</h2>";
  $("#content").find("#headerDate").append(result);
}
/** Helper function that produces the `table` to be displayed and appends it to the DOM
* @param headers innings is how many innings there are
* @param home_innings Array having the score for that innings
* @param away_innings ''
* post-condition: Table is produced and put into the DOM
*/
function produceTable(innings,home_innings,away_innings,home,away){
  var table = "<table class='table table-hover'>";
  // Getting the number of columns of our table
  var iterations = innings + 3;
  // Produce the headers
  table += "<tr class='heading'>";
  //Each header gets populated
  // Add the pivot
  table += "<th>City</th>";
  for(i = 1; i < innings; i++){
    table += "<th>" + i + "</th>"
  }
  table += "<th>R</th><th>H</th><th>E</th>";
  //Closing header
  table += "</tr>";
// Loop invariant: every row will add a team's score
for(i = 0; i < home_innings.length; i++ ){
  if (i==0){
    // Add the name
    table += "<tr><td>" + home + "</td>";
  }
  else{
    table += "<td>" + home_innings[i] + "</td>";
  }
}

  table += "</tr>";
for(i = 0; i < away_innings.length; i++){
  if (i==0){
    // Add the name
    table += "<tr><td>" + away + "</td>";
  }
  else{
    table += "<td>" + away_innings[i] + "</td>";
  }
}
table += "</tr>";
// Close the table tag
table += "</table>"
//Append it to the div
$(".container").find("#content").find("#description").append(table);
$(".container").find("#headerDate").append("<h2>Details</h2>");
$(".container").find("#headerDate").append("<h4>To go back, click submit button again</h4>");

}

// /**
//  * Process the data gathered from API to send the correct innings number
//  */
// gamesApp.populateDescription = function(){
//   // Get the array of linescore by innings
//   var linescore = data_desc.data.boxscore.linescore.inning_line_score;
//   var home_innings = [];
//   var away_innings = [];
//   // Loop through every inning
//   for(i = 0; i < linescore.length; i++){
//     home_innings.push(linescore[i].home);
//     away_innings.push(linescore[i].away);
//   }
//   // Pushing the values for R H and E
//   var inning_line = data_desc.data.boxscore.linescore;
//   home_innings.push(inning_line.home_team_runs);
//   home_innings.push(inning_line.home_team_hits);
//   home_innings.push(inning_line.home_team_errors);
//
//   away_innings.push(inning_line.away_team_runs);
//   away_innings.push(inning_line.away_team_hits);
//   away_innings.push(inning_line.away_team_errors);
//
//   // Get the team name
//   var home_team = data_desc.data.boxscore.home_sname;
//   var away_team = data_desc.data.boxscore.away_fname;
//   // Call the table to get populated
//   produceTable(linescore.length, home_innings, away_innings,home_team,away_team);
// }
//
// /** Performs HTTP Request to the API and calls the corresponding function
//  */
// gamesApp.getDescResults = function(url){
//   $.get(url,function(response){
//     // Data successfully gathered
//     data_desc = response;
//     //Empty the previous list
//     $("#content").find(".list-group").empty();
//     $("#content").find("#headerDate").empty();
//     $("#content").find("#description").empty();
//     // Send it to populate Desc
//     gamesApp.populateDescription();
//   });
// }

/** Helper function that renders one list entry in the list view
 *
 */
adminApp.renderListEntry = function(element,index,flag){
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
adminApp.populateList = function(data,flag){

  // Check if game is an array or an object
  if(data instanceof Array){
    // Produce an entry for every element
    var i;
    for(i = 0; i < data.length; i++){
      // Produce one list entry per game
      adminApp.renderListEntry(data[i],i,flag);
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
    adminApp.getResults('/api/user',1);

  }
  else if(option == "Listings"){
    adminApp.getResults('/api/listing',0);
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
