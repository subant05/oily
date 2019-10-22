const express = require('express');
const route = express.Router();
const riot =  require('riot');
const tags = require("../../riot-includes");
const crypt = require("../../../db").crypt
const usersService = require("../../../services/users");
const navigation = riot.render(tags.components.admin.oilNavigation);
const modal ="";

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

    const oilAdminAddOil = riot.render(tags.pages.admin.oilAdminAddOil)               

    res.render('pages/admin/add-oil', { 
        title: 'Add Oil'
        , navigation
        , modal
        , oilAdminAddOil
    })
});

route.get("/signin",function(req,res,next){
    const oilAdminSignin = riot.render(tags.pages.admin.oilAdminSignin)  

    res.render('pages/admin/signin', { 
        title: 'Log In'
        , navigation:""
        , modal
        , oilAdminSignin
    })
});

route.post('/signin', function(req, res, next){
      usersService.signInUser(req.body.email, req.body.password, (err,user)=>{
         console.log("ERROR: ", err)
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

        console.log("USER: ", user)
        req.session.user = user;
        res.redirect('/admin');
      })
 });

 route.get("/signout",function(req,res,next){
    delete req.session.user
    res.redirect('/admin/signin');
});
module.exports = route;
