"use strict"


window.onload = () => {
    initMountainDropdown();
    let mountainDropdown = document.querySelector("#selectMountains");
    mountainDropdown.addEventListener("change",displayMountainCard)

    /*
    You can remove the following console.log() lines.
    They are here to verify that we have access to the data
    The data script files are located in the scripts/data directory
*/

    //log the mountainsArray to the console (scripts/data/mountainData.js)
    


}
function displayMountainCard(event){
    let mountainDiv = document.querySelector("#mountainSelected");
    mountainDiv.innerHTML = "";
    let mountain = mountainsArray.find((mountain)=>mountainsArray.name === event.target.value);
    

}
function initMountainDropdown(){
    let mountainDropdown = document.querySelector("#selectMountains");

    let defaultOption = document.createElement("option");
    defaultOption.value="";

    defaultOption.textContent="Select a Mountain";
    mountainDropdown.appendChild(defaultOption);

    mountainsArray.forEach((mountain)=>{
        let newOption = document.createElement("option");

        newOption.value = mountain.name;

        newOption.textContent = mountain.name;

        mountainDropdown.appendChild(newOption);
    })


}
