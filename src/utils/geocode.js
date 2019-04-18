const request = require('request')

const geocode = (address , callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +'.json?access_token=pk.eyJ1IjoiZGF2aWR2biIsImEiOiJjanU5NTJ6NTQyYzU5NDRwOGN5NWd0cjI2In0.YrtOmuk65WtgQ8NYehFADQ&limit=1'
    
    request({url, json: true}, (error, respond) =>{
        const {body} = respond
        if(error){
            callback('Unable to connect to location service', undefined)        
        }else if(body.features.length === 0){   
            callback('Unable to find a location. Try another one')
        }else{
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}
module.exports = geocode