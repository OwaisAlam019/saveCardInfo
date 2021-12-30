window.onload = function () {

    const name = document.getElementById('name');
    const cardnumber = document.getElementById('cardnumber');
    const expirationdate = document.getElementById('expirationdate');
    const securitycode = document.getElementById('securitycode');
    const submit = document.getElementById('submit');
    //Mask the Credit Card Number Input
    maskCardNumber =   new IMask(cardnumber, {
                  mask: '0000 0000 0000 0000',
    });

    //Mask the Expiration Date
    maskExpirationDate = new IMask(expirationdate, {
        mask: 'MM{/}YY',
        groups: {
            YY: new IMask.MaskedPattern.Group.Range([0, 99]),
            MM: new IMask.MaskedPattern.Group.Range([1, 12]),
        }
    });

    maskExpirationDate.on('accept', function () {
      
        console.log(maskExpirationDate.unmaskedValue,maskExpirationDate.value,"masked value");
        // maskExpirationDate.value
    });
    //Mask the security code
    maskSecurityCode = new IMask(securitycode, {
        mask: '000',
    });

    submit.onclick = function (e) {
        e.preventDefault();
        var settings = {
            "url": "http://localhost:3000/payment",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json"
            },
           
            "data": JSON.stringify({
              "cardNumber": maskCardNumber.unmaskedValue,
              "cvv": maskSecurityCode.unmaskedValue,
              "expiry": maskExpirationDate.value,
              "name": name.value
            })
          };
        console.log(settings);          
          $.ajax(settings).done(function (response) {
            console.log(response.headers);
            if(response.status == 1){
                alert(response.message);
            }else{
                alert(response.message);
            }
          }).catch(function (error) {
            alert(error.responseJSON.message);
          });
    }


};