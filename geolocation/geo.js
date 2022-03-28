const status=document.getElementById("click");
const mapLink=document.getElementById("main");

function findme(){
    if(!navigator.geolocation){
        mapLink.innerHTML="Not applicable"
    }
    else{
        
        navigator.geolocation.getCurrentPosition(sucess,error)

    }

    function sucess(position){
        const lat=position.coords.latitude;
        const lon=position.coords.longitude;

      mapLink.innerHTML=`latitude ${lat} longitude ${lon}`;
    
    }
    function error(error){
        mapLink.innerHTML="sorry not allowed"
    }
}