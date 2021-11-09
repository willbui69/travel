async function InsertServerData() {

    //Update the UI
    document.getElementById('result-destination').innerHTML = `<p>My trip to: ${serverData.cityName}</p>`
    document.getElementById('result-depart').innerHTML = `<p>Departing: ${serverData.departDate}</p>`
}