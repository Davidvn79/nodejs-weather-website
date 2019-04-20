/*
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
*/

/***********************************
* 9. Application Deployment (Weather App)
* 9. New Feature Deployment Workflow
* Goal: Add new data to forecast
*
* 1.Update the forecast string to include new data
* 2.Commit your changes
* 3.Push your changes to Githup and deply to Heroku
* 4.Test your work in the live application!
*/
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
            callback(undefined , body.daily.data[0].summary +' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.' + ' High temperaure: ' + body.daily.data[0].temperatureHigh +', low temperature: ' + body.daily.data[0].temperatureLow)
        }
    })
}

module.exports = forecast