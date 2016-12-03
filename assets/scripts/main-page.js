// Application Global Variable
var shareApp = {};
// Data Gathered from the api
var data = {};

/**
 * @param e event that we listened
 */
shareApp.filter = function(e){
  // Get the values of every field
  var form = $(".container").find(".row").find("#selectionFilter")
  var itemName = form.find("#item").val();
  var category = form.find("#category").val();
  var dateAfter = form.find("#postedAfter").val();
  var now = form.find('#availNow:checked').val();
  if(typeof now == 'undefined'){
    now = false;
  }
  // perform GET request
  // Update data object
  // Render the results into the stream of data
}

// Function that sets the event callbacks to the form
shareApp.init = function(){
  // Callback for the filtering form
  $(".container").find(".row").find("#selectionFilter").submit(shareApp.filter);
}

$(document).ready(function() {
  shareApp.init();
});
