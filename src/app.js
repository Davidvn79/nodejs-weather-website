/*****************************
* SEARCH KEY: CODE WORKING, 
*
* 7. Web Servers (Weather App)
* 2. Hello Express!

const express = require('express')

const app = express()

app.get('', (req , res) =>{
    res.send('Hello express')
})

app.get('/help', (req , res) =>{
    res.send('Help page')
})
//app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

*/

/*****************************
* 7. Web Servers (Weather App)
* 2. Hello Express!
* Goal: Setup two new routes
*
* 1.Setup an about route and render a page title
* 2.Setup a weather route and render a page title
* 3. Test your work by visiting both in the browser


const express = require('express')

const app = express()

app.get('', (req , res) =>{
    res.send('Hello express')
})

app.get('/help', (req , res) =>{
    res.send('Help page')
})

app.get('/about', (req , res) =>{
    res.send('About page')
})

app.get('/weather', (req , res) =>{
    res.send('Weather info page')
})

//app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

*/

/*****************************
* 7. Web Servers (Weather App)
* 3. Serving up HTML and JSON


const express = require('express')

const app = express()

app.get('', (req , res) =>{
    res.send('<h1>Weather</h1>')
})

app.get('/help', (req , res) =>{
    res.send([{name: 'Andrew'}, {name:'Sarah'}])
})

app.get('/about', (req , res) =>{
    res.send('About page')
})

app.get('/weather', (req , res) =>{
    res.send('Weather info page')
})

//app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

*/

/***************************
* Goal:Update routes
* 
* 1.Setup about route to render a title with HTML
* 2.Setup a weather route to send back JSON
*  - Object with forecast and location string
* 3 Test your work by visiting both in the browser


const express = require('express')

const app = express()

app.get('', (req , res) =>{
    res.send('<h1>Weather</h1>')
})

app.get('/help', (req , res) =>{
    res.send([{name: 'Andrew'}, {name:'Sarah'}])
})

app.get('/about', (req , res) =>{
    res.send('<title>About</title>')
})

app.get('/weather', (req , res) =>{
    res.send({forecast: '56 degrees', location: 'Philadelphia'})
})

//app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

*/


/*****************************
* 7. Web Servers (Weather App)
* 4. Serving up Static Assets


const path = require('path')
const express = require('express')
const app = express()

console.log(__dirname)
//console.log(__filename)
//console.log(path.join(__dirname))
// console.log(path.join(__dirname, '../..'))
// console.log(path.join(__dirname, '..'))
//console.log(path.join(__dirname, '../public'))

const publicPath = path.join(__dirname, '../public')
app.use(express.static(publicPath))

app.get('/help', (req , res) =>{
    res.send([{name: 'Andrew'}, {name:'Sarah'}])
})

app.get('/about', (req , res) =>{
    res.send('<title>About</title>')
})

app.get('/weather', (req , res) =>{
    res.send({forecast: '56 degrees', location: 'Philadelphia'})
})

//app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

*/

/*****************************
* Goal: Create two more HTML file
*
* 1.Create a html page for about with "About" title
* 2.Create a html page for help with "Help" title
* 3. Remove the old route handlers for both
* 4. Visit both in the browser to test your work



const path = require('path')
const express = require('express')
const app = express()

const publicPath = path.join(__dirname, '../public')

app.use(express.static(publicPath))

app.get('/weather', (req , res) =>{
    res.send({forecast: '56 degrees', location: 'Philadelphia'})
})

//app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

*/

/*****************************
* 7. Web Servers (Weather App)
* 6. Dynamic Pages with Templating


const path = require('path')
const express = require('express')
const app = express()

const publicPath = path.join(__dirname, '../public')

app.set('view engine','hbs')

app.get('', (req , res) =>{
    res.render('index', {
        title: 'Weather',
        name: 'David'
    })
})

app.get('/about', (req , res) =>{
    res.render('about', {
        title: 'About',
        name: 'David'
    })
})

app.use(express.static(publicPath))

app.get('/weather', (req , res) =>{
    res.send({forecast: '56 degrees', location: 'Philadelphia'})
})

//app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

*/

/**********************
* Goal: Create a template for help page
* 1.Setup a help template to render a help message to the screen
* 2.Setup the help route and render the template with an example message
* 3.Visit the route in the browser and see your message print


const path = require('path')
const express = require('express')
const app = express()

const publicPath = path.join(__dirname, '../public')
app.use(express.static(publicPath))

app.set('view engine','hbs')

app.get('', (req , res) =>{
    res.render('index', {
        title: 'Weather',
        name: 'David'
    })
})

app.get('/about', (req , res) =>{
    res.render('about', {
        title: 'About',
        name: 'David'
    })
})

app.get('/help', (req , res) =>{
    res.render('help', {
        title: 'Help',
        name: 'David'
    })
})


app.get('/weather', (req , res) =>{
    res.send({forecast: '56 degrees', location: 'Philadelphia'})
})

//app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

*/

