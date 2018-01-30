



var express = require('express');
var http = require('http');
var path = require('path')
var fs = require('fs')
var bodyParser = require('body-parser');
var querystring = require('querystring');

var app = express();

// 第一种 get 方式
// app.get('/', (req, res) => {
//     console.log('aa')
//       res.send({'8888':111})
// })

app.use(bodyParser.urlencoded({extended:true}))
// 第二种 post 方式
app.post('/', (req, res) => {
    console.log('req.body',req.query)
    res.send({'8888':111})
})

app.listen(8888,() => {
	console.log('服务启动成功 8888')
})





















