var searchApp = {};

searchApp.init = function(){
  // Find the form
  $("#navigation").find("#submitId").submit(function(e){
    console.log("hit");
    e.preventDefault();
    $.get('/api/listing',function(res){
      console.log(res);
    });
  });

}

$(document).ready(function() {
  // Add on change or click listener to the date picker
  console.log("loaded");
  searchApp.init();
});
