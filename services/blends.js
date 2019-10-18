const blendsDB = require("../db").blends;

module.exports = {
    getBlend(key, cb= a=>a){ 
        blendsDB.get(key, cb)
    }
    , createBlend(key, oilObj, cb= a=>a) {
        blendsDB.put(key, oilObj, cb)
    }
    , updateBlend(key,oilObj,cb= a=>a){
        blendsDB.put(key, oilObj, cb)
    }
    , deleteBlend(key){
        blendsDB.del(cb)
    }
    , findBlend(param="", cb= a=>a, filter = {limit: -1, reverse: false}) {
        const result = [];

        blendsDB.createReadStream({
            gte:param
            , limit: filter.limit
            , reverse: filter.reverse
        }).on("data",(data)=>{
            result.push(data)
        }).on("end",()=>cb(data))
    }
}