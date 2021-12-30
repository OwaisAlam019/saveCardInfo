async function isValidCardNumber(cardNumber){

    let sum = 0
    
    skip = false

    for (let index = cardNumber.length - 1; index >= 0 ; index--) {
        
         currentDigit = cardNumber[index].charCodeAt() - '0'.charCodeAt();

         if(skip){
             currentDigit = currentDigit * 2
         }

         sum += (parseInt(currentDigit / 10 ,10) + currentDigit % 10)
         
         skip = !skip
    }
    return (sum % 10 === 0)

} 
module.exports = {
    isValidCardNumber
}