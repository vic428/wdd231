import { places } from "../data/places.mjs";
console.log(places)

const showHere = document.querySelector("#allplaces")

//------------ loop through the array of json items 
function displayItems(places){
    places.forEach(x => {
        //card element
        const thecard = document.createElement('div')
        //build the photo element 
        const thephoto = document.createElement('img')
        thephoto.src = `images/${x.photo_url}`
        thephoto.alt = x.name
        thecard.appendChild(thephoto)
        //build the title element 
        const thetitle = document.createElement('h2')
        thetitle.innerText = x.name
        thecard.appendChild(thetitle)
        //build the address element
        const theaddress = document.createElement('address')
        theaddress.innerText = x.address
        thecard.appendChild(theaddress)
        //build the description element
        const thedesc = document.createElement('p')
        thedesc.innerText = x.description
        thecard.appendChild(thedesc)

        showHere.appendChild(thecard)

    }) // ends the loop

}// ends the function

displayItems(places)