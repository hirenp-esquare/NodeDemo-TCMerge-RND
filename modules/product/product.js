const productMssql = require('./product.mssql');
class product {
   constructor(app) {

   }
   async getAllProducts(req, res) {
      try {
         var postData = JSON.parse(JSON.stringify(req.body));
         console.log("getAllProducts " + postData.test);
         const output = await productMssql.getAllProducts();
         res.send(output);
      }
      catch (error) {
         console.log(error);
      }
   }
}
module.exports = new product();

class productModel {
   
}