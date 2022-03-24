const express = require('express');
const router = express.Router();

const LoginController = require('../controller/loginController.js');
const RegisterController = require("../controller/registerController.js");

router.post('/gateway-login', LoginController.userLoginGatewayController);  

router.post('/gateway-company-login', LoginController.companyLoginGatewayController); 

router.post('/gateway-create-department', RegisterController.createDeptGatewayController);

router.post('/gateway-create-company', RegisterController.createCompanyGatewayController); 

router.post('/gateway-create-user', RegisterController.createUserGatewayController);   




module.exports = router;