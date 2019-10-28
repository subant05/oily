const express = require('express');
const route = express.Router();
const riot =  require('riot');
const riotIncludes = require("../riot-includes");
const navigation = riotIncludes.navigation;
const modal = riotIncludes.modal;

route.use(function log(req,res,next){
    // console.log(req)
    next();
});

route.get('/', function (req, res) {
    const data = {
        shareURI:"http://oily.anthony.com/blend"
    };
    
    const detail = riot.render(riotIncludes.pages.oilBlendDetail, data);

    res.render('pages/blend', { 
        title: 'Oily - Blend'
        , detail       
        , navigation
        , modal
        , data
    });
});

module.exports =  route;