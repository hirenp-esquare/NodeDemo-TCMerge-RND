const mssql = require('mssql');
class DBConnection {
  async getConnection() {
     try {
       return await mssql.connect({
              user: 'trellisDataDev',
              password: 'pass@word1',
              server: '40.115.137.12',
              database: 'DataMartDB',
              port: 1433,
              options: {
                trustServerCertificate: true
            }
       });
    }
    catch(error) {
      console.log(error);
    }
  }
}
module.exports = new DBConnection();