/**********************
* 7. Web Servers (Weather App)
* 7. Customizing the Views Directory
* and
* 8. Advanced Templating


const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

//define path for Express config
const publicPath = path.join(__dirname, '../public')
//setup static directory for server
app.use(express.static(publicPath))

const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//register partials takes a path to the directory where your partials live.
hbs.registerPartials(partialsPath)

//Setup handlerbars engine and view
app.set('view engine','hbs')
//CODE WORKING
//app.set('views', './templates')
app.set('views', viewPath)

app.get('', (req , res) =>{
    res.render('index', {
        title: 'Weather',
        name: 'David'
    })
})

app.get('/about', (req , res) =>{
    res.render('about', {
        title: 'About',
        name: 'David'
    })
})

app.get('/help', (req , res) =>{
    res.render('help', {
        title: 'Help',
        name: 'David'
    })
})


app.get('/weather', (req , res) =>{
    res.send({forecast: '56 degrees', location: 'Philadelphia'})
})

//app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

*/

/**********************
* Goal: Create a partial for the fouter
* 1.Setup the template for the footer partial "Created by ..."
* 2.Render the partial at the bottom of all three pages
* 3.Test your work by visiting all three pages


const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

//define path for Express config
const publicPath = path.join(__dirname, '../public')
//setup static directory for server
app.use(express.static(publicPath))

const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//register partials takes a path to the directory where your partials live.
hbs.registerPartials(partialsPath)

//setup handlerbars engine and view
app.set('view engine','hbs')
//CODE WORKING
//app.set('views', './templates')
app.set('views', viewPath)

app.get('', (req , res) =>{
    res.render('index', {
        title: 'Weather',
        name: 'David'
    })
})

app.get('/about', (req , res) =>{
    res.render('about', {
        title: 'About',
        name: 'David'
    })
})

app.get('/help', (req , res) =>{
    res.render('help', {
        title: 'Help',
        name: 'David'
    })
})


app.get('/weather', (req , res) =>{
    res.send({forecast: '56 degrees', location: 'Philadelphia'})
})

//app.com
//app.com/help
//app.com/about

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

*/

/**********************
* 7. Web Servers (Weather App)
* 9. 404 Pages


const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

//define path for Express config
const publicPath = path.join(__dirname, '../public')
//setup static directory for server
app.use(express.static(publicPath))

const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//register partials takes a path to the directory where your partials live.
hbs.registerPartials(partialsPath)

//setup handlerbars engine and view
app.set('view engine','hbs')
//CODE WORKING
//app.set('views', './templates')
app.set('views', viewPath)

app.get('', (req , res) =>{
    res.render('index', {
        title: 'Weather',
        name: 'David'
    })
})

app.get('/about', (req , res) =>{
    res.render('about', {
        title: 'About',
        name: 'David'
    })
})

app.get('/help', (req , res) =>{
    res.render('help', {
        title: 'Help',
        name: 'David'
    })
})

app.get('/help/*', (req , res) =>{
    res.render('404', {
        title: '404',
        name: 'David',
        errorMsg: 'Help article not foundr'
    })
})

app.get('*', (req , res) =>{
    res.render('404', {
        title: '404',
        name: 'David',
        errorMsg: 'Page 404 error'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})


*/

/**********************
* 8. Accessing API from Browser  (Weather App)
* 2. The Query String
*
* Goal:Update weather endpoint to accept address
* 1.No address? Send back an  error message
* 2.Address? Send back the static JSON
    - Add address property onto JSON which returns the provided address
* 3.Test/weather and /weather?address=philadelphia


const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

//define path for Express config
const publicPath = path.join(__dirname, '../public')
//setup static directory for server
app.use(express.static(publicPath))

const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//register partials takes a path to the directory where your partials live.
hbs.registerPartials(partialsPath)

//setup handlerbars engine and view
app.set('view engine','hbs')
//CODE WORKING
//app.set('views', './templates')
app.set('views', viewPath)

app.get('', (req , res) =>{
    res.render('index', {
        title: 'Weather',
        name: 'David'
    })
})

app.get('/about', (req , res) =>{
    res.render('about', {
        title: 'About',
        name: 'David'
    })
})

app.get('/help', (req , res) =>{
    res.render('help', {
        title: 'Help',
        name: 'David'
    })
})

app.get('/weather', (req , res) =>{
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address in URL'
        })
    }

    res.send({
        forecast: '56 degrees', 
        location: 'Philadelphia',
        address: req.query.address
    })
})

app.get('/products', (req , res) =>{
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search turn'
        })
    }

    //console.log(req.query)
    console.log(req.query.search)
    res.send({
        product:[]
    })
})

app.get('/help/*', (req , res) =>{
    res.render('404', {
        title: '404',
        name: 'David',
        errorMsg: 'Help article not foundr'
    })
})

app.get('*', (req , res) =>{
    res.render('404', {
        title: '404',
        name: 'David',
        errorMsg: 'Page 404 error'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

*/

