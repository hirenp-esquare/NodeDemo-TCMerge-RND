const registrationMssql = require('./registration.mssql');
class registration {
   async CreateRegistration(req, res) {
   //async post(req, res) {
      try {
         //Validation
         //Business logic
         const output = await registrationMssql.CreateRegistration();
         res.send(output);
      }
      catch (error) {
      console.log(error);
    }
 }
}
module.exports = new registration();