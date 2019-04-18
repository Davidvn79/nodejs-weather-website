/**********************************
* 8. Accessing API from Browser  (Weather App)
* 5. Browser HTTP Requests with Fetch
*
* Goal: Fetch weather!
* 1.Setup a call to fetch to fetch weather for Boston
* 2.Get the parse JSON response
* -If error property, print error
* - If no error property, print location and forecast
* 3.Refresh the browser and test your work


console.log('javascript is loaded')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) =>{
//         console.log(data)
//     })
// })

fetch('http://localhost:3000/weather?address=Boston').then((response) =>{
    response.json().then((data) =>{
        if(data.error){
            return console.log(data.error)
        }
        console.log(data.location)        
        console.log(data.forecast)        
    })
})

*/

/**********************************
* 8. Accessing API from Browser  (Weather App)
* 6. Creating a Search Form
* Goal: Use input value to get weather
*
* 1.Migrate fetch call into the submit callback
* 2.Use the search text as the address query string value
* 3.Submit the form with a valid and invalid value to test


console.log('Client side javascript is loaded')

// fetch('http://localhost:3000/weather?address=Boston').then((response) =>{
//     response.json().then((data) =>{
//         if(data.error){
//             return console.log(data.error)
//         }
//         console.log(data.location)        
//         console.log(data.forecast)        
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) =>{
    const location = search.value
    e.preventDefault()
    //console.log('testing')
    //console.log(location)

    fetch('http://localhost:3000/weather?address='+location).then((response) =>{
    response.json().then((data) =>{
        if(data.error){
            return console.log(data.error)
        }
        console.log(data.location)        
        console.log(data.forecast)        
    })
})
})

*/

/**********************************
* 8. Accessing API from Browser  (Weather App)
* 7. Wiring up the User Interface
*Goal: Render content to paragraphs
*
* 1.Select the second message p from Javascript
* 2.Just before fetch, render loading message and empty p
* 3.If error, render error
* 4.If no error, render location and forecast
* 5.Test your work! Search for errors and for valid location


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

//messageOne.textContent ='from Javascript';
weatherForm.addEventListener('submit', (e) =>{
    const location = search.value
    e.preventDefault()
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address='+location).then((response) =>{
    response.json().then((data) =>{
        if(data.error){
            //return console.log(data.error)
            messageOne.textContent = data.error
        }else{
            // console.log(data.location)        
            // console.log(data.forecast)
        
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast        
        }
    })
})
})

*/

/************************
* 9. Application Deployment (Weather App)
* 8. Deploying Node.js to Heroku
*/

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) =>{
    const location = search.value
    e.preventDefault()
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address='+location).then((response) =>{
    response.json().then((data) =>{
        if(data.error){
            messageOne.textContent = data.error
        }else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast        
        }
    })
})
})