const { createVmsDepartment, createSkeduCompany, createLmsCompany, createSkeduUser, createLmsUser } = require("../utils/index.js");


const createCompanyService = async (body) => {
  try {
    console.log('res', body)
    const response1 = createSkeduCompany(body);
    if(!response1) {
      throw Error('No response for Skedu');
    } 
    const response2 = createLmsCompany(body);
    if(!response2) {
      throw Error('No response for Fixmeet');
    }
    return({
      SkeduDeets: response1,
      LMSDeets: response2
    }) 
  } catch (error) {
    console.log(error)
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
