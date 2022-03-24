const { loginUser, loginCompany } = require('../services/loginService.js');


const userLoginGatewayController = async (req, res) => {
    return await loginUser(req.body, result => {
        return res.status(200).json({ result })
    })
};

const companyLoginGatewayController = async (req, res) => {
  return await loginCompany(req.body, result => {
      return res.status(200).json({ result })
  })
};

module.exports = { userLoginGatewayController, companyLoginGatewayController};

