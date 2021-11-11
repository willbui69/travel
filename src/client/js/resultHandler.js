async function insertServerData() {
    //Get serverdata results
    const serverData = await getData('/get');

    //Update the UI
    document.getElementById('result-image').innerHTML = `<img style="width: 100vw; height: 30vh;" src="${serverData.imageLink}" alt="${serverData.cityName} city">`
    document.getElementById('result-destination').innerHTML = `<p style="font-family:'Times New Roman'; font-size: 24px; color: white;"><b>My trip to: ${serverData.cityName}<br>
                                                               Departing: ${serverData.departDate} </b></p>`
    document.getElementById('result-dategap').innerHTML = `<p style="font-family:'Times New Roman'; font-size: 20px; color: white;">${serverData.cityName}, ${serverData.countryName} is ${serverData.dateGap} days away</p>`
    document.getElementById('result-weather').innerHTML = `<p style="font-family:'Times New Roman'; font-size: 20px; color: white;">Typical weather for then is:<br>
                                                            <span style="font-family:'Times New Roman'; font-size: 18px; color: white;">Temperature: ${serverData.temp}</span><br>
                                                            <span style="font-family:'Times New Roman'; font-size: 18px; color: white;">${serverData.des} throughout the day</span></p>`
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