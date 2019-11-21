var baseURL = 'http://localhost:8000/';

var user = {
  Login: // 发送请求：
    function(myname, mypassword, callback) {
    $.post(APIURLS.user_Login, {
        user_name: myname,
        password: mypassword
      },
      function(res) {
        callback(res)

      }
    )
  },
  Logout: function(callback) {
    $.post(APIURLS.user_Logout, function(res) {
      callback(res)

    })
  },
  Getuser: function(callback) {
    $.get(APIURLS.user_Getuser, function(res) {
      callback(res);
    })
  }
}