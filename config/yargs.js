/**
 *  Se emplea options cuando no hay comandos
 *  solo opciones. 
 */

const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Direcion de la ciudad para obtener el clima',
            demand: true
        }
    })
    .help()
    .argv

module.exports = {
    argv
}