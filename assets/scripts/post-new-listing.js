$(document).ready(function() {
  $("#add").submit(function(e) {
          e.preventDefault();
          console.log($('form').serialize())
          $.post('/listing', $('form').serialize());
          location.reload(true);
  });
});
