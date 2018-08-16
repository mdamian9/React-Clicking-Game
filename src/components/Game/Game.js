import React, { Component } from "react";
import Scoreboard from "../Scoreboard"
import Card from "../Card"
import cards from "../../cards.json";

class Game extends Component {

    // Setting the state of the Game component: characters is our array of card objects imported form cards.json, user score is set to 0,
    // and idArr is an array that will hold the id's of every character once they are clicked.
    state = {
        characters: cards,
        score: 0,
        idArr: []
    };

    // shuffleCards function takes in an array and shuffles the elements in the array
    shuffleCards = (charsArr) => {

        var currentIndex = charsArr.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = charsArr[currentIndex];
            charsArr[currentIndex] = charsArr[randomIndex];
            charsArr[randomIndex] = temporaryValue;
        };

        return charsArr;
    };

    // matchCharacter function is triggered each time an image of a character is clicked - it takes in an id.
    matchCharacter = (id) => {

        // If the id exists in idArr then user has already clicked that character and lost the game. Shuffle cards, clear score and idArr.
        if (this.state.idArr.includes(id)) {
            this.setState({
                characters: this.shuffleCards(cards),
                score: 0,
                idArr: []
            });
        } else {
            // If the id does not exist in idArr yet, shuffle cards, increase user score by 1, and push the id into idArr.
            this.setState({
                characters: this.shuffleCards(cards),
                score: this.state.score + 1
            });
            this.state.idArr.push(id);
        };
    };

    // Render function that will render our component.
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