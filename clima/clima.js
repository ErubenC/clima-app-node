axios = require('axios')

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=29dc963885df9d9b4eec6c2197a0c628&units=metric`)

    return resp.data.main.temp

}

module.exports = {
    getClima
}