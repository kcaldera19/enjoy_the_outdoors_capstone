"use strict"

window.onload = () => {

    // grabed the radio by id from html
    let locationRadio = document.querySelector("#location");
    let typeRadio = document.querySelector("#type");

    locationRadio.addEventListener("change", selectOptions);
    typeRadio.addEventListener("change", selectOptions);
    


 
}
function selectOptions(){

   let locationOptions = document.querySelector("#options");
   locationOptions.innerHTML =""

   if(document.querySelector("#location").checked){
    let locations = locationsArray;

    locations.forEach((location)=>{
        let option = document.createElement("option");
        option.textContent = location;
        locationOptions.appendChild(option);
    });
   }else if(document.querySelector("#type").checked){

   }

        
}



 



/*
        You can remove the following console.log() lines.
        They are here to verify that we have access to the data
        The data script files are located in the scripts/data directory
    */

    //log the locationsArray to the console (scripts/data/locationData.js)
    console.log(locationsArray)

    //log the parkTypesArray to the console (scripts/data/parkTypeData.js)
    console.log(parkTypesArray)

    //log the nationalParksArray to the console (scripts/data/nationalParkData.js)
    console.log(nationalParksArray)