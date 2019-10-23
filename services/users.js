const db = require("../db");
const crypt = require("../utils").crypt;

module.exports = {
    getUser(key, cb= a=>a){ 
    }
    , createUser(userObj, cb= a=>a) {
    }
    , updateUser(key,userObj,cb= a=>a){
    }
    , deleteUser(key,cb= a=>a){
    }
    , signInUser(email,password, cb) {
            db.query(`Select * from users where email = "${email}"`, (err, results)=>{
                if(err){
                    cb(err)
                    return;
                }
                crypt.compare("J@cob21408",  results[0].password).then(
                    res=>{
                        cb(null, results[0]);
                     }, error=>cb(error));
            })
    }
    , ensureAdminCredentials(req,res,next){
        if(req.path !== "/signin" && (!req.session.user || req.session.user.role !== "administrator")){
            res.redirect('/admin/signin');
        } else {
            next()
        }
    }
}