const usersDB = require("../db").users;
const crypt = require("../db").crypt;
const cuid = require("cuid");

module.exports = {
    getUser(key, cb= a=>a){ 
        usersDB.get(key, cb)
    }
    , createUser(userObj, cb= a=>a) {
        usersDB.put(userObj.email, userObj, cb)
    }
    , updateUser(key,userObj,cb= a=>a){
        usersDB.put(key, userObj, cb)
    }
    , deleteUser(key,cb= a=>a){
        usersDB.del(cb)
    }
    , signInUser(email,password, cb) {
        this.getUser(email,(err, user)=>{
            if(err || (user.role !== "administrator" || password != crypt.decrypt(user.password)))
                cb(err || { status:"400", message:"Invalid Credentials"})
            
            cb(null, user)
        
        })
    }
}