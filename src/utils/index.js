const axios = require("axios");
const config = require("../config/config.js");

const skeduLogin = async (body) => {
  try {
    const result = await axios({
      method: "post",
      url: "https://appps.azure-api.net/vms/login",
      data: body,
      headers: { "Ocp-Apim-Subscription-Key": config.config.sub_key },
    });
    return { success: true, data: result.data };
  } catch (error) {
    return { success: false, data: error.message };
  }
};

const fixmeetLogin = async (body) => {
  try {
    const result = await axios({
      method: "post",
      url: "https://appps.azure-api.net/fixmeet/auth/email-login",
      data: body,
      headers: { "Ocp-Apim-Subscription-Key": config.config.sub_key },
    });
    return { success: true, data: result.data };
  } catch (error) {
    return { success: false, data: error.message };
  }
};

const lmsLogin = async (body) => {
  try {
    const result = await axios({
      method: "post",
      url: "https://appps.azure-api.net/lms/login",
      data: body,
      headers: { "Ocp-Apim-Subscription-Key": config.config.sub_key },
    });
    return { success: true, data: result.data };
  } catch (error) {
    return { success: false, data: error.message };
  }
};

const createSkeduCompany = async (body) => {
  try {
    const result = await axios({
      method: "post",
      url: "https://appps.azure-api.net/vms/create-company-account",
      data: body,
      headers: { "Ocp-Apim-Subscription-Key": config.config.sub_key },
    });
    return { success: true, data: result.data };
  } catch (error) {
    return { success: false, data: error.message };
  }
};

const createLmsCompany = async (body) => {
  try {
    const result = await axios({
      method: "post",
      url: "https://appps.azure-api.net/lms/company",
      data: body,
      headers: {
        "Ocp-Apim-Subscription-Key": config.config.sub_key,
      },
    });
    return { success: true, data: result.data };
  } catch (error) {
    return { success: false, data: error.message };
  }
};

const createVmsDepartment = async (body) => {
  try {
    const result = await axios({
      method: "post",
      url: "https://appps.azure-api.net/vms/create-department",
      data: body,
      headers: {
        "Ocp-Apim-Subscription-Key": config.config.sub_key,
      },
    });
    return { success: true, data: result.data };
  } catch (error) {
    return { success: false, data: error.message };
  }
};

const loginVmsCompany = async (body) => {
  try {
    const result = await axios({
      method: "post",
      url: "https://appps.azure-api.net/vms/companylogin",
      data: body,
      headers: {
        "Ocp-Apim-Subscription-Key": config.config.sub_key,
      },
    });
    return { success: true, data: result.data };
  } catch (error) {
    return { success: false, data: error.message };
  }
};

const createSkeduUser = async (body) => {
  try {
    const result = await axios({
      method: "post",
      url: "https://appps.azure-api.net/vms/create-staff",
      data: body,
      headers: {
        "Ocp-Apim-Subscription-Key": config.config.sub_key,
      },
    });
    return { success: true, data: result.data };
  } catch (error) {
    return { success: false, data: error.message };
  }
};

const createLmsUser = async (body) => {
  try {
    const result = await axios({
      method: "post",
      url: "https://appps.azure-api.net/lms/user",
      data: body,
      headers: {
        "Ocp-Apim-Subscription-Key": config.config.sub_key,
      },
    });
    return { success: true, data: result.data };
  } catch (error) {
    return { success: false, data: error.message };
  }
};

module.exports = {
  fixmeetLogin,
  skeduLogin,
  lmsLogin,
  createSkeduCompany,
  createLmsCompany,
  createVmsDepartment,
  loginVmsCompany,
  createSkeduUser,
  createLmsUser,
};
