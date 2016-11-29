$(document).ready(function() {
  $("#signup").submit(function(e) {
          e.preventDefault();
          console.log($('form').serialize())
          $.post('/api/user', $('form').serialize());
          location.reload(true);
  });
});
