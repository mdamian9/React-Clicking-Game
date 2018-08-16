import React, { Component } from "react";
import cards from "../../cards.json";

class Game extends Component {

    state = {
        characters: cards
    };

    render() {
        return (
            <div>
                {this.state.characters.map(character => (
                    <p>
                        {character.name}
                    </p>
                ))}
            </div>
        );
    };
};

export default Game;