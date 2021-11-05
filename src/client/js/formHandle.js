async function handleSubmit(event){
    event.preventDefault();

    //Get user input as city name
    const cityName = document.getElementById('destination').value;

    //Check the city as a valid name
    Client.checkForInput(cityName);

    try {
        //Post user input to the server side
        const temp = postUserData('/post', {userInput: cityName})

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
        console.log('Data posted');
    }catch(error) {
        console.log("error", error);
    }
}

export { handleSubmit }