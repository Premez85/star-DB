import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from "./components/app";


const root = ReactDOM.createRoot(document.getElementById('root'));



/*const swapi = new SwapiService();
swapi.getPerson(4).then((body) => console.log(body));
swapi.getAllPeople().then((body) => console.log(body));*/

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

