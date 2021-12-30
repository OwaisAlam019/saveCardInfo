
const paymentModel = require("../models").Payment
const cryptoService = require("../services/crypto.service")
const cardValidationService = require("../services/cardValidation.service")



async function create (req,res){
    fields = req.body
    
    isCardValid = await cardValidationService.isValidCardNumber(fields.cardNumber)
    
    if(!isCardValid){
        return res.status(400).send({message: "Invalid card number"})
    }

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