const mssqlcon = require('../../dbconnection');
class RegistrationMSSql { 
   async getAllRegistrations() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().query('select * from product');
    return res.recordset;
  }

  async CreateRegistration() {
    // const conn = await mssqlcon.getConnection();
    // const res = await conn.request().query('select * from product');
    //return res.recordset;
    return "CreateRegistration MSSQL Called"; // + req.body["test"];
  }
}
module.exports = new RegistrationMSSql();