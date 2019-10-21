const express = require('express');
const route = express.Router();
const riot =  require('riot');
const tags = require("../../riot-includes");
const crypt = require("../../../db").crypt
const usersService = require("../../../services/users");
const navigation = riot.render(tags.components.oilNavigation);
const modal = riot.render(tags.components.oilModal);

route.use(usersService.ensureAdminCredentials)

route.get("/",function(req,res,next){    
    const data = {
        columns:["name"]
        , results: [{name:"Anthony"}]
    }
    const oilAdminDashboard = riot.render(tags.pages.admin.oilAdminDashboard, data)               

    res.render('pages/admin/home', { 
        title: 'Admin Dashboard'
        , navigation
        , modal
        , oilAdminDashboard
        , data
    })
});

route.get("/add-oil",function(req,res,next){    

    const data = []
    const oilAdminAddOil = riot.render(tags.pages.admin.oilAdminAddOil, data)               

    res.render('pages/admin/add-oil', { 
        title: 'Add Oil'
        , navigation
        , modal
        , oilAdminAddOil
        , data
    })
});

route.get("/signin",function(req,res,next){
    res.render('pages/admin/signin', { 
        title: 'Log In'
        , navigation
        , modal
    })
});

route.post('/signin', function(req, res, next){
      usersService.signInUser(req.body.email,req.body.password,(err,user)=>{
         console.log(err)
        if(err){
            if(err.status){
               res.status(err.status.toString());
               res.send(err.message);
            } else{
               res.status("500");
               res.send("We are experiencing technical difficulties. Please try again later."); 
            }
            return;
        }

        req.session.user = user;
        res.redirect('/admin');
      })
 });

module.exports = route;
