const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    crypt: {
        encrypt(text){
            return bcrypt.hash(text, saltRounds)
        }
        , compare: bcrypt.compare

    }
}