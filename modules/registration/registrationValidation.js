const Joi = require('joi'); 
const registrationModel = require('./registrationModel');
const registrationMssql = require('./registration.mssql');
const RegistrationModel = require('./registrationModel');
class registrationValidation {
   async validateData(req, res) {
      try {
         var postData = JSON.parse(JSON.stringify(req.body));

         //Validation
         const { body } = req;
         const schema = Joi.object().keys({ 
            CompanyName: Joi.string().min(3).max(30),
            FirstName: Joi.string().min(3).max(30),
            LastName: Joi.string().min(3).max(30),
            UserId: Joi.string().min(3).max(30).email(),
            Password: Joi.string().min(3).max(30),
            ConfirmPassword: Joi.string().min(3).max(30),
            MobileNumber: Joi.string().min(3).max(30)
            // name: Joi.string().alphanum().min(3).max(30).required(),
            // birthyear: Joi.number().integer().min(1970).max(2013), 
         }); 
         
         const result = schema.validate(body);
         const { value, error } = result; 
         const valid = error == null; 
            //const result = Joi.validate(dataToValidate, schema); 
         if (!valid) {
            console.log('Invalid request : ' + error);
            return [false, 'Invalid request : ' + error];
         } else {
            // Company Name
            // UserId
            console.log('Valid request');
            return [true, 'Successfully Validated'];
         } 
      }
      catch (error) {
         console.log(error);
         return [false, 'Error occurred ' + error];
      }
   }
}
module.exports = new registrationValidation();