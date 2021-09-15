const Joi = require("joi");
const registrationMssql = require("./registration.mssql");
const registrationModel = require("./registrationModel");
const registrationValidation = require("./registrationValidation");
class registration {
  	async CreateRegistration(req, res) {
		//async post(req, res) {
		try {
			let IsValid = await registrationValidation.validateData(req, res);
			console.log("IsValid : " + IsValid);
			if (!IsValid[0]) {
				res.status(422).json({
					message: IsValid[1],
					data: JSON.parse(JSON.stringify(req.body)),
				});
			} else {
				// Create model
				let postData = JSON.parse(JSON.stringify(req.body));
				let objRegistrationModel = new registrationModel();
				objRegistrationModel.setCompanyName(postData.CompanyName);
				objRegistrationModel.setFirstName(postData.FirstName);
				objRegistrationModel.setLastName(postData.LastName);
				objRegistrationModel.setUserId(postData.UserId);
				objRegistrationModel.setPassword(postData.Password);
				objRegistrationModel.setConfirmPassword(postData.ConfirmPassword);
				objRegistrationModel.setMobileNumber(postData.MobileNumber);
				//console.log(objRegistrationModel.companyName);

				//Business logic
				const result = await registrationMssql.CreateRegistration(
					objRegistrationModel
				);
				if (result[0]) {
					res.status(result[1]).json({message: result[2]});
				} else {
					res.status(result[1]).json({message: result[2], data: JSON.parse(JSON.stringify(req.body))});
				}
			}
		} catch (error) {
		console.log(error);
		}
	}
}

module.exports = new registration();