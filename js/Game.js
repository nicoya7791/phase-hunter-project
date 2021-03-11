/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
// creates a game class
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;

    };

    /**
    * Creates phrases for use in game
    * @return {array} of phrases to be used in the game
    */
    createPhrases() {
        return [new Phrase('coding challenge'),
        new Phrase('Nothing is certain but death'),
        new Phrase('Birds sing songs'),
        new Phrase('Mars is red'),
        new Phrase('Box of chocolate'),
        new Phrase('Fourth project')];
    };


    /**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
    getRandomPhrase() {
        let randomNum = Math.floor(Math.random() * this.phrases.length);
        let randomPhrase = this.phrases[randomNum];
        return randomPhrase;

    };

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */

    startGame() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        this.activePhrase = game.getRandomPhrase();
        const phrase = new Phrase(this.activePhrase.phrase);
        phrase.addPhraseToDisplay();
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        // Get the array of hidden letters then check if length is zero return true= win the game.
        const hiddenLettersArray = document.querySelectorAll('.hiden');
        return hiddenLettersArray.length === 0;
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        //use missed value for index in array 
        const lives = document.querySelector('#scoreboard ol li');
        lives[this.missed].src = 'images/lostHeart.png';
        this.missed++;
        if (this.missed === 5) {
            gameOver();
        }
    };

}
