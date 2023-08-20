import React, {Component} from "react";
import './app.css'

import Header from "../header";
import RandomPlanet from "../random-planet";
import PlanetPage from "../planet-page";
import PeoplePage from "../people-page";

export default class App extends Component {
    state = {
        itemData: null,
    }

    onItemClick = (itemData) => {
        this.setState({
            itemData
        })
    }


    render() {
        return (
            <div className='app'>
                <Header/>
                <RandomPlanet/>
                <PeoplePage
                    type={'people'}
                    onItemClick={this.onItemClick}
                    person={this.state.itemData}
                />
                <PlanetPage
                    type={'planets'}
                    onItemClick={this.onItemClick}
                    person={this.state.itemData}
                />
            </div>
        );
    }
}
