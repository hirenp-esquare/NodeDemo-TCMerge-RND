const mssql = require("mssql");
const dotenv = require('dotenv');

dotenv.config();

class DBConnection {
    async getConnection() {
        try {
            return await mssql.connect({
                user: `${process.env.USER}`,
                password: `${process.env.PASSWORD}`,
                server: `${process.env.SERVER}`,
                database: `${process.env.DATABASE}`,
                port: Number(`${process.env.DATABASE_PORT}`),
                options: {
                trustServerCertificate: true,
                },
                //  return await mssql.connect({
                //         user: 'trellisDataDev',
                //         password: 'pass@word1',
                //         server: '40.115.137.12',
                //         database: 'DataMartDB',
                //         port: 1433,
                //         options: {
                //           trustServerCertificate: true
                //       }
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new DBConnection();