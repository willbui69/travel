async function handleSubmit(event){
    event.preventDefault();

    //Get user input as city name and departing date
    let cityName = document.getElementById('destination').value;
    let startDate = document.getElementById('startdate').value;
    let endDate = document.getElementById('enddate').value;
    
    //Check the city and start date input are valid
    cityName = Client.checkForCityInput(cityName);
    startDate = Client.checkForStartDate(startDate);

    //Ensure city and start date input not empty
    if(!cityName) {
        alert('Please type your favorite destination!');
    } else if(!startDate) {
        alert('Please type your plan date or make sure the date not in the past!')
    }
    //Ensure if user provide end date then end date must follow by start date
     else if(endDate && (startDate >= endDate)){
        alert('Your return date must follow the depart date!');
        return false
    } else{
        //If input valid then post and get data to/from server
        try {
            //Post user input to the server side
            const serverData = await postUserData('/post', {cityName: cityName, startDate: startDate, endDate: endDate})

            //Check if no location found by Geonames service
            if(typeof(serverData.latitude) == 'undefined' || typeof(serverData.longitude) == 'undefined'){
                alert('Please check your city spelling!');
                return false
            } else{
                //Redirect the index page to result.html
                window.location.replace("http://localhost:3000/result.html");
            }
    
        }catch(error){
            console.log("error", error);
        }
    }
}

const postUserData = async (url='', data = {}) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
    })
    try {
        const serverData = await response.json();
        console.log(serverData);
        return serverData
    }catch(error) {
        console.log("error", error);
    }
}

export { handleSubmit }