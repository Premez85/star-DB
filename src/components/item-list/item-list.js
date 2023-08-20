import React, {Component} from "react";
import './item-list.css';
import SwapiService from "../services/swapi-servise";
import Spiner from "../spiner";

export default class ItemList extends Component {
    state = {
        itemList: null,

    }

    swapi = new SwapiService();

    componentDidMount() {
        const type = this.props.type;
        this.setState({
            type
        })
        switch (this.state.type) {
            case 'people':
                this.swapi.getAllPeople()
                    .then((peopleList) => {
                        this.setState({
                            peopleList
                        })
                    });
                break;
            case 'planets':
                this.swapi.getAllPlanets()
                    .then((planetList) => {
                        this.setState({
                            planetList
                        })
                    });
                break;
        }

    }


    render() {
        const {peopleList} = this.state;
        const onItemClick = this.props.onItemClick;
        if(!peopleList) {
            return <Spiner/>
        }

        const peopleNameList = peopleList.map((person) => {
            return <li
                key={person.id}
                className='item-list__item'
                onClick={() => onItemClick(person)}
            >
                {person.name}
            </li>;
        })

        return (
            <ul className="item-list">
                {peopleNameList}
            </ul>
        );
    }
}
