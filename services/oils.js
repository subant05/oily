const oilsDB = require("../db").oils;

module.exports = {
    getOil(key, cb= a=>a){ 
        oilsDB.get(key, cb)
    }
    , createOil(key, oilObj, cb= a=>a) {
        oilsDB.put(key, oilObj, cb)
    }
    , updateOil(key,oilObj,cb= a=>a){
        oilsDB.put(key, oilObj, cb)
    }
    , deleteOil(key){
        oilsDB.del(cb)
    }
    , findOil(param="", cb= a=>a, filter = {limit: -1, reverse: false}) {
        const result = [];

        oilsDB.createReadStream({
            gte:param
            , limit: filter.limit
            , reverse: filter.reverse
        }).on("data",(data)=>{
            result.push(data)
        }).on("end",()=>cb(data))
    }
}