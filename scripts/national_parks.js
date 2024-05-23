"use strict"

window.onload = () => {

    initLocationDropdown();
    initTypeDropDown();

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

function initTypeDropDown(){
    let typeDropdown = document.querySelector("#stateOptions");
    // creating the default function
    let defaultOption = document.createElement("option");
    defaultOption.value ="";
    defaultOption.textContent ="Select a type";
    typeDropdown.appendChild(defaultOption);

    // looping through the parksArray 
    parkTypesArray.forEach((type)=>{
        let newOption = document.createElement("option");
        newOption.value = type;
        newOption.textContent = type;
        typeDropdown.appendChild(newOption);
    });
}



function getLocation(event) {

    // 
    let selectedlocation = event.target.value;
    // created a variable to hold the table and grabing the id form the html page
    let tablebody = document.querySelector("#locationTableBody");
    // to clear it after every click
    tablebody.innerHTML = "";

    // Its going through the nationalParksArray and filtering out the 
    let matchingData = nationalParksArray.filter((item) => {
        if(document.querySelector("#location").checked){

            return item.State === selectedlocation;
        }else if (document.querySelector("#type").checked){
            let parkType =item.LocationName.toLowerCase();
            return parkType.includes(selectedlocation.toLowerCase());

        }
        

    });
    matchingData.forEach((data)=>{
        buildTableRow(tablebody,data);
    });
    

    // creating the cells for the table
    function buildTableRow(tableBody, data) {

        let row = tableBody.insertRow(-1);
        // grabing the location Id from the data
        let cell1 = row.insertCell(0);
        cell1.innerText = `${data.LocationID}`;
        // grabing the LocationName
        let cell2 = row.insertCell(1);
        cell2.innerText = data.LocationName;

        let cell3 = row.insertCell(2);
        cell3.innerText = `${data.Address}, ${data.City}, ${data.State}, ${data.ZipCode}`;

        let cell4 = row.insertCell(3);
        cell4.innerText = `${data.Phone}, Fax:${data.Fax}`;

        let cell5 = row.insertCell(4);
        cell5.innerText =data.Visit ? `<a href="${data.Visit}">Visit</a>`:"";


    }
   

}




function initLocationDropdown() {

    let locationsDropdown = document.querySelector("#stateOptions");
    let typeDropdown = document.querySelector("#stateOptions");

    let defaultOption = document.createElement("option");
    // clearing the previos option
    defaultOption.value = "";
    defaultOption.textContent = "Select a State";


    locationsDropdown.appendChild(defaultOption);


    let placeholder = document.createElement("newOptions");
    placeholder.value = "";
    placeholder.textContent = "Select a type";

    typeDropdown.appendChild(placeholder);

    // looping through locationArray
    locationsArray.forEach((State) => {
        let option = document.createElement("option");
        option.value = State;
        option.textContent = State;
        locationsDropdown.appendChild(option);
    });
    // looping throught the parkArray
    parkTypesArray.forEach((name) => {
        let newOption = document.createElement("newOption");
        newOption.value = name;
        newOption.textContent = name;
        typeDropdown.appendChild(newOption);


    });


}

function selectOptions() {
    console.log("selcted function");
    console.log("Location radio checked:", document.querySelector("#location").checked);


    // calling the dropdown by the by the id 
    let locationOptions = document.querySelector("#stateOptions");
    // clearing 
    locationOptions.innerHTML = "";


    // doing an if and else if statment to dynamically populate the dropdown list by either location or type 
    // based on the radio button it was cliked on giving the options it matches with.
    if (document.querySelector("#location").checked) {
        console.log("Location radio")


        locationsArray.forEach((location) => {
            let option = document.createElement("option");
            option.textContent = location;
            locationOptions.appendChild(option);
        });

    } else if (document.querySelector("#type").checked) {
        console.log("type radio");

        parkTypesArray.forEach((type) => {
            let option = document.createElement("option");
            option.textContent = type;
            locationOptions.appendChild(option);
        });

    }

}









