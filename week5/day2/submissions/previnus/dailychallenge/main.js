/* Exercise Brief
In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
We will provide the HTML page.
You only have to work with a JS file.
Create an array which value is the planets of the solar system.
For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
Finally append each div to the <section> in the HTML (presented below).
Bonus: Do the same process to create the moons.
Be careful, each planet has a certain amount of moons. How should you display them?
Should you still use an array for the planets ? Or an array of objects ?
*/

/* let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
function addDiv(planetName){
    let domEl = document.createElement("div");
    domEl.classList.add(planetName, 'planet')
    document.querySelector('.listPlanets').appendChild(domEl)
}
for (const itr of planets) {
    console.log(itr)
    addDiv(itr)
    
    if(itr === 'Mercury'){
        document.querySelector('.Mercury').style.backgroundColor = 'grey'
    }else if(itr === 'Venus'){
        document.querySelector('.Venus').style.backgroundColor = 'brown'
    }else if(itr === 'Earth'){
        document.querySelector('.Earth').style.backgroundColor = 'blue'
    }else if(itr === 'Mars'){
        document.querySelector('.Mars').style.backgroundColor = 'red'
    }else if(itr === 'Jupiter'){
        document.querySelector('.Jupiter').style.backgroundColor = 'white'
    }else if(itr === 'Saturn'){
        document.querySelector('.Saturn').style.backgroundColor = 'orange'
    }else if(itr === 'Uranus'){
        document.querySelector('.Uranus').style.backgroundColor = 'green'
    }else if(itr === 'Neptune'){
        document.querySelector('.Neptune').style.backgroundColor = 'darkblue'
    }
}
 */


/* Bonus */

let solarSystem = [
    {
        planetName: "Mercury",
        noOfMoons: 0,
        color: "grey"
    }, {
        planetName: "Venus",
        noOfMoons: 0,
        color: "brown"
    }, {
        planetName: "Earth",
        noOfMoons: 1,
        color: "blue"
    }, {
        planetName: "Mars",
        noOfMoons: 2,
        color: "red"
    }, {
        planetName: "Jupiter",
        noOfMoons: 92,
        color: "white"
    }, {
        planetName: "Saturn",
        noOfMoons: 83,
        color: "yellow"
    }, {
        planetName: "Uranus",
        noOfMoons: 27,
        color: "green"
    }, {
        planetName: "Neptune",
        noOfMoons: 14,
        color: "darkblue"
    }]

function addPlanet(planetName, color) {
    let domEl = document.createElement("div");
    domEl.classList.add('planet', planetName.toLowerCase())
    domEl.style.backgroundColor = color
    document.querySelector('.listPlanets').appendChild(domEl)
}

const addMoon = (planetName, color, px) => {
    let moonEl = document.createElement("div");
    moonEl.classList.add('moon')
    moonEl.style.borderColor = color
    moonEl.style.backgroundColor = "black"
    moonEl.style.left = px + "px"
    document.querySelector('.' + planetName.toLowerCase()).appendChild(moonEl)
}

for (const itr in solarSystem) {
    let solarItr = solarSystem[itr]
    let planetName = solarItr.planetName
    let color = solarItr.color
    let moons = solarItr.noOfMoons

    // planets
    addPlanet(planetName, color)

    // get moons
    for (let i = 1; i <= moons; i++) {
        let px = 100 + (i * 30)
        addMoon(planetName, color, px)
    }
}
//console.log(addDiv("earth"))