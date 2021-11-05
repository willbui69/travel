var path = require('path')
const express = require('express')
const fetch = require('node-fetch')
const dotenv = require('dotenv')
dotenv.config();

//Data project endpoint
projectData = {};

const app = express()

app.use(express.static('dist'))

/* Middleware*/
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
console.log(__dirname)

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('The travel app listening on port 3000!')
})

//Get user input from client side
app.post('/post', async (req, res)=>{
    try{
         projectData["cityName"] = await req.body.userInput;
        //Send user input to Geonames service and get weather data back
        getWeatherData(projectData["cityName"])
        .then(()=>{
            getImageData(projectData["cityName"], projectData["country"]);
        })

    }catch(error){
        console.log("error", error);
    }
})

//Send endpoint data to client side
app.get('/get', async (req, res)=>{
    res.send(projectData);
})

// Function to retrieve weather data
const getWeatherData = async (city) =>{
    //Retrieve coordinates from Geonames api
    const response = await fetch(`http://api.geonames.org/searchJSON?q=${city}&maxRows=10&username=${process.env.API_USERNAME}`)
    try {
        const data = await response.json();
        const newdata = await data.geonames[0];
        const lat = newdata.lat;
        const lon = newdata.lng;
        const countryName = newdata.countryName;

        //Use coordinates to retrieve weather data from wheatherbit
        const results = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${process.env.WEATHER_API_KEY}&include=minutely`)
        const result = await results.json();

        //Save weather data to the server endpoint
        projectData["country"] = countryName;
        projectData["temp"] = await result.data[0].temp;
        projectData["des"] = await result.data[0].weather.description;
    }catch(error){
        console.log("error", error);
    }
}

//Function to get image data from Pixabay service
const getImageData = async (city, country) =>{
    const results = await fetch(`https://pixabay.com/api/?key=${process.env.IMAGE_API_KEY}&q=${city}+${country}+city&image_type=photo`)
    const result = await results.json();

    //Save image link to data endpoint 
    projectData["image"] = result.hits[0].webformatURL;
    console.log(projectData);

}