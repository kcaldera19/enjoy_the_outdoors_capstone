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
    let mountain = mountainsArray.find((mountain)=>mountain.name === event.target.value);

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card","w-25");

    let cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top", "car-img-fity");

    let imagePath="images/"+ mountain.img;

    console.log(imagePath);

    // need to src properly
    cardImage.src=imagePath;
    
    cardImage.alt = mountain.name;

    cardDiv.appendChild(cardImage);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");

    cardTitle.innerHTML = mountain.name;

    cardBody.appendChild(cardTitle);

    let cardText = document.createElement("p");
    cardTitle.classList.add("card-text");

    cardText.innerHTML = `${mountain.name} has an elevation of ${mountain.elevation} effort:${mountain.effort} description${mountain.desc} ${mountain.coords}`

    cardBody.appendChild(cardText);

    cardDiv.appendChild(cardBody);

    mountainDiv.appendChild(cardDiv);



}


// the dropdown
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
console.log(mountainsArray);
