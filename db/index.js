const Cryptr = new require("cryptr")
    , crypt = new Cryptr("Taiwan")
    , level = require("level")
    , path = require("path")
    , sublevel = require("level-sublevel")
    , dbPath = process.env.DB_PATH || path.join(__dirname, "oilchemistDB")
    , options = {valueEncoding:"json"}
    , db = sublevel(level(dbPath, options));

exports.users = db.sublevel("users")
exports.blends = db.sublevel("blends")
exports.oils = db.sublevel("oils")
exports.crypt = crypt

module.exports.db = db;
