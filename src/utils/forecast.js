const request = require('request')

const forecast = (latitude, longitude, callback) =>{
    const url = 'https://api.darksky.net/forecast/3d921497317c880a51ec92f39cc87566/' +
                 latitude + ',' + longitude +'?unit=us'

    request({url, json: true}, (error, respond)=>{
        const {body} = respond
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(body.code){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined , body.daily.data[0].summary +' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast