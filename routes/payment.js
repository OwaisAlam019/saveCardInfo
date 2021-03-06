var express = require('express');
var router = express.Router();
const paymentCOntroller = require("../controller/payment.controller")
const { body, validationResult } = require('express-validator');



router.post('/',

/* Sanitization and validations */
body('cardNumber').isLength({min:16,max:16}).isNumeric().withMessage("card number should be of 16 digits numeric"),

body('cvv').isLength({min:3,max:3}).isNumeric(),

body('expiry').matches("^(0[1-9]|1[0-2])\/([0-9]{2}$)","g").withMessage("expiry date should be in mm/yy format"),

body('name').trim().escape(),

(req,res,next)=>{

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({status:0,message:errors.array(),data:{}})
    }
    /* call respective controller function on passing all the validations */
    paymentCOntroller.create(req,res)
});

module.exports = router;
