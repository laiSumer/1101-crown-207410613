const serviceCrown2Controller_13 = require('./serviceCrown2Controller_13');

exports.getCatagories = async (req,res) => {
    try{
        let results = await serviceCrown2Controller_13.getCategories();
        console.log('resilts',JSON.stringify(require));
        res.render('crown2_13', { 
            data: results,
            title: 'Corwn2_13',
            name:'賴俊達',
            id:'207410613' 
        });
    }catch(err){
        console.log('crown2Controller getCatagories',err);
    }
}