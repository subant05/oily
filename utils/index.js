const bcrypt = require('bcrypt');
const saltRounds = 10;

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
            data.forEach( slot=> {
                for( key in slot){
                    if(!returnData[key])
                        returnData[key] =[]
                    if(slot[key])
                        returnData[key].push(slot[key])
                }
            });
    
            return returnData;
        }
    
    }
}