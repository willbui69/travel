async function handleSubmit(event){
    event.preventDefault();

    //Get user input as city name and departing date
    let cityName = document.getElementById('destination').value;
    let departDate = document.getElementById('depart').value;

    //Check the city as a valid name
    cityName = Client.checkForInput(cityName);

    try {
        //Post user input to the server side
        const data = await postUserData('/post', {cityName: cityName, departDate: departDate})

        //Update the UI

    }catch(error){
        console.log("error", error);
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