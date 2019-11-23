var article = {
  show: function(callback) {
    $.get(APIURLS.article_show, function(res) {
      callback(res);
    })
  }
}