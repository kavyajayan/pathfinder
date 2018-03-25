var express = require('express')
var app = express()
var http = require('http')
var path = require("path")

app.get('/', function (req, res){
	return res.sendFile(path.join('/home/kavya/myApp'+'/login.html'))
})

app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/',function (req,res){