
$(document).ready(function() {
  $("#add").submit(function(e) {
          e.preventDefault();
          $.post('/api/listing', $('form').serialize());
          location.reload(true);
  });
});
