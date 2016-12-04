
$(document).ready(function() {

  function getlistingID () {
    var url = window.location.pathname;
    var listingID = url.substring(url.lastIndexof('/'));
    return listingID;
  }

  function getUserID () {
    
  }

  $("#request").submit(function(e) {

          e.preventDefault();
          console.log($('form').serialize())
          $.post('/api/request', $('form').serialize());
          location.reload(true);
  });
});
