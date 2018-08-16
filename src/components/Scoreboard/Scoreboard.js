import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (
    <div className="jumbotron" style={{marginTop: 2 + 'em'}}>
        <h1>Rick and Morty Characters Memory Game</h1>
        <p>Score: {props.score}</p>
        <p>Click on a character and try to remember it!</p>
    </div>
);

export default Scoreboard;