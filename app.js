//get the longitude and latitude for the specific location
window.addEventListener('load', ()=>{
    //define the coordinate
    let long;
    let lat;

    if(navigator.geolocation){
        //find the exact position of the user
        navigator.geolocation.getCurrentPosition(position => {
            //console.log(position); texting
            //get the coordinates
            long = position.coords.longitude;
            lat = position.coords.latitude;
            //get the weather information from tomorrow API-- it's free 
            //designed for developers and relied on by successfull companies like Uber, ws, Google Cloud
            /*the free feature allows:
                500 Calls / per day, 5 Calls / per hour, 3 Calls / per second, 48 hrs historical data access
                Current weather data, Hourly + Minutely, 3 days forecast, Core data layers, Air Quality, 100 calls rate limit
                Pollen, 5% of rate limit, Solar, 5% of rate limit, Land, 5% of rate limit, Tiles, Community support
                */

            const api = `curl --request GET --url \
            'https://api.tomorrow.io/v4/timelines?location=${lat},${long}&fields=temperature&timesteps=1h&units=metric&apikey=a61O9G4FDaGWUea6RJtvGMQcf9sOYgwS'`;
        });
        //get information from the tomorrow's API
        fetch(api)
        //after fecthing the information then use the data
            .then(response =>{
                //take the response and convert it to json
                return response.json();
            })
            .then(data =>{
                HTMLFormControlsCollection.log(data);
            })
    }
});