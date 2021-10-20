const category_13 = require('../models/Category_13');

exports.getCategories = async (req,res) => {
    try{
        return await category_13.fetchA11();
    } catch (err){
        console.log('getCategories',err)
    }
}