const riot = require('riot')
const components ={
    oilSearchForm : require('../../tags/components/oil-search-form.tag')
    , oilCard : require('../../tags/components/oil-card.tag')
    , oilRating : require('../../tags/components/oil-rating.tag')
    , oilSummary : require('../../tags/components/oil-summary.tag')
    , oilPagination : require('../../tags/components/oil-pagination.tag')
    , oilSwitch : require('../../tags/components/oil-switch.tag')
    , oilNavigation : require('../../tags/components/oil-navigation.tag')
    , oilModal : require('../../tags/components/oil-modal.tag')
    , oilSocialMedia : require('../../tags/components/oil-social-media.tag')

}
const pages = {
    oilSearch : require('../../tags/pages/oil-search.tag')
    , oilBlendDetail : require('../../tags/pages/oil-blend-detail.tag')

}
const navigation = riot.render(components.oilNavigation) 
const modal = riot.render(components.oilModal)

module.exports = {components,pages,navigation,modal};