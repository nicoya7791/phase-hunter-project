/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = '';
const startButton = document.querySelector('#btn__reset');

startButton.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
    console.log('btn clicked');
})










//***********test code begin*********************************


// const phraseToDisplay = game.getRandomPhrase();
// const phrase = new Phrase(phraseToDisplay.phrase);
// phrase.addPhraseToDisplay();
// console.log(phrase);

//******************end test code*****************************************