
$(document).ready(function() {
  $("#request").submit(function(e) {
          e.preventDefault();
          console.log($('form').serialize())
          $.post('/api/request', $('form').serialize());
          location.reload(true);
  });
});
