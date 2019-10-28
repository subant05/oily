const bcrypt = require('bcrypt');
const saltRounds = 10;
const db = require("../db");


module.exports = {
    crypt: {
        encrypt(text){
            return bcrypt.hash(text, saltRounds)
        }
        , compare: bcrypt.compare
    }
    , sql: {
        parseSQLJoin(data) {
            const returnData = {}
            data.forEach( (slot, index)=> {
                for( key in slot){
                    if(!returnData[key])
                        returnData[key] =[]
                    if(slot[key])
                        returnData[key].push({id:slot.id, value:slot[key]})
                }
            });
    
            return returnData;
        }
        , query(query,convertData = a=>a){
            return new Promise((resolve, reject)=>{
                db.query(query,(err,data)=>{
                    console.log("QUERY: ","Error: ",err,"Data: ",data)
                    if(err){
                        reject(err)
                        return;
                    }
                    resolve(convertData(data))
                })
            })
        }
    
    }
}