const Axios = require('axios');

const baseUrl = 'https://api.darksky.net/forecast';
const darkSkyApiKey = process.env.VUE_APP_DARK_SKY_API_KEY;

exports.handler = (event, context, callback) => {
  const parsedBody = JSON.parse(event.body);

  Axios.get(`${baseUrl}/${darkSkyApiKey}/${parsedBody.latitude},${parsedBody.longitude}`)
    .then((res) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res.data),
      });
    })
    .catch((err) => {
      callback(new Error(err));
    });
};
