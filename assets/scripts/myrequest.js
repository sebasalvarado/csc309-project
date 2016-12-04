$(document).ready(function() {

      $.get('/api/myrequest', function(data) {
        for (var i = 0; i < data.length; i++) {
          var row = '<tr><td>' + data[i].item +
          '</td><td>' + data[i].category +
          '</td><td>' + data[i].description +
          '</td><td>' + data[i].date +
          '</td><td>' + data[i].email +
          '</td></tr>';
          $("#RequestInfo tbody").append(row);
        }
      });
});
