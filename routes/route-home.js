const express = require('express');
const route = express.Router();

route.use(function timeLog (req, res, next) {
    // console.log('Time: ', Date.now())
    next()
})
// define the home page route
route.get('/', function (req, res) {
    res.render('pages/index'
    , { title: 'Oily'
        , search:{
            placeholder: 'Search...'
        } 
    })
})
// define the about route
// route.get('/about', function (req, res) {
//     res.send('About birds')
// })

module.exports = route;