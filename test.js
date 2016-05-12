var express = require("express");
var myParser = require("body-parser");
var app = express();
var jsonfile = require("jsonfile");


  app.use(myParser.urlencoded({extended : true}));
  app.post("/api", function(req, res) {

        var json = req.body.json;
        var file = '/tmp/data.json';
        console.log("json recu "+ json);
        jsonfile.writeFile(file, json , {spaces: 2}, function (err) {
                console.error(err)
        }) ; 

});
