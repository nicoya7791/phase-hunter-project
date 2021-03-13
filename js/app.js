/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = '';
const startButton = document.querySelector('#btn__reset');
const keysContainer = document.querySelector('#qwerty')
const keyArray = document.querySelectorAll('.key');

// this event create a new game and starts the game
startButton.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
})

// if the letter that was clicked match the phrase letter, call handleinteraction function 

keysContainer.addEventListener('click', (e) => {
    const button = e.target;
    if (button.tagName === 'BUTTON') {
        game.handleInteraction(button);
    }
});

// if the that was press match the letter in the phrase, the handleinteracton method is call and the letter button element is passed.

document.addEventListener('keyup', (e) => {
    const button = e.key;
    keyArray.forEach(key => {
        if (key.textContent === button) {
            game.handleInteraction(key);
        }
    })

});
