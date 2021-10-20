const serviceCrown2Controller_13 = require('./serviceCrown2Controller_13');

exports.getCatagories = async (req,res) => {
    try{
        const data = await serviceCrown2Controller_13.getCategories();
        return res.json(data);
    }catch(err){
        console.log('crown2Controller getCatagories',err);
    }
}