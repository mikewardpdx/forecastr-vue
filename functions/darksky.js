const Axios = require('axios');

const baseUrl = 'https://api.darksky.net/forecast';
const darkSkyApiKey = '72cb4b66f2077387dafc4eeff3ac709e';

exports.handler = (event, context, callback) => {
  Axios.get(`${baseUrl}/${darkSkyApiKey}/0,0`)
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
