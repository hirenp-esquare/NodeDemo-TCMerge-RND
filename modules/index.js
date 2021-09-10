class Module {
    constructor(app) {
       this.app = app;
    }
   init() {
    const productcontroller = require('./product/product.controller');
    new productcontroller(this.app);

    const registrationcontroller = require('./registration/registration.controller');
    new registrationcontroller(this.app);
   }
  }
  module.exports = Module;

