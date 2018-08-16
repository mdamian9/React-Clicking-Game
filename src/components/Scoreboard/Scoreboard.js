import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (
    <div className="jumbotron">
        <h1>Rick and Morty Characters Memory Game</h1>
        <p>Matches: {props.matches}</p>
        <p>Number of Guesses: {props.guesses}</p>
        <p>Click on a character and try to remember it!</p>
    </div>
);

export default Scoreboard;