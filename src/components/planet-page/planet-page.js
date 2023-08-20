import React, {Component} from "react";
import './planet-page.css';

import ItemList from "../item-list";
import PersonDetails from "../person-details";
import Spiner from "../spiner";

export default class PlanetPage extends Component {
    state = {
        hasError: false,
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
        const {onItemClick, planet, type} = this.props

        if(this.state.hasError) {
            return <Spiner/>
        }
        return (
            <>
                <ItemList
                    onItemClick={onItemClick}
                    type={type}
                />
                <PersonDetails person={planet}/>
            </>
        );
    }
}