var article = {
  show: function(curPage, type, state, callback) {
    $.get(APIURLS.article_show, {
      page: curPage,
      type: type,
      state: state
    }, function(res) {
      callback(res);
    })
  },
  del: function(id, callback) {
    $.get(APIURLS.article_del, {
      id: id
    }, function(res) {
      callback(res)
    })

  }
}