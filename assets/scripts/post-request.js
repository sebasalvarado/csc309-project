
$(document).ready(function() {

  function getlistingID () {
    var url = window.location.pathname;
    var listingID = url.substring(url.lastIndexOf('/') + 1);
    return listingID;
  }

  $("#request").submit(function(e) {
      e.preventDefault();
      console.log($('form').serialize())
      var listingID = getlistingID();
      alert(listingID);
      $.post('/api/request/' + listingID, $('form').serialize());
      location.reload(true);
  });
});
