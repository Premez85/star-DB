import React from "react";
import './persone-details.css';

const PersonDetails = ({person}) => {
    if(!person) {

        return;
    }

    return (
        <div className="person-details">
            <img className='person-details__img' src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`} alt="R2D2"/>
            <div className='person-details__desc'>
                <h3 className='person-details__header'>{person.name}</h3>
                <ul className="person-details__list">
                    <li>Gander<span>{person.gender}</span></li>
                    <li>Birth Year<span>{person.birthYear}</span></li>
                    <li>Eye Color<span>{person.eyeColor}</span></li>
                </ul>
            </div>
        </div>

    );
}

export default PersonDetails;