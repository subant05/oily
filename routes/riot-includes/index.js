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
    , oilTable : require('../../tags/components/oil-table.tag')
    , admin: {
        oilNavigation :  require('../../tags/components/admin/oil-navigation.tag') 
    }


}
const pages = {
    oilSearch : require('../../tags/pages/oil-search.tag')
    , oilBlendDetail : require('../../tags/pages/oil-blend-detail.tag')
    , admin :{
        oilAdminSignin : require('../../tags/pages/admin/oil-admin-signin.tag')
         , oilAdminDashboard : require('../../tags/pages/admin/oil-admin-dashboard.tag')
         , oilAdminAddOil : require('../../tags/pages/admin/oil-admin-add-oil.tag')
    }

}
const navigation = riot.render(components.oilNavigation) 
const modal = riot.render(components.oilModal)
const adminNavigation = riot.render(components.oilNavigation) 

module.exports = {components,pages,navigation,modal};