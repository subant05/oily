const express = require('express');
const route = express.Router();
const riot =  require('riot');
const tags = require("../../riot-includes");
const crypt = require("../../../db").crypt
const usersService = require("../../../services/users");

route.use(function timeLog (req, res, next) {
   console.log(req.session)
   next()
})
route.get("/",function(req,res){
    const navigation = riot.render(tags.components.oilNavigation)
        , modal = riot.render(tags.components.oilModal)
    res.render('pages/admin/signin', { 
        title: 'Log In'
        , navigation
        , modal
    })
});

route.post('/', function(req, res){
      usersService.signInUser(req.body.email,req.body.password,(err,user)=>{
        if(err){
           if(err.status){
            res.status(err.status.toString());
            res.send(err.message);
         } else
            res.status("500");
            res.send("We are experiencing technical difficulties. Please try again later."); 
        }

        req.session.user = user;
        res.redirect('/');

      })
   // if(!req.body.email || !req.body.password){
   //     res.status("400");
   //     res.send("Invalid details!");
   //  } else {
   //     Users.filter(function(user){
   //        if(user && user.email === req.body.email){
   //           res.render('signin', {
   //              message: "User Already Exists! Login or choose another user id"});
   //        }
   //     });
   //     var newUser = {id: req.body.id, password: req.body.password};
   //     Users.push(newUser);
   //     req.session.user = newUser;
   //     res.redirect('/');
   //  }
 });

module.exports = route;
