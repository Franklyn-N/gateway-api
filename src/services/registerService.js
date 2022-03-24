const { createVmsDepartment, createSkeduCompany, createLmsCompany, createSkeduUser, createLmsUser } = require("../utils/index.js");


const createCompanyService = async (body) => {
  try {
    const response1 = await createSkeduCompany(body);
    if(!response1.success) {
      throw Error(`Skedu Error: ${response1.data}`);
    } 
    const response2 = await createLmsCompany(body);
    if(!response2.success) {
      throw Error(`LMS Error: ${response2.data}`);
    }

    return({
      SkeduDeets: response1,
      LMSDeets: response2
    }) 
  } catch (error) {
    throw error
  }
};


const createSkeduDeptService = async (body) => {
  try {
    const response = await createVmsDepartment(body);
    if(!response.success) {
      throw Error(`Skedu Error: ${response.data}`);
    } 
    return({
      SkeduDeets: response,
    }) 
  } catch (error) {
    throw error;
  }
};


const createUserService = async (body) => {
  try {
    const response1 = await createSkeduUser(body);
    if(!response1.success) {
      throw Error(`Skedu Error: ${response1.data}`);
    } 
    const response2 = await createLmsUser(body);
    if(!response2.success) {
      throw Error(`LMS Error: ${response2.data}`);
    }
    return({
      SkeduDeets: response1,
      LMSDeets: response2
    }) 
  } catch (error) {
    throw error;
  }
};





module.exports = { createSkeduDeptService, createCompanyService, createUserService };
