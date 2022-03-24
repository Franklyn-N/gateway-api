const { loginUser, loginCompany } = require("../services/loginService.js");

const userLoginGatewayController = async (req, res) => {
  try {
    const response = await loginUser(req.body);
    return res.status(201).json({ success: true, data: response });
  } catch (err) {
    res.status(400).json({ success: false, data: err.message });
  }
};

const companyLoginGatewayController = async (req, res) => {
  try {
    const response = await loginCompany(req.body);
    return res.status(201).json({ success: true, data: response });
  } catch (err) {
    res.status(400).json({ success: false, data: err.message });
  }
};

module.exports = { userLoginGatewayController, companyLoginGatewayController };
