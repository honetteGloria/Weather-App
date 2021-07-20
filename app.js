//get the longitude and latitude for the specific location
window.addEventListener('load', ()=>{
    //define the coordinate
    let long;
    let lat;

    if(navigator.geolocation){
        //find the exact position of the user
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
        });
    }else{

    }
});