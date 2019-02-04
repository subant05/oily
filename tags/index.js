const components ={
    oilSearchForm : require('./components/oil-search-form.tag')
    , oilCard : require('./components/oil-card.tag')
    , oilRating : require('./components/oil-rating.tag')
    , oilSummary : require('./components/oil-summary.tag')
    , oilPagination : require('./components/oil-pagination.tag')
    , oilSwitch : require('./components/oil-switch.tag')
}
const pages = {
    oilSearch : require('./pages/oil-search.tag')
}

module.exports = {components,pages};