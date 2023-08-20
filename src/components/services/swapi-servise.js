export default class SwapiService {
    _apiBase = 'https://swapi.dev/api/';

    async getRequest(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}${url}, received ${res.status}`)
        }
        return res.json();
    }

    async getAllPeople() {
        const people = await this.getRequest('people/');
        return people.results.map(this._transformPerson)
    }

    async getPerson(id) {
        const person = await this.getRequest(`people/${id}`)
        return this._transformPerson(person);
    }
    async getPlanet(id) {
        const planet = await this.getRequest(`planets/${id}`);
        return this._transformPlanet(planet);
    }
    async getAllPlanets() {
        const planets = await this.getRequest(`planets/`);
        return planets.result.map(this._transformPlanet);
    }

    _extractId = (item) => {
        const idRegExp = /\/(\d+)\/?$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {

        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotatePeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    }

    _transformStarShip = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity,
        }
    }


    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
}