/**********************
* 8. Accessing API from Browser  (Weather App)
* 3. Building a JSON HTTP Endpoint
* Goal: Wire up/weather
*
* 1.Require geocode/forecast into app.js
* 2.Use the address to geocode
* 3.Use the coordinates to get forecast
* 4.Send back the real forecast and location


const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//define path for Express config
const publicPath = path.join(__dirname, '../public')
//setup static directory for server
app.use(express.static(publicPath))

const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//register partials takes a path to the directory where your partials live.
hbs.registerPartials(partialsPath)

//setup handlerbars engine and view
app.set('view engine','hbs')
//CODE WORKING
//app.set('views', './templates')
app.set('views', viewPath)

app.get('', (req , res) =>{
    res.render('index', {
        title: 'Weather',
        name: 'David'
    })
})

app.get('/about', (req , res) =>{
    res.render('about', {
        title: 'About',
        name: 'David'
    })
})

app.get('/help', (req , res) =>{
    res.render('help', {
        title: 'Help',
        name: 'David'
    })
})

app.get('/weather', (req , res) =>{
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address in URL'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location}) =>{
        if(error){
            //return console.log(error)

            //MY CODE
            // return res.send({
            //     error: error
            // })
            //TEACHER'S CODE
            return res.send({ error })    
        }
    
        forecast(latitude, longitude, (error, dataForecast) => {
            if(error){
                //return console.log(error)
                
                //MY CODE
                // return res.send({
                //     error: error
                // })
                
                //TEACHER'S CODE
                return res.send({ error })
            }
            // console.log(location)
            // console.log(dataForecast)
            //MY CODE
            // res.send({
            //     forecast: dataForecast, 
            //     location: location,
            // })
            
            //TEACHER'S CODE
            res.send({
                forecast: dataForecast, 
                location
            })
        })
    })

    // res.send({
    //     forecast: '56 degrees', 
    //     location: 'Philadelphia',
    //     address: req.query.address
    // })
})

app.get('/products', (req , res) =>{
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search turn'
        })
    }

    //console.log(req.query)
    console.log(req.query.search)
    res.send({
        product:[]
    })
})

app.get('/help/*', (req , res) =>{
    res.render('404', {
        title: '404',
        name: 'David',
        errorMsg: 'Help article not foundr'
    })
})

app.get('*', (req , res) =>{
    res.render('404', {
        title: '404',
        name: 'David',
        errorMsg: 'Page 404 error'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

*/

/************************
* 8. Accessing API from Browser  (Weather App)
* 4. ES6 Aside Default Function Parameters
*/

const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//define path for Express config
const publicPath = path.join(__dirname, '../public')
//setup static directory for server
app.use(express.static(publicPath))

const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//register partials takes a path to the directory where your partials live.
hbs.registerPartials(partialsPath)

//setup handlerbars engine and view
app.set('view engine','hbs')
//CODE WORKING
//app.set('views', './templates')
app.set('views', viewPath)

app.get('', (req , res) =>{
    res.render('index', {
        title: 'Weather',
        name: 'David'
    })
})

app.get('/about', (req , res) =>{
    res.render('about', {
        title: 'About',
        name: 'David'
    })
})

app.get('/help', (req , res) =>{
    res.render('help', {
        title: 'Help',
        name: 'David'
    })
})

app.get('/weather', (req , res) =>{
    if(!req.query.address){
        return res.send({
            //error: 'You must provide an address in URL'
            error: 'You must provide an address'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location} = {}) =>{
        if(error){
            //TEACHER'S CODE
            return res.send({ error })    
        }
    
        forecast(latitude, longitude, (error, dataForecast) => {
            if(error){
                //TEACHER'S CODE
                return res.send({ error })
            }
            
            //TEACHER'S CODE
            res.send({
                forecast: dataForecast, 
                location
            })
        })
    })
})

app.get('/products', (req , res) =>{
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search turn'
        })
    }

    //console.log(req.query)
    console.log(req.query.search)
    res.send({
        product:[]
    })
})

app.get('/help/*', (req , res) =>{
    res.render('404', {
        title: '404',
        name: 'David',
        errorMsg: 'Help article not foundr'
    })
})

app.get('*', (req , res) =>{
    res.render('404', {
        title: '404',
        name: 'David',
        errorMsg: 'Page 404 error'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})