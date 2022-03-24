const { createSkeduDeptService, createCompanyService, createUserService } = require('../services/registerService');


const createDeptGatewayController = async (req, res) => {
    return await createSkeduDeptService(req.body, result => {
        return res.status(result.statusCode).json({ result })
    })
};

const createCompanyGatewayController = async (req, res) => {
  return await createCompanyService(req.body, result => {
      return res.status(result.statusCode).json({ result })
  })
};


const createUserGatewayController = async (req, res) => {
  return await createUserService(req.body, result => {
      return res.status(result.statusCode).json({ result })
  })
};


module.exports = { createDeptGatewayController, createCompanyGatewayController, createUserGatewayController };

