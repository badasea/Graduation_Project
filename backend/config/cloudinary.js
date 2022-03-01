const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.HEROKU_CLOUD_NAME,
  api_key: process.env.HEROKU_API_KEY,
  api_secret: process.env.HEROKU_API_SECRET,
});

module.exports = cloudinary;
