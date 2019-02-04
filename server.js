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
app.get("*", routes.error);


/*************************
 * Server Initalization
 *************************/
app.listen(process.env.PORT || 8000,()=>{
    console.log("Server Started")
})