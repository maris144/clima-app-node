const axios = require('axios');

const getClima = async (lat, lng ) => {
 const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon= ${lng}& appid=6b9d51ee78696dbc18a9ae12325b71e4&units=metric`);
 return resp.data.main.temp;

}

module.exports = {
    getClima
}