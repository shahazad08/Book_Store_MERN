const dotenv = require("dotenv");

dotenv.config();

console.log("URI", process.env.MONGO_URL);
module.exports = {
    url: process.env.MONGO_URL
}