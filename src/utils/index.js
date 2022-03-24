const axios = require("axios");
const config = require("../config/config.js");

const skeduLogin = async (body) => {
  try {
    const result =  await axios.post("https://appps.azure-api.net/vms/login", body, config.config.sub_key,);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};


const fixmeetLogin = async (body) => {
  try {
    const result =  await axios.post(
      "https://appps.azure-api.net/fixmeet/auth/email-login", body, config.config.sub_key);
    console.log(result)
  } catch (error) {
    console.log(error.message);
  }
};

const lmsLogin = async (body) => {
  try {
    const result =  await axios.post(
      "https://appps.azure-api.net/lms/login", body, config.config.sub_key);
    console.log(result)
  } catch (error) {
    console.log(error.message);
  }
};


const createSkeduCompany = async (body) => {
  try {
    const result =  await axios.post(
      "https://appps.azure-api.net/vms/create-company-account", body, config.config.sub_key)
    console.log(result)
  } catch (error) {
    console.log(error.message);
  }
};


const createLmsCompany = async (body) => {
  try {
    const result =  await axios.post(
      "https://appps.azure-api.net/lms/company", body, config.config.sub_key)
    console.log(result)
  } catch (error) {
    console.log(error.message);
  }
};

const createVmsDepartment = async (body) => {
  try {
    const result =  await axios.post(
      "https://appps.azure-api.net/vms/create-department", body, config.config.sub_key)
    console.log(result)
  } catch (error) {
    console.log(error.message);
  }
};


const loginVmsCompany = async (body) => {
  try {
    const result =  await axios.post(
      "https://appps.azure-api.net/vms/companylogin", body, config.config.sub_key)
    console.log(result)
  } catch (error) {
    console.log(error.message);
  }
};


const createSkeduUser = async (body) => {
  try {
    const result =  await axios.post(
      "https://appps.azure-api.net/vms/create-staff", body, config.config.sub_key)
    console.log(result)
  } catch (error) {
    console.log(error.message);
  }
};


const createLmsUser = async (body) => {
  try {
    const result =  await axios.post(
      "https://appps.azure-api.net/lms/user", body, config.config.sub_key)
    console.log(result)
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { fixmeetLogin, skeduLogin, lmsLogin, createSkeduCompany, createLmsCompany, createVmsDepartment, loginVmsCompany, createSkeduUser, createLmsUser };
