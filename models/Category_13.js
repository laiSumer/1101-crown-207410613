const db = require('../utils/database');

const category_13 = class category_13 {
    constructor(id,name,size,remote_url,local_url,link_url){
        this.id = id;
        this.name = name;
        this.size = size;
        this.remote_url = remote_url;
        this.local_url = local_url;
        this.link_url = link_url;
    }

    static async fetchA11() {
        try{
            let results = await db.query(`SELECT * from category_13`);
            return results.rows;
        } catch (e) {
            console.log('error',e);
        }
    }
};

const test = async () => {
    let results = await category_13.fetchA11();
    console.log('results',JSON.stringify(results.rows));
}

test();
module.exports = category_13;
