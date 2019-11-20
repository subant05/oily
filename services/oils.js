const db = require("../db");
const parseSQLJoin = require("../utils").sql.parseSQLJoin;
const query = require("../utils").sql.query;
const handleSQLError = require("../utils").sql.handleSQLError;




module.exports = {
    async getOils(key, cb= a=>a){ 
        return query("SELECT name, description, brand, family, uses FROM oilchemist.oil_properties").then(
            results=>{
                const columns = [];

                for(key in results[0])
                    columns.push(key)

                return {columns, results}
            }
        )
    }
    , async addOilBrand(data){
        if(!isNaN( parseInt(data.brand) ))
            return Promise.resolve(data)

        return query(`Insert Into oil_brands (name) Values ("${data.brand.replace(/'`"/g, "").trim()}")`).then(result=>{
            data.brand = result.insertId
            return data;
        })
    }
    , async addOilDesc(data){
        return query(`Insert Into oils (name, description ) 
                        Values ("${data.name}"
                                , "${data.description}")`).then(result=>{
                                    data.oil_id = result.insertId
                                    return data;
                                })
    }
    , async addOilDetails(data){
        console.log("Result ID:", data)
            let queries = [ 
                query(`Insert into rel_oil_brands (oil_id, oil_brand_id) VALUES (${data.oil_id}, ${data.brand})`)
                , query(`Insert into rel_oil_families (oil_id, oil_families_id) VALUES (${data.oil_id}, ${data.family})`)
            ]

            queries = queries.concat(
                data.uses.map(
                    use=>query(`Insert into rel_oil_uses (oil_id, oil_uses_id) VALUES (${data.oil_id}, ${use})`)
                )
            )

            return Promise.all(queries,
                (err)=>{
                    handleSQLError(err)
                    return Promise.reject(err)
                })
    }
    , async createOil(data) {
        console.log("USES: ",  data.uses)

        return this.addOilBrand(data)
                .then(this.addOilDesc,handleSQLError)
                .then(this.addOilDetails, handleSQLError)
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