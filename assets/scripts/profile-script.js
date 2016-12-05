$(document).ready(function() {

  var username = window.location.pathname.split("/")[1];
  var path = '/api/user/' + username;

    $.get(path, function(data) {
      console.log(data);
        var row = '<tr><td>' + data[0].username +
        '</td><td>' + data[0].first_name +
        '</td><td>' + data[0].last_name +
        '</td><td>' + data[0].email +
        '</td><td>' + data[0].phonenumber +
        '</td><td>' + data[0].address+
        '</td></tr>';
        $("#userInfo tbody").append(row);
    });
});
