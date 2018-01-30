
// 这个文件演示了 ，node.js 去调用了 微信的接口


var express = require('express');
var http = require('http');
var path = require('path')
var fs = require('fs')
var bodyParser = require('body-parser');
var request = require('request');



var app = express();
app.get('/', (req, res) => {

      // res.send({'8999':111})
    
    // 第一种 get 方式
    // // 这里去调用了  另外一个接口， 就可以认为是调用了 微信的接口  
    // request('http://localhost:8888/', function (error, response, body) {
    //   if (!error && response.statusCode == 200) {
    //     console.log('body',body) // Show the HTML for the baidu homepage.
    //   }
    //   res.send({'8999':111})
    // })
    
    // 第二种 post 方式
    request({
        url: 'http://localhost:8888/',
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        qs: {
            a: 1,
            b:2
        },
        // body: JSON.stringify({name:1})
        body: {"aaa": "111"}
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('body',body)
        }
        res.send({'8999':111})
    }); 
})


app.listen(6000,() => {
    console.log('服务启动成功 6000')
})















