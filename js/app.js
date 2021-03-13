/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = '';
const startButton = document.querySelector('#btn__reset');
const keysContainer = document.querySelector('#qwerty')
const keyArray = document.querySelectorAll('.key');


startButton.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
})

keysContainer.addEventListener('click', (e) => {
    const button = e.target;
    if (button.tagName === 'BUTTON') {
        game.handleInteraction(button);
    }
});
document.addEventListener('keyup', (e) => {
    const button = e.key;
    keyArray.forEach(key => {
        if (key.textContent === button) {
            game.handleInteraction(key);
        }
    })

});










//***********test code begin*********************************



// const phraseToDisplay = game.getRandomPhrase();
// const phrase = new Phrase(phraseToDisplay.phrase);
// phrase.addPhraseToDisplay();
// console.log(phrase);

//******************end test code*****************************************