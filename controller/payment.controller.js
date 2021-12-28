
const paymentModel = require("../models").Payment
const cryptoService = require("../services/crypto.service")



// decipher = crypto.createDecipheriv('aes-256-ccm',key)



async function create (req,res){
    fields = req.body

    fields.cardNumber = await cryptoService.encrypt(fields.cardNumber)
    fields.cvv = await cryptoService.encrypt(fields.cvv)
    
    try {
     
    recordCreated = await paymentModel.create(
        fields    )
    res.status(200).send({status:1,message:"Success",data:[]})   
    
    } catch (error) {
        res.status(200).send({status:0,message:error.message,data:[]})
    }
}

module.exports = {
    create
}