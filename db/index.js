const mysql = require("mysql")
    , db = mysql.createConnection({
        host: "localhost"
        , user: "root" 
        , password: "Ch@rles77"
        , database: "oilchemist"
    })
    

module.exports = db;
