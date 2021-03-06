/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = '';
const startButton = document.querySelector('#btn__reset');
const buttonText = startButton.textContent;
const keysContainer = document.querySelector('#qwerty')
const keyArray = document.querySelectorAll('.key');

// this event create a new game and starts the game
startButton.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
    // calling keyup listener here stops bug that is triggered when player uses CTL+R to refresh game.
    document.addEventListener('keyup', keyListener)
})

// if the letter that was clicked match the phrase letter, call handleinteraction function 

keysContainer.addEventListener('click', (e) => {
    const button = e.target;
    if (button.tagName === 'BUTTON') {
        game.handleInteraction(button);
    }
});

/**
 * Extra credits
 * if the letter pressed match the letter in the phrase, the handleinteracton method is call and the *letter button element is passed.
 * */
const keyListener = (e) => {
    const buttonContent = e.key;
    keyArray.forEach(key => {
        if (key.textContent === buttonContent) {
            if (!key.disabled) {
                game.handleInteraction(key);
            }
        }
    })

};

// This function adds animation to scoreboard. Hearts move upwards. 

let heartsAways = (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.animate([
            //start position on Y axel
            { transform: 'translateY(0px)' },
            //end position on Y axel
            { transform: 'translateY(-800px)' }
        ], {
            // timing options
            duration: 2000,
            iterations: 2
        })
    }
}

// Event listener that calls in the heartsAways function. It must be call below the function in order to work.

document.querySelector('#scoreboard').addEventListener('mouseover', heartsAways)