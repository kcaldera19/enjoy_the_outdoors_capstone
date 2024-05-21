"use strict"

window.onload = () => {

    initLocationDropdown();

    // grabed the radio by id from html for location option
    let locationRadio = document.querySelector("#location");

    // grabed the id for the radio type option
    let typeRadio = document.querySelector("#type");

    // grabing the dropdown by the id from html page
    let stateDropdown = document.querySelector("#stateOptions");

    // listening for a change by using addeventListener
    locationRadio.addEventListener("change", selectOptions);

    typeRadio.addEventListener("change", selectOptions);

    stateDropdown.addEventListener("change", getLocation);
    




}


function getLocation(event) {

    // 
    let selectedlocation = event.target.value;
    // created a variable to hold the table and grabing the id form the html page
    let tablebody = document.querySelector("#locationTableBody");
    // to clear it after every click
    tablebody.innerHTML = "";

    // Its going through the nationalParksArray and filtering out the 
    let matchingLocation = nationalParksArray.filter((stateLocation) => {
        return stateLocation.State === selectedlocation;

    });
   

    // to loop through the ones that match the state on the locationArray and the state on nationalparksArray
    matchingLocation.forEach((stateLocation) => {
        buildTableRow(tablebody, stateLocation);
    })

    // to have a table dispalay
    function buildTableRow(tableBody, stateLocation) {

        let row = tableBody.insertRow(-1);

        let cell1 = row.insertCell(0);
        cell1.innerText = stateLocation.LocationID;

        let cell2 = row.insertCell(1);
        cell2.innerText = stateLocation.LocationName;

        let cell3 = row.insertCell(2);
        cell3.innerText = `${stateLocation.Address}, ${stateLocation.City}, ${stateLocation.State}, ${stateLocation.ZipCode}`;

        let cell4 = row.insertCell(3);
        cell4.innerText = stateLocation.Phone;

        let cell5 = row.insertCell(4);
        cell5.innerText = stateLocation.Visit ? `<a href="${stateLocation.Visit}">Visit</a>`:"";


    }
   
}
console.log(getLocation);


function initLocationDropdown() {
    let locationsDropdown = document.querySelector("#stateOptions");
    let defaultOption = document.createElement("option")
    defaultOption.value = "";
    defaultOption.textContent = "Select a State";

    locationsDropdown.appendChild(defaultOption);



    locationsArray.forEach((State) => {
        let option = document.createElement("option");
        option.value = State;
        option.textContent = State;
        locationsDropdown.appendChild(option);
    })
}

function selectOptions() {
    console.log("selcted function");
    console.log("Location radio checked:", document.querySelector("#location").checked);



    let locationOptions = document.querySelector("#stateOptions");
    locationOptions.innerHTML = "";

    if (document.querySelector("#location").checked) {
        console.log("Location radio")


        locationsArray.forEach((location) => {
            let option = document.createElement("option");
            option.textContent = location;
            locationOptions.appendChild(option);
        });

    } else {
        console.log("type radio Button");
    }

}









/*
        You can remove the following console.log() lines.
        They are here to verify that we have access to the data
        The data script files are located in the scripts/data directory
    */

//log the locationsArray to the console (scripts/data/locationData.js)
// console.log(locationsArray)

// //log the parkTypesArray to the console (scripts/data/parkTypeData.js)
// console.log(parkTypesArray)

// //log the nationalParksArray to the console (scripts/data/nationalParkData.js)
// console.log(nationalParksArray)