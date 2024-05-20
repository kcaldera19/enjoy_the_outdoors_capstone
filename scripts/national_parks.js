"use strict"

window.onload = () => {

    initLocationDropdown();

    // grabed the radio by id from html
    let locationRadio = document.querySelector("#location");
    let typeRadio = document.querySelector("#type");
    // let categoriesDropdown= document.querySelector("#locationsArray");

    locationRadio.addEventListener("change", selectOptions);
    typeRadio.addEventListener("change", selectOptions);
    // categoriesDropdown.addEventListener("change",getLocation);





}
function getLocation(event){

    let selectedlocation = event.target.value;
    let matchingLocation = nationalParksArray.filter((stateLocation)=>{
        return stateLocation.State === selectedlocation;

    })
    let tablebody = document.querySelector("#locationTableBody");

    tablebody.innerHTML="";
    matchingLocation.forEach((stateLocation)=>{
        buildTableRow(tablebody,stateLocation);
    })
}
function buildTableRow(tablebody,data){
    let newRow = tablebody.insertRow();

    for(let property in data){
        let newCell = newRow.insertCell();
        newCell.innerText = data[property];
    }

}

function initLocationDropdown(){
    let locationsDropdown = document.querySelector("#options");
    let defaultOption = document.createElement("option")
    defaultOption.value ="";
    defaultOption.textContent ="Select a State";

    locationsDropdown.appendChild(defaultOption);

    
    
    locationsArray.forEach((State)=>{
        let option = document.createElement("option");
        option.value = State;
        option.textContent = State;
        locationsDropdown.appendChild(option);
    })
}

function selectOptions() {
    console.log("selcted function");
    console.log("Location radio checked:", document.querySelector("#location").checked);
    
    

    let locationOptions = document.querySelector("#options");
    locationOptions.innerHTML = "";

    if (document.querySelector("#location").checked) {
        console.log("Location radio")
        

        locationsArray.forEach((location) => {
            let option = document.createElement("option");
            option.textContent = location;
            locationOptions.appendChild(option);
        });
        
    }else{
        console.log("type radio Button");
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