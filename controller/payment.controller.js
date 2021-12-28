
paymentModel = require("../models").Payment

async function create (req,res){

    console.log(req.body)
    try {
     
    recordCreated = await paymentModel.create(
        req.body
    )
    console.log(recordCreated)
    res.status(200).send({status:1,message:"Success",data:[]})   
    
    } catch (error) {
        res.status(200).send({status:0,message:error.message,data:[]})
    }
}

module.exports = {
    create
}