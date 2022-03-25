const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
const SUBCRIPTION_KEY = process.env.SUBCRIPTION_KEY;

const config = {
    sub_key: SUBCRIPTION_KEY,
    port: PORT
};

module.exports = {config};