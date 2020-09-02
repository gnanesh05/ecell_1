var express= require("express");
var app=express();
var bodyparser=require("body-parser");
var mongoose =require("mongoose");
app.use(bodyparser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));




app.get("/",function(req,res){
	res.render("index");
});

app.get("/events",function(req,res){
	res.render("event/events");
});

app.get("/teams",function(req,res){
	res.render("team/teams");
});

app.get("/about",function(req,res){
	res.render("about/about");
});

var port = process.env.PORT || 6000;
app.listen(port, function () {
  console.log("Server Has Started!");
});