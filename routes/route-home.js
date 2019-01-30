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
        , searchResults:[
            {
                img:"https://images-na.ssl-images-amazon.com/images/I/41u9YGyo4OL.jpg"
                , title:"Cold Remedy"
                , description:"Early treatment for cough"
                , ranking:  2
                , reviewCount:256
            }
            , {
                img:"https://images-na.ssl-images-amazon.com/images/I/41u9YGyo4OL.jpg"
                , title:"Relaxation"
                , description:"Mediation blend that is amazing. Let the blend help you to relax and get in the mood to meditate."
                , ranking: 4.3
                , reviewCount:96
            }]
    })
})
// define the about route
// route.get('/about', function (req, res) {
//     res.send('About birds')
// })

module.exports = route;