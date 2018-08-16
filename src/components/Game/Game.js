import React, { Component } from "react";
import Scoreboard from "../Scoreboard"
import Card from "../Card"
import cards from "../../cards.json";

class Game extends Component {

    state = {
        characters: cards
    };

    render() {
        return (
            <div className="container">
                <Scoreboard
                    matches={this.state.matches}
                    guesses={this.state.guesses}
                />
                <div className="row">
                    {this.state.characters.map(character => (
                        <Card
                            key={character.id}
                            id={character.id}
                            name={character.name}
                            image={character.image}
                            getCharacter={this.getCharacter}
                        />
                    ))}
                </div>
            </div>
        );
    };
};

export default Game;