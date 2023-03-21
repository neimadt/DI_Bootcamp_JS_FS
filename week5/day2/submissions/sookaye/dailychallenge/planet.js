let solarSystem = {
    Mercury: { 'moons': 0, 'color': "orange" },
    Venus: { 'moons': 0, 'color': "grey" },
    Earth: { 'moons': 1, 'color': "blue" },
    Mars: { 'moons': 2, 'color': "red" },
    Jupiter: { 'moons': 67, 'color': "brown" },
    Saturn: { 'moons': 62, 'color': "yellow" },
    Uranus: { 'moons': 27, 'color': "lightblue" },
    Neptune: { 'moons': 14, 'color': "darkblue" }
}

for (let planet in solarSystem) {
    let planetDiv = document.createElement('div');
    planetDiv.classList.add('planet', planet.toLowerCase());
    let i = 1
    let moonDiv;
    while (i <= solarSystem[planet]['moons']) {
        moonDiv = document.createElement('div');
        moonDiv.classList.add('moon', planet.toLowerCase());
        let moveMoon = (90 + (i * 30)) + 'px';
        moonDiv.style.left = moveMoon;
        changeColor(planet, moonDiv);
        planetDiv.appendChild(moonDiv);
        i++
    }
    changeColor(planet, planetDiv);
    document.body.appendChild(planetDiv);
}

function changeColor(planet, planetDiv) {
    for (let planet in solarSystem) {
        if (planetDiv.className.split(' ')[1] == planet.toLowerCase()) {
            planetDiv.style.backgroundColor = solarSystem[planet]['color']
        }
    }
}