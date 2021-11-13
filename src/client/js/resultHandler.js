async function insertServerData() {
    //Get serverdata results
    const serverData = await getData('/get');

    //Update the UI
    document.getElementById('result-destination').innerHTML = `<p>My trip to: ${serverData.cityName}, ${serverData.countryName} <br>
                                                                  Departing: ${serverData.departDate}</p>`
    document.getElementById('result-image').innerHTML = `<img style="margin: 5px;"; src="${serverData.imageLink}" alt="${serverData.cityName} city" width="450px" height="620px">`
    document.getElementById('result-dategap').innerHTML = `<p style="font-family:'Times New Roman'; font-size: 20px; color: white; margin-left: 5px;">${serverData.cityName}, ${serverData.countryName} is ${serverData.dateGap} days away</p>`
    document.getElementById('result-weather').innerHTML = `<p style="font-family:'Times New Roman'; font-size: 20px; color: white; margin-left: 5px;">Typical weather for then is:<br>
                                                            <span style="font-family:'Times New Roman'; font-size: 18px; color: white; margin-left: 5px;">Temperature: ${serverData.temp}</span><br>
                                                            <span style="font-family:'Times New Roman'; font-size: 18px; color: white; margin-left: 5px;">${serverData.des} throughout the day</span></p>`
}

const getData = async(url='')=>{
    const response = await fetch(url)
    try{
        const serverData = response.json();
        return serverData
    }catch(error) {
        console.log("error", error);
    }
}

export { insertServerData }