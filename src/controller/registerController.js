const { createSkeduDeptService, createCompanyService, createUserService } = require('../services/registerService');


const createDeptGatewayController = async (req, res) => {
  try {
    const response = await createSkeduDeptService(req.body);
    return res.status(201).json({ success: true, data: response })
  } catch (err) {
    res.status(400).json({success: false, data: err.message})
  }
    
};

const createCompanyGatewayController = async (req, res) => {
  try {
    const response = await createCompanyService(req.body);
    return res.status(201).json({ success: true, data: response })
  } catch (err) {
    res.status(400).json({success: false, data: err.message})
  }
};


const createUserGatewayController = async (req, res) => {
  try {
    const response = await createUserService(req.body);
    return res.status(201).json({ success: true, data: response })
  } catch (err) {
    res.status(400).json({success: false, data: err.message})
  }
};




module.exports = { createDeptGatewayController, createCompanyGatewayController, createUserGatewayController };

