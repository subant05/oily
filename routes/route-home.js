const express = require('express');
const route = express.Router();
const riot =  require('riot');
const tags = require("./riot-includes/load-components");

route.use(function timeLog (req, res, next) {
    // console.log('Time: ', Date.now())
    next()
})
// define the home page route
route.get('/', function (req, res) {
    const data = { 
        placeholder: "Search.."
        , pages:20
        , results :[
                        {
                            src:"https://images-na.ssl-images-amazon.com/images/I/41u9YGyo4OL.jpg"
                            , title:"Cold Remedy"
                            , description:"Early treatment for cough"
                            , ranking:  "2"
                            , count:"256"
                        }
                        , {
                            src:"https://images-na.ssl-images-amazon.com/images/I/41u9YGyo4OL.jpg"
                            , title:"Relaxation"
                            , description:"Mediation blend that is amazing. Let the blend help you to relax and get in the mood to meditate."
                            , ranking: "4.3"
                            , count:"96"
                        }
                        , {
                            src:"https://images-na.ssl-images-amazon.com/images/I/41u9YGyo4OL.jpg"
                            , title:"Relaxation"
                            , description:"Mediation blend that is amazing. Let the blend help you to relax and get in the mood to meditate."
                            , ranking: "4.3"
                            , count:"96"
                        }
                        , {
                            src:"https://images-na.ssl-images-amazon.com/images/I/41u9YGyo4OL.jpg"
                            , title:"Relaxation"
                            , description:"Mediation blend that is amazing. Let the blend help you to relax and get in the mood to meditate."
                            , ranking: "4.3"
                            , count:"96"
                        }
                        , {
                            src:"https://images-na.ssl-images-amazon.com/images/I/41u9YGyo4OL.jpg"
                            , title:"Relaxation"
                            , description:"Mediation blend that is amazing. Let the blend help you to relax and get in the mood to meditate."
                            , ranking: "4.3"
                            , count:"96"
                        }
                        , {
                            src:"https://images-na.ssl-images-amazon.com/images/I/41u9YGyo4OL.jpg"
                            , title:"Relaxation"
                            , description:"Mediation blend that is amazing. Let the blend help you to relax and get in the mood to meditate."
                            , ranking: "4.3"
                            , count:"96"
                        }
                        , {
                            src:"https://images-na.ssl-images-amazon.com/images/I/41u9YGyo4OL.jpg"
                            , title:"Relaxation"
                            , description:"Mediation blend that is amazing. Let the blend help you to relax and get in the mood to meditate."
                            , ranking: "4.3"
                            , count:"96"
                        }
                        , {
                            src:"https://images-na.ssl-images-amazon.com/images/I/41u9YGyo4OL.jpg"
                            , title:"Relaxation"
                            , description:"Mediation blend that is amazing. Let the blend help you to relax and get in the mood to meditate."
                            , ranking: "4.3"
                            , count:"96"
                        }
                        , {
                            src:"https://images-na.ssl-images-amazon.com/images/I/41u9YGyo4OL.jpg"
                            , title:"Relaxation"
                            , description:"Mediation blend that is amazing. Let the blend help you to relax and get in the mood to meditate."
                            , ranking: "4.3"
                            , count:"96"
                        }
            ]};
    const navigation = riot.render(tags.components.oilNavigation) 
    const modal = riot.render(tags.components.oilModal) 
    const oilSearchPage = riot.render(tags.pages.oilSearch, data)               
    res.render('pages/index', { 
        title: 'Oily'
        , navigation
        , modal
        , oilSearchPage
        , data
    })
})
// define the about route
// route.get('/about', function (req, res) {
//     res.send('About birds')
// })

module.exports = route;