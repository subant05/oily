const userDB = require("../db").users,
    crypt = require("../db").crypt;

userDB.batch([{
        type: "put"
        , key: "anthonycrawford2@live.com"
        , value:{ firstname: "Anthony"
        , lastname: "Crawford"
        , password: crypt.encrypt("J@cob21408")
        , email: "anthonycrawford2@live.com"
        , role: "administrator"
        , tokens:[]}
    },
    {
        type: "put"
        , key: "summer6310@hotmail.com"
        , value: {firstname: "Summer"
            , lastname: "Hung-Crawford"
            , email: "summer6310@hotmail.com"
            , password: crypt.encrypt("J@cob21408")
            , role: "administrator"
            , tokens:[]}
        }],
        (err)=>{
            if(err)
                console.log(err)
            userDB.get("anthonycrawford2@live.com",(err,data)=>console.log(data))
            userDB.get("summer6310@hotmail.com",(err,data)=>console.log(data))

        })
