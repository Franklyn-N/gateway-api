const express = require('express');
const router = express.Router();

const LoginController = require('../controller/loginController.js');
const RegisterController = require("../controller/registerController.js");

router.post('/login', LoginController.userLoginGatewayController);  

router.post('/company-login', LoginController.companyLoginGatewayController); 

router.post('/create-department', RegisterController.createDeptGatewayController);

router.post('/create-company', RegisterController.createCompanyGatewayController); 

router.post('/create-user', RegisterController.createUserGatewayController);   




module.exports = router;