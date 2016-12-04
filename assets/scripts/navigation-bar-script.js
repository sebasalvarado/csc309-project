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
  searchApp.init();
});



function services() {
  var message = "ShareGoods is a peer-to-peer platform that allows " +
  "users to rent households items for temporary use.  Many everyday " +
"products (power-drill, snow-blower, ladder, etc..) are purchased " +
  "at very expensive prices and are only used a handful of times! "  +
  "The product life cycle of these items is inefficient and therefore "+
  " ready for disruption. Utilizing the power of the sharing economy, " +
   "ShareGoods has the ability to save costs, reduce waste and overall "+
   "improve efficiency in the marketplace. "  +
	"Through ShareGoods, members have the ability to earn extra money by " +
"  lending their own items out for use, as well as save money by renting "  +
  "items from their neighbours.  Users are able to search local product " +
  "listings in their neighbourhood, post their own products, and request " +
  " products that they desire that are currently not being offered by any " +
   "of their neighbours.  Users will also be able to rate (and receive ratings) " +
    "on their products and peer-to-peer interactions with other users. " +
  "  Additionally, users are able to communicate directly with other users " +
     "through ShareGoods which allows the entire process of renting an item " +
     "to take place within the ShareGoods domain. ";

  alert(message);
  
}
