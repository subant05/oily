const db = require("../db");
const parseSQLJoin = require("../utils").sql.parseSQLJoin;
const query = require("../utils").sql.query;



module.exports = {
    getOil(key, cb= a=>a){ 
    }
    , async createOil(data) {
        console.log("USES: ",  data.uses)

        return query(`Insert Into oils (name, description ) 
                        Values ("${data.name}"
                                , "${data.description}")`)
                                .then((result)=>{
                                    let queries = [ 
                                        query(`Insert into rel_oil_brands (oil_id, oil_brand_id) VALUES (${result.insertId}, ${data.brand})`)
                                        , query(`Insert into rel_oil_families (oil_id, oil_families_id) VALUES (${result.insertId}, ${data.family})`)
                                    ]

                                    queries = queries.concat(
                                        data.uses.map(
                                            use=>query(`Insert into rel_oil_uses (oil_id, oil_uses_id) VALUES (${result.insertId}, ${use})`)
                                        )
                                    )

                                    return Promise.all(queries,(err)=>Promise.reject(err))
                                },
                                (err)=>{console.log("SQL ERROR:", err);return Promise.reject(err)})
    }
    , updateOil(key,oilObj,cb= a=>a){
    }
    , deleteOil(key){
    }
    , findOil(param="", cb= a=>a, filter = {limit: -1, reverse: false}) {
    }
    , getOilProperties(){
        return query("Select * From oil_properties",parseSQLJoin)
    }
}