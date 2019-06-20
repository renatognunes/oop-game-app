/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


/**
 * Listening for a click in the start game button.
 * Creates a new game object by calling Game class.
 * Starts the game by invoking startGame method.
 */
let game;
const button = document.getElementById('btn__reset');
button.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

/**
 * Listening for a click in the virtual keyboard.
 * Invoke game object method if conditional returns true.
 */
const keyBoard = document.getElementById('qwerty');
keyBoard.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
});

/**
 * Listening for the physical keyboard.
 * If pressed key is found in the phrase and is not disabled, invoke game object method.
 * If presses key is not found in the phrase or is already disabled, return false.
 */
document.addEventListener('keydown', (event) => {
    const key = document.getElementsByClassName('key');
    for (let i = 0; i < key.length; i++) {
        if (event.key === key[i].textContent) {
            if (key[i].disabled === true) {
                return false
            } else {
                game.handleInteraction(key[i]);
            }
        }
    }
});
