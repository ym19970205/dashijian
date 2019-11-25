var article = {
  // 获取文章
  getFiveFocus: function(callback) {
    $.get(APIURLS.article_show, {
      perpage: 5,
      state: '已发布'
    }, function(res) {
      callback(res);
    })

  },
  getDetail: function(id, callback) {
    $.get(APIURLS.article_show, {
      id: id
    }, function(res) {
      callback(res);
    })
  },
  edit: function(fd, callback) {
    $.ajax({
      url: APIURLS.article_edit,
      type: 'post',
      data: fd,
      processData: false, // 不要让jquery去处理formdata数据
      contentType: false, // 不要使用默认的请求头
      success: function(res) {
        callback(res)

      }
    })
  }
}