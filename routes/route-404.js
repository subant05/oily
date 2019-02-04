const express = require('express');
const route = express.Router();
const riot =  require('riot');
const tags = require("../tags");

route.use(function timeLog (req, res, next) {
    next()
})
route.get("*",function(req,res){
    const navigation = riot.render(tags.components.oilNavigation)  
    res.render('pages/404', { 
        title: '404 Error'
        , navigation
    })
});

module.exports = route;