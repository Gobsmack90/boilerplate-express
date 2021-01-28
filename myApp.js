var express = require('express');
var app = express();
    process.env.MESSAGE_STYLE="uppercase";

    //middleware to log method, route path and user id when request is made.
    app.use((req, res, next) => {
        console.log(req.method + ' ' + req.path + ' - ' + req.ip);
        next();
    })

    app.get('/',function(req,res) {
        res.sendFile(__dirname + '/views/index.html')
    });

    app.use('/',express.static(__dirname + '/public'));

    app.get('/json', function(req, res) {
        let message = "Hello json";
        if (process.env.MESSAGE_STYLE === 'uppercase') {
            message = message.toUpperCase();
        } else {
            message = message;
        };
        res.json({"message": message});
        
    });

    
































 module.exports = app;
