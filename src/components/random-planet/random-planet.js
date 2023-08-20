import React, {Component} from "react";
import './random-planet.css';

import SwapiService from "../services/swapi-servise";
import Spiner from "../spiner";
import IndicatorError from "../indicator-error";

export default class RandomPlanet extends Component {
    state = {
        planet: {
            name: null,
            population: null,
            rotatePeriod: null,
            diameter: null,
            id: 2,
        },
        loading: true,
        error: false,
    }

    componentDidMount() {
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    updatePlanet = () => {
        const swapi = new SwapiService();
        const id = Math.floor(Math.random() * 17) + 2;
        swapi.getPlanet(id)
            .then((planet) => {
                this.setState(
                    {
                        planet: {...planet},
                        loading: false
                    }
                )
            })
            .catch(this.onError)
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }


        render() {
        const {planet, loading, error} = this.state;

        const spiner = (loading && !error)? <div className="random-planet random-planet--center"><Spiner/></div>: '';
        const content = (!loading && !error)? <div className="random-planet"><PlanetView planet={planet}/></div>: '';
        const errorindicatro = (!loading && error)? <div className="random-planet random-planet--center"><IndicatorError/></div>: '';

        return (
            <>
                {spiner}
                {content}
                {errorindicatro}
            </>

        )
    }
}

const PlanetView = ({planet}) => {
    const {id, name, diameter, population, rotatePeriod} = planet;
    return (
        <>
            <img className='random-planet__image'
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="random planet"/>
            <div className="random-planet__descr">
                <h3 className="random-planet__header">{name}</h3>
                <ul className="random-planet__text">
                    <li className="random-planet__item">
                        <p className="random-planet__population"><span>Population</span><b>{population}</b></p>
                    </li>
                    <li className="random-planet__item">
                        <p className="random-planet__rotation"><span>Rotation Period</span><b>{rotatePeriod}</b></p>
                    </li>
                    <li className="random-planet__item">
                        <p className="random-planet__diameter"><span>Diameter</span><b>{diameter}</b></p>
                    </li>
                </ul>
            </div>
        </>
    );
}