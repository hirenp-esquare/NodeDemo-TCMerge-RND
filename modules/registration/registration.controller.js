
const express = require('express');
const registration = require('./registration');
const router = express.Router();
class RegistrationController {
    constructor(app) {
      router.post('/', registration.CreateRegistration);
      app.use('/api/v1/CreateRegistration', router);
    }
 }
module.exports = RegistrationController;