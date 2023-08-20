import React, {Component} from "react";
import './people-page.css';

import ItemList from "../item-list";
import PersonDetails from "../person-details";
import Spiner from "../spiner";

export default class PeoplePage extends Component {
    state = {
        hasError: false,
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
        const {onItemClick, person, type} = this.props

        if(this.state.hasError) {
            return <Spiner/>
        }
        return (
         <>
                <ItemList
                    onItemClick={onItemClick}
                    type={type}
                />
                <PersonDetails person={person}/>
            </>
        );
    }
}