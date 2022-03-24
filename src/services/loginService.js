const { fixmeetLogin, skeduLogin, lmsLogin, loginVmsCompany} = require("../utils/index.js");

const loginUser = async (body) => {
  try {
    const response1 = skeduLogin(body);
    if(!response1) {
      throw Error('No response for Skedu');
    } 
    const response2 = fixmeetLogin(body);
    if(!response2) {
      throw Error('No response for Fixmeet');
    }
    const response3 = lmsLogin(body);
    if(!response3) {
      throw Error('No response for LMS');
    }
    return({
      SkeduDeets: response1,
      FixmeetDeets: response2,
      LMSDeets: response3
    }) 
  } catch (error) {
    console.log(error.message)
  }
};


const loginCompany = async (body) => {
  try {
    const response = loginVmsCompany(body);
    if(!response) {
      throw Error('No response for Skedu');
    } 
    return({
      SkeduDeets: response,
    }) 
  } catch (error) {
    console.log(error.message)
  }
};




module.exports = { loginUser, loginCompany };