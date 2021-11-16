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
const { response } = require('express');
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
         projectData["cityName"] = await req.body.cityName;
         projectData["departDate"] = await req.body.departDate;

        //Send user input to Geonames service and get weather data back
        getWeatherData(projectData["cityName"], projectData["departDate"])
        .then(()=>{

            //Send endpoint data to client side
            res.send(projectData);
        })
    }catch(error){
        console.log("error", error);
    }
})

//Send data back to client side
app.get('/get', (request, response)=>{
    response.send(projectData);
})

// Function to retrieve weather data
const getWeatherData = async (cityName, departDate) =>{

    //Retrieve coordinates from Geonames api
    const response = await fetch(`http://api.geonames.org/searchJSON?q=${cityName}&maxRows=10&username=${process.env.API_USERNAME}`)
    try {
        const data = await response.json();
        const lat = data.geonames[0].lat;
        const lon = data.geonames[0].lng;
        const countryName = data.geonames[0].countryName;
        projectData["latitude"] = lat;
        projectData["longitude"] = lon;
        projectData["countryName"] = countryName;

        //Calculate date difference 
        const dateDifference = calculateDateDifference(departDate);
        projectData["dateGap"] = dateDifference;

        if(dateDifference < 8) {
            
        //Use coordinates to retrieve current weather data from wheatherbit
        const WeatherResults = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${process.env.WEATHER_API_KEY}&include=minutely`)
        
        //Save weather data to server endpoint
        saveWeatherData(WeatherResults);

        //Get and save city image link
        const imageLink = await getImageData(cityName, countryName);
        projectData["imageLink"] = imageLink;
        console.log(projectData);
        } else{

        //Use coordinates to retrieve forecast data from wheatherbit
        const WeatherResults = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${process.env.WEATHER_API_KEY}`)
        
        //Save weather data to server endpoint
        saveWeatherData(WeatherResults);

        //Get and save city image link
        const imageLink = await getImageData(cityName, countryName);
        projectData["imageLink"] = imageLink;
        console.log(projectData);
        }
    }catch(error){
        console.log("error", error);
    }
}

//Function to calculate date difference
 function calculateDateDifference(futureDate){

    //Convert date into millisecs
     let current = Date.parse(new Date());
     let future =Date.parse(futureDate);
     let dateDifference = (future - current) / (1000 * 3600 * 24);
     return Math.round(dateDifference)
 }

 //Function to save weather data
 async function saveWeatherData(data){
    let newData = await data.json();

    //Save weather data to the server endpoint
    projectData["temp"] = await newData.data[0].temp;
    projectData["des"] = await newData.data[0].weather.description;
 }

 //Function to call Pixabay API
 async function getImageData(cityName, countryName){

    //Use city name and country name to get image from Pixabay service
    let ImageResults = await fetch(`https://pixabay.com/api/?key=${process.env.IMAGE_API_KEY}&q=${cityName}+city+${projectData["countryName"]}&image_type=photo`)
    let ImageResult = await ImageResults.json();
    
    //No results returned then just use the default image link
    if(ImageResult.total == 0){
        let imageLink = 'https://pixabay.com/get/g7697f0ba607f4270e247639dff78845406f1f6887910db18155c235f38912a432217819490962bbfaefa30ad128f0ec7c952cce4d5358b2fd88d8930b6028e70_640.jpg';
        return imageLink;
    } else{

        //Return the first element of results
        let imageLink = await ImageResult.hits[0].webformatURL;
        return imageLink;
    }
 }