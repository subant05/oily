const apiRoutes = {
    oils:{
        route:"/admin",
        post:{
            createOil: "/api/add-oil"
        },
        get: {
            getOils:"/api/oils"
        }
    }
}

export {apiRoutes}