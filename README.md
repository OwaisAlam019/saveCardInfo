# saveCardInfo

### Project setup Guide
the project uses postgres

- clone the repo
- run `npm install` to install all the dependencies
- create a database name it as `test2`
- provide username and password inside the file `config/config.js`
- run `npm start` to start the server
- sever will start listening on [http://loclahost:3000](http://loclahost:3000)
- click on the above link to open the project main landing page

### using crypto for cvv and card number encryption
- crypto is provided by nodejs , we dont need to use third party library for encryption and decryption.
- includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions.

### Luhn Algorithm
- card is being verified by luhn algo it checks the card number before storing into the db.