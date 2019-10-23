const db = require("../db");
const parseSQLJoin = require("../utils").sql.parseSQLJoin


module.exports = {
    getOil(key, cb= a=>a){ 
    }
    , createOil(key, oilObj, cb= a=>a) {
    }
    , updateOil(key,oilObj,cb= a=>a){
    }
    , deleteOil(key){
    }
    , findOil(param="", cb= a=>a, filter = {limit: -1, reverse: false}) {
    }
    , getOilProperties(){
        return new Promise((resolve,reject)=>{
            db.query("Select * From oil_properties",(err,data)=>{
                if(err)
                    reject(err);

                resolve(parseSQLJoin(data));
            })
        })
    }
}