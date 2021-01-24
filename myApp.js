var express = require('express');
var app = express();
    process.env.MESSAGE_STYLE=uppercase;

    app.get('/',function(req,res) {
        res.sendFile(__dirname + '/views/index.html')
    });

    app.use('/',express.static(__dirname + '/public'));

    app.get('/json', function(req, res) {
        if (process.env.MESSAGE_STYLE === 'uppercase') {
            res.json({"message": "Hello json"}).toUpperCase();
        }
        
    });

    
































 module.exports = app;
