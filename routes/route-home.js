const express = require('express');
const route = express.Router();
const riot =  require('riot');
const components ={
    searchTag : require('../tags/components/oil-search-form.tag')
    , searchCardTag : require('../tags/components/oil-card.tag')
    , rating : require('../tags/components/oil-rating.tag')
    , oilSummary : require('../tags/components/oil-summary.tag')
    , oilPagination : require('../tags/components/oil-pagination.tag')

}
const pages = {
    oilSearch : require('../tags/pages/oil-search.tag')
}

route.use(function timeLog (req, res, next) {
    // console.log('Time: ', Date.now())
    next()
})
// define the home page route
route.get('/', function (req, res) {
    const data = { 
        placeholder: "Search.."
        , pages:10
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
    const oilSearchPage = riot.render(pages.oilSearch, data)               
    res.render('pages/index', { 
        title: 'Oily'
        , oilSearchPage
        , data
    })
})
// define the about route
// route.get('/about', function (req, res) {
//     res.send('About birds')
// })

module.exports = route;