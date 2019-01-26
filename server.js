const express = require('express')
    , app = express();

app.set('views', './views');
app.set('view engine','ejs');
app.use(express.static('./public'));

app.get("/", function(req,res){
    res.render('pages/index', { title: 'Hey', message: 'Hello there!' })
})
app.get("*", function(req,res){
    res.render('pages/404',{title:404})
})
app.listen(process.env.PORT || 8000,()=>{
    console.log("Server Started")
})