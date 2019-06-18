/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    };
    createPhrases() {
        return [
            { phrase: 'Life is good' },
            { phrase: 'Keep Working' },
            { phrase: 'You can do it' },
            { phrase: 'Have a nice day' },
            { phrase: 'Thank you' }
        ]
    };

    getRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * 5);
        return this.phrases[randomIndex];
    };

    startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';

        const randomPhrase = this.getRandomPhrase();
        this.activePhrase = randomPhrase.phrase;

        const phrase = new Phrase(randomPhrase.phrase);
        phrase.addPhraseToDisplay();
    }

    handleInteraction() {
    };

    /**
        * Checks for winning move
        * @return {boolean} True if game has been won, false if game wasn't
        won
        */
    checkForWin() { 

    };

    /**
        * Increases the value of the missed property
        * Removes a life from the scoreboard
        * Checks if player has remaining lives and ends game if player is out
        */
    removeLife() { 

    };

    /**
        * Displays game over message
        * @param {boolean} gameWon - Whether or not the user won the game
        */
    gameOver(gameWon) { 

    };
}