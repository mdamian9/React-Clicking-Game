import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (
    <div className="jumbotron text-center" style={{marginTop: 2 + 'em'}}>
        <h1><b>Rick and Morty Characters Memory Game</b></h1>
        <p>Click on a character and try to remember it!</p>
        <p>Try to click on all characters without clicking on the same on twice!</p>
        <p>Score: {props.score}</p>
        <p>Wins: {props.wins}</p>
        <p>Losses: {props.losses}</p>
    </div>
);

export default Scoreboard;