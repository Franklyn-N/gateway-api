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
    const response = createVmsDepartment(body);
    if(!response) {
      throw Error('No response for Skedu');
    } 
    return({
      SkeduDeets: response,
    }) 
  } catch (error) {
    console.log(error.message);
  }
};


const createUserService = async (body) => {
  try {
    const response1 = createSkeduUser(body);
    if(!response1) {
      throw Error('No response for Skedu');
    } 
    const response2 = createLmsUser(body);
    if(!response2) {
      throw Error('No response for LMS');
    } 
    return({
      SkeduDeets: response1,
      LMSDeets: response2
    }) 
  } catch (error) {
    console.log(error.message);
  }
};





module.exports = { createSkeduDeptService, createCompanyService, createUserService };
