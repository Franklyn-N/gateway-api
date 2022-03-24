const { fixmeetLogin, skeduLogin, lmsLogin, loginVmsCompany} = require("../utils/index.js");

const loginUser = async (body) => {
  try {
    const response1 = skeduLogin(body);
    if(!response1.success) {
      throw Error(`Skedu Error: ${response1.data}`);
    } 
    const response2 = fixmeetLogin(body);
    if(!response2.success) {
      throw Error(`Fixmeet Error: ${response2.data}`);
    }
    const response3 = lmsLogin(body);
    if(!response3.success) {
      throw Error(`LMS Error: ${response3.data}`);
    }
    return({
      SkeduDeets: response1,
      FixmeetDeets: response2,
      LMSDeets: response3
    }) 
  } catch (error) {
    throw error;
  }
};


const loginCompany = async (body) => {
  try {
    const response = loginVmsCompany(body);
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




module.exports = { loginUser, loginCompany };