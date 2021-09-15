const e = require("express");
const sqlInstance = require("mssql");
var mssqlcon = require("../../dbconnection");
class RegistrationMSSql {
  async getAllRegistrations() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().query("select * from product");
    return res.recordset;
  }

  // async PreValidate(objRegistrationModel) {

  // }
  async CreateRegistration(objRegistrationModel) {
    try {
      const conn = await mssqlcon.getConnection();
      //let dtDateTime = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
      // const res = await conn.request().query("INSERT INTO [dbo].[Registration] ([CompanyName], [FirstName], [LastName], [UserId], [UserSecret], [MobileNumber], [Active], [CreatedDatetime]) "
      //             + " VALUES ('" + objRegistrationModel.companyName + "', '" +  objRegistrationModel.firstName + "', '" +  objRegistrationModel.lastName + "', '" +  objRegistrationModel.userId + "', '" +  objRegistrationModel.password + "', '" +  objRegistrationModel.mobileNumber + "', 1, '" + dtDateTime + "')");

      let results = await conn
        .request()
        .input("CompanyId", sqlInstance.Int, null)
        .input(
          "CompanyName",
          sqlInstance.VarChar(50),
          objRegistrationModel.companyName
        )
        .input(
          "FirstName",
          sqlInstance.VarChar(50),
          objRegistrationModel.firstName
        )
        .input(
          "LastName",
          sqlInstance.VarChar(50),
          objRegistrationModel.lastName
        )
        .input("LoginId", sqlInstance.VarChar(50), objRegistrationModel.userId)
        .input(
          "UserSecret",
          sqlInstance.VarChar(50),
          objRegistrationModel.password
        )
        .input(
          "MobileNumber",
          sqlInstance.VarChar(50),
          objRegistrationModel.mobileNumber
        )
        //.input('CreatedDatetime', sqlInstance.DateTime, dtDateTime)
        .output("Result", sqlInstance.Bit, 1)
        .output("ErrorCode", sqlInstance.Int, 1)
        .output("Message", sqlInstance.VarChar(50))
        .execute("USP_Registration_Insert_Update");

      const output = results.output || {};
      return [output.Result, output.ErrorCode, output.Message];
    } catch (e) {
      console.dir(e);
      return [1, "Exception occurred during saving " + e.Message];
    }
  }
}
module.exports = new RegistrationMSSql();
