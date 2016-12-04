var searchApp = {};

searchApp.init = function(){
  // Find the form
  $("#navigation").find("#submitId").submit(function(e){
    console.log("hit");
    e.preventDefault();
    var username = window.location.pathname.split("/")[1];
    window.location.href = "http://localhost:3000/" + username + "/search";
  });
}

$(document).ready(function() {
  // Add on change or click listener to the date picker
  console.log("loaded");
  searchApp.init();
});
