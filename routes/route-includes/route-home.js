const express = require('express');
const route = express.Router();
const riot =  require('riot');
const riotIncludes = require("../riot-includes");
const navigation = riot.render(riotIncludes.components.oilNavigation) 
const modal = riot.render(riotIncludes.components.oilModal) 

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

    console.log(data)
    const oilSearchPage = riot.render(riotIncludes.pages.oilSearch, data)               
    res.render('pages/index', { 
        title: 'Oily'
        , navigation
        , modal
        , oilSearchPage
        , data
    })
});

module.exports = route;