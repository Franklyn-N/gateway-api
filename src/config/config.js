const dotenv = require("dotenv");
dotenv.config();

const SUBCRIPTION_KEY = process.env.SUBCRIPTION_KEY;

const config = {
    sub_key: SUBCRIPTION_KEY
};

module.exports = {config};