const Category_13 = require('../models/Category_13');

exports.getCategories = async (req,res) => {
    try{
        return await Category_13.fetchAll();
    } catch (err){
        console.log('getCategories',err)
    }
}