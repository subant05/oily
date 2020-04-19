const mysql = require("mysql")
    , db = mysql.createPool({
        connectionLimit:100
        , waitForConnections: true
        , queueLimit: 0
        , waitTimeout:28800
        , connectTimeout:10
        , host: "localhost"
        , user: "root" 
        , password: "<password>"
        , database: "oilchemist"
    })    

module.exports = db;
