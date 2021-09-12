import React from 'react';
import ReactDOM from 'react-dom';

const Welcome = ((props) => {
    return (
        <div>
        <h4>Welcome to my site, {props.firstName}!</h4>
        <h4>{props.lastName}</h4>
        </div>
    )

});

const App = (() => {
    const nameArray = ["Chris", "Jane", "BillyBob", "JoeyJoeJoe", "Hilary"]
    const nameMapper = (() => 
        nameArray.map((name, i) => 
                    <li key={i}>{name}</li>
        )
    );

    const redBackground = {
        'backgroundColor': 'red',
        'font-size': '2em'
    }
    return (
        <div style={redBackground}>
            <Welcome firstName="Elijah" lastName="Hawk"/>
            <ul>
               {nameMapper()}
            </ul>
            <Welcome firstName="Chris" lastName="Doe"/>
        </div>
    )
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);