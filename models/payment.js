'use strict';
module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    cardNumber: DataTypes.BIGINT, // here using unsigned int 11 because 16 digit value cannot be ccomodted in int(4) which is default
    cvv: DataTypes.STRING,
    name: DataTypes.STRING,
    expDate:DataTypes.DATE
  }, {});
  Payment.associate = function(models) {
    // associations can be defined here
  };
  return Payment;
};