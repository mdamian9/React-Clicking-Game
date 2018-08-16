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
                    <div>
                        <p>
                            {character.id}
                        </p>
                        <p>
                            {character.name}
                        </p>
                        <img alt="character">
                            {character.image}
                        </img>
                    </div>
                ))}
            </div>
        );
    };
};

export default Game;