// var User = require('./user');

function User() {
  this.name;
  this.city;
  this.age;
  this.gender;
}
// 获取url参数 依赖于url模块 使用前需要使用
var URL = require('url');
// -------------------
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/getUserInfo', function (req, res, next) {

  var user = new User();
  var params = URL.parse(req.url, true).query;
  if (params.id == '1') {
    user.name = "Mr.light";
    user.age = "1";
    user.city = "深圳市";
  } else {
    user.name = "Ms.lee";
    user.age = "2";
    user.city = "杭州市";
    user.gender = "女";
  }
  var response = { status: 1, data: user };
  res.send(JSON.stringify(response))
});

module.exports = router;
