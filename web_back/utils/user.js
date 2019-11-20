var baseURL = 'http://localhost:8000/';

var user = {
  Login: // 发送请求：
    function(myname, mypassword, callback) {
    $.post(baseURL + 'admin/login', {
        user_name: myname,
        password: mypassword
      },
      function(res) {
        callback(res)

      }
    )
  },
  Logout: function(callback) {
    $.post(baseURL + 'admin/logout', function(res) {
      callback(res)

    })
  },
  Getuser: function(callback) {
    $.get(baseURL + 'admin/getuser', function(res) {
      callback(res);
    })
  }
}