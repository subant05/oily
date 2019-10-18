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
            if(err || user.role !== "administrator" || crypt.encrypt(password) !== user.password)
                cb(err || { status:"400", message:"Invalid Credentials"})
            
            const token = cuid();

            user.token.push(token)
            this.updateUser(user.email,
                            user,
                            updatedUser=>cb(null, {email: updatedUser.email, token}))
        
        })
    }
}