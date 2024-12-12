console.log("Location is loaded")

export function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        x.innerHTML  = "GeoLocation is not supported by this User"
    }
}

export function showPosition(position){
    console.log(position);
}
getLocation();