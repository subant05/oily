const routes = {
    home : require("./route-includes/route-home")
    , error: require("./route-includes/route-404")
    , blend: require("./route-includes/route-blend")
    , admin: {
        signin: require("./route-includes/admin/route-signin")
    }
}
module.exports  = routes