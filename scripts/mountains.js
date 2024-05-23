"use strict"


window.onload = () => {
    // the dropdown bar
    initMountainDropdown();
    // grabing the dropdown by the id in the html page
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

    cardText.innerHTML = `${mountain.name} has an elevation of ${mountain.elevation} effort:${mountain.effort} description${mountain.desc} `

    
   
    cardBody.appendChild(cardText);
    
    // created a variable to hold the elevation of the mountain
    let elevation = document.createElement("p");
    elevation.classList.add("card-text");
    elevation.innerHTML =`Elevation: ${mountain.elevation}`;

    // created a variable to hold the effort of the mountain
    let effort = document.createElement("p");
    effort.classList.add("card-text");
    effort.innerHTML =`Effort :${mountain.effort}`;

    let lat = document.createElement("p");
    lat.classList.add("card-text");
    lat.innerHTML = `Lat: ${mountain.coords.lat}`;

    let lng = document.createElement("p");
    lng.classList.add("card-text");
    lng.innerHTML = `Lng : ${ mountain.coords.lng}`

    

    // appending the elments
    
    cardBody.appendChild(elevation);
    cardDiv.appendChild(cardBody);

    
    mountainDiv.appendChild(cardDiv);
    cardBody.appendChild(effort);
    cardBody.appendChild(lat);
    cardBody.appendChild(lng);
   



}


// the dropdown
function initMountainDropdown(){
    let mountainDropdown = document.querySelector("#selectMountains");
    
    // creting a default option
    let defaultOption = document.createElement("option");
    // clearing the previous slection
    defaultOption.value="";
    // puting the default as slect a mountain
    defaultOption.textContent="Select a Mountain";
    mountainDropdown.appendChild(defaultOption);
    // looping through option in the mountainArray
    mountainsArray.forEach((mountain)=>{
        let newOption = document.createElement("option");

        newOption.value = mountain.name;

        newOption.textContent = mountain.name;

        mountainDropdown.appendChild(newOption);
    })


}
console.log(mountainsArray);
