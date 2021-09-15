//  This is a Constructor function taking age and passport 
//  as the paramaters
class RegistrationModel {
    //function RegistrationModel(companyName, firstName, lastName) {
    constructor(companyName, firstName, lastName, userId, password, confirmPassword, mobileNumber) {
        this.companyName = companyName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userId = userId;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.mobileNumber = mobileNumber;

        this.getAttr = function(){
            return this._attr;
        }
    }
    // Sets the age
    // 
    toJSON() {
        return {attr: this.getAttr()}; // everything that needs to get stored
    };
    
    fromJSON = function(obj) {
        if (typeof obj == "string") obj = JSON.parse(obj);
        var instance = new MyClass;
        instance._attr = obj.attr;
        return instance;
    };

    //RegistrationModel.prototype.setCompanyName = function(companyName) {
    setCompanyName(companyName) {
        this.companyName = companyName;
    };
    
    setFirstName(firstName) {
        this.firstName = firstName;
    };
   
    setLastName(lastName) {
        this.lastName = lastName;
    };

    setUserId(userId) {
        this.userId = userId;
    };

    setPassword(password) {
        this.password = password;
    };

    setConfirmPassword(confirmPassword) {
        this.confirmPassword = confirmPassword;
    };

    setMobileNumber(mobileNumber) {
        this.mobileNumber = mobileNumber;
    };
}

module.exports = RegistrationModel;