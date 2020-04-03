axios = require('axios')

const getLugarLatLon = async(dir) => {

    const encodeUrl = encodeURI(dir)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        headers: { 'X-RapidAPI-Key': '159042219bmsh1d7f653f198b20dp102f34jsnf3282f82be60' }
    });

    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`)
    }

    const data = resp.data.Results[0]
    const direccion = data.name
    const lat = data.lat
    const lon = data.lon

    return {
        direccion,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLon
}