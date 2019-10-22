const db = require("../db"),
    crypt = require("../utils").crypt;

    // crypt.encrypt("J@cob21408").then(password=>{
    //     db.query(`Update users Set password = "${password}"`, (err,data)=>{
    //         console.log(data)
    //     })
    //     db.end()
    // })


        db.query(`Select * from users where email = "${"anthonycrawford2@live.com"}"`, (err,data)=>{
            if(err){
                console.log(err)
                return;
            }
            crypt.compare("J@cob21408",  data[0].password).then(res=>console.log(true),error=>console.log(error));
        })
        db.end()
