const express = require('express')
    , app = express()
    , routes = require("./routes")
    , multer = require('multer')
    , upload = multer()
    , session = require('express-session')
    , cookieParser = require('cookie-parser')
    , bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(upload.array());
app.use(cookieParser());
app.use(session({secret: "We want to be rich"}));


 /*************************
 * Views
 *************************/

app.set('views', './views');
app.set('view engine','ejs');
app.use(express.static('./public'));

/*************************
 * Router
 *************************/
app.use("/admin", routes.admin);
app.use("/blend", routes.blend);
app.use("/", routes.home);
app.get("*", routes.error);


/*************************
 * Server Initalization
 *************************/
app.listen(process.env.PORT || 8000,()=>{
    console.log("Server Started")
})