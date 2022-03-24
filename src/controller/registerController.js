const { createSkeduDeptService, createCompanyService, createUserService } = require('../services/registerService');


const createDeptGatewayController = async (req, res) => {
    return await createSkeduDeptService(req.body, result => {
        return res.status(result.statusCode).json({ result })
    })
};

const createCompanyGatewayController = async (req, res) => {
  try {
    const response = await createCompanyService(req.body)
    return res.status(201).json({ success: true, data: response })
  } catch (err) {
    console.log('err', err)
    res.status(400).json({success: false, data: err.message})
  }
};


const createUserGatewayController = async (req, res) => {
  return await createUserService(req.body, result => {
      return res.status(result.statusCode).json({ result })
  })
};


module.exports = { createDeptGatewayController, createCompanyGatewayController, createUserGatewayController };

