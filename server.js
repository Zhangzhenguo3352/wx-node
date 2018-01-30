
// 这个文件演示了 ，node.js 去调用了 微信的接口


var express = require('express');
var http = require('http');
var path = require('path')
var fs = require('fs')
var bodyParser = require('body-parser');
var request = require('request');


var app_id = 'wxdb0b83006fe07fa6';
var app_secret = 'd28ba63b80b40f6a970ab6c15cc2e034'

var app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.get('/', (req, res) => {
    console.log('req.body',req.query.code)
      // res.send({'8999':111})
    
    // 第一种 get 方式
    // 这里去调用了  另外一个接口， 就可以认为是调用了 微信的接口  
    request(`https://api.weixin.qq.com/sns/jscode2session?appid=${app_id}&secret=${app_secret}&js_code=${req.query.code}&grant_type=authorization_code`, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log('body',body) // Show the HTML for the baidu homepage.
        res.send(body)
      } else {
        res.send({'error': error})
      }
    })
    
    // 第二种 post 方式
    // request({
    //     url: 'http://localhost:8888/',
    //     method: "POST",
    //     json: true,
    //     headers: {
    //         "content-type": "application/json",
    //     },
    //     data: {
    //         js_code: req.query,
    //         appid: 'wxdb0b83006fe07fa6',
    //         secret: 'd28ba63b80b40f6a970ab6c15cc2e034',
    //         grant_type: 'authorization_code'
    //     },
    //     // body: JSON.stringify({name:1})
    //     body: {"aaa": "111"}
    // }, function(error, response, body) {
    //     console.log('response ',response)
    //     console.log('body ',body)
    //     console.log('!error ',error)
    //     console.log('response.statusCode == 200',response.statusCode == 200)
    //     console.log('!error && response.statusCode == 200',!error && response.statusCode == 200)
    //     if (!error && response.statusCode == 200) {
    //         console.log('body',body)

    //     }
    //     res.send({'8999':111})
    // }); 
})


app.listen(6000,() => {
    console.log('服务启动成功 6000')
})















