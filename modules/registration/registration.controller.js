
const express = require('express');
const app = require('../../app');
const registration = require('./registration');
const router = express.Router();

// app.post('/api/v1/CreateRegistration', (req, res)=> {
//   console.log("CreateRegistration 123");
//   var postData = JSON.parse(JSON.stringify(req.body));
//   console.log("CreateRegistration " + postData.test);
// });


class RegistrationController {
    constructor(app) {
      router.post('/', registration.CreateRegistration);
      app.use('/api/v1/CreateRegistration', router);
    }

   
 }
module.exports = RegistrationController;