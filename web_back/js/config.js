var baseUrl = 'http://localhost:8000/'

// 把所有要用到的接口地址进行集中管理
var APIURLS = {
  user_Login: baseUrl + 'admin/login',
  user_Logout: baseUrl + 'admin/logout',
  user_Getuser: baseUrl + 'admin/getuser',
  category_show: baseUrl + 'admin/category_search',
  category_del: baseUrl + 'admin/category_delete',
  category_add: baseUrl + 'admin/category_add',
  category_edit: baseUrl + 'admin/category_edit',
  article_show: baseUrl + 'admin/search',
  article_del: baseUrl + 'admin/article_delete',
  article_add: baseUrl + 'admin/article_publish',



}