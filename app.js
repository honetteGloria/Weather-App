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
            
            /* use a CORS(Cross Orgin Resource sharing) proxy
            requests that do not come from the same origin as the hosted data will be rejected, protecting the origin source from a variety 
            of complex attacks including cross-domain scripts, redirects, and more. While this is designed to protect the end-user, 
            this proxy serves as a middleman transformative layer, allowing CORS issues to be bypassed entirely.
            it can also be a significant development blocker
            */
            
            const api = `curl --request GET --url \
            'https://api.tomorrow.io/v4/timelines?location=${lat},${long}&fields=temperature&timesteps=1h&units=metric&apikey=a61O9G4FDaGWUea6RJtvGMQcf9sOYgwS'`;

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
        });

    }
});