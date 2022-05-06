export async function getAllShips() {
    const response = await fetch(
        "https://swapi.dev/api/starships"
    );
    const payload = await response.json();
    return payload.results
}
export async function getAllPlanets() {
    const response = await fetch(
        "https://swapi.dev/api/planets"
    );
    const payload = await response.json();
    return payload.results
}
export async function getAllCharacters() {
    const response = await fetch(
        "https://swapi.dev/api/people"
    );
    const payload = await response.json();
    return payload.results
}

export async function getSinglePlanet(i) {
    const response = await fetch(
        "https://swapi.dev/api/planets/" + i 
    );
    const payload = await response.json();
    return payload
}

export async function getSingleCharacter(i) {
    const response = await fetch(
        "https://swapi.dev/api/people/" + i
    );
    const payload = await response.json();
    return payload
}