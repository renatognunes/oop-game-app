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
        const letter = document.getElementsByClassName('letter');
        for(let i = 0; i < lis.length; i ++) {
            if(letter[i].classList.contains('hide')) {
                return false
            }
        }
        return true
    };

    /**
        * Increases the value of the missed property
        * Removes a life from the scoreboard
        * Checks if player has remaining lives and ends game if player is out
        */
    removeLife() { 
        //replace the image red heart to grey heart
        const tries = document.getElementsByClassName('tries')[this.missed];
        tries.firstChild.src = "images/lostHeart.png";
        //add a missed 1
        this.missed += 1;
        //condition if the player has 5 missed, call gameOver()
        if(this.missed === 5) {
            this.gameOver(false)
        }; 
    };

    /**
        * Displays game over message
        * @param {boolean} gameWon - Whether or not the user won the game
        */
    gameOver(gameWon) { 
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'block';
        const message = document.getElementById('game-over-message');
        if(gameWon) {
            message.textContent = "Great job!";
        } else {
            message.textContent = "Sorry, better luck next time!";
        }
    };
}