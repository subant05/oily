const express = require('express');
const route = express.Router();
const riot =  require('riot');
const riotIncludes = require("../riot-includes");
const navigation = riotIncludes.navigation
const modal = riotIncludes.modal

route.use(function log(req,res,next){
    console.log(req)
    next();
});

route.get('/blend', function (req, res) {
    res.render('pages/blend', { 
        title: 'Oily - Blend'
        , message: "Some Blend ... "
        , navigation
        , modal
        , data:{}
    })
});

module.exports =  route;