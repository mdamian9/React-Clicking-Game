import React, { Component } from "react";
import Scoreboard from "../Scoreboard"
import Card from "../Card"
import cards from "../../cards.json";

class Game extends Component {

    state = {
        characters: cards,
        matches: 0,
        guesses: 0,
        matchedCharacter: 9
    }

    getCharacter = (id) => {
        if (id === this.state.matchedCharacter) {
            // If character is a match, update matches state by 1, pick a new random character
            let randomId = Math.floor(Math.random() * this.state.characters.length) + 1;
            this.setState({
                matches: this.state.matches + 1,
                matchedCharacter: randomId
            });
        } else {
            // If not a match, update guesses state by 1
            this.setState({
                guesses: this.state.guesses + 1
            });
        };
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