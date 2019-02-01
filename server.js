const express = require('express')
    ,   app = express()
    ,   routes = require("./routes")


    

 /*************************
 * Views
 *************************/

app.set('views', './views');
app.set('view engine','ejs');
app.use(express.static('./public'));

/*************************
 * Router
 *************************/
app.use("/", routes.home);
app.get("*", function(req,res){
    res.render('pages/404',{title:404,data:{}})
})


/*************************
 * Server Initalization
 *************************/
app.listen(process.env.PORT || 8000,()=>{
    console.log("Server Started")
})