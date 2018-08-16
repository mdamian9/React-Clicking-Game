import React, { Component } from "react";
import Scoreboard from "../Scoreboard"
import Card from "../Card"
import cards from "../../cards.json";

class Game extends Component {

    state = {
        characters: cards,
        score: 0,
        idArray: []
    };

    matchCharacter = (id) => {

        if (this.state.idArray.includes(id)) {
            this.setState({
                score: 0,
                idArray: []
            });
        } else {
            this.setState({
                score: this.state.score + 1
            });
            this.state.idArray.push(id);
        };
    };

    render() {
        return (
            <div className="container">
                <Scoreboard
                    score={this.state.score}
                />
                <div className="row">
                    {this.state.characters.map(character => (
                        <Card
                            key={character.id}
                            id={character.id}
                            name={character.name}
                            image={character.image}
                            matchCharacter={this.matchCharacter}
                        />
                    ))}
                </div>
            </div>
        );
    };
};

export default Game;