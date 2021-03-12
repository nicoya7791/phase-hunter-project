/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
// creates a game class
const overlay = document.querySelector('#overlay');
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
        //remove ovelay to show keyboard and phrase place holder.
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
        const hiddenLettersArray = document.querySelectorAll('.hide');
        // if the list of characters class 'hide is zero consider a win else a loss.
        return hiddenLettersArray.length === 0 ? true : false;

    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        //use missed value for index in array 
        const lives = document.querySelectorAll('#scoreboard li img');
        lives[this.missed].src = 'images/lostHeart.png';
        this.missed++;
        //call game over when user have riched five tries.
        if (this.missed === 4) {
            this.gameOver();
        }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(checkForWin) {
        //add overlay when game ends
        overlay.style.display = '';
        const overlayH1 = document.querySelector('#overlay h1');
        //if the game is a win add 'win' class and show message;
        if (this.checkForWin()) {
            overlayH1.textContent = 'you have won the game';
            overlay.classList.remove('start');
            overlay.classList.add('win');
        } else {
            //else show add lose classs and show yuou lose message
            overlayH1.textContent = 'You have lost the game';
            overlay.classList.remove('start');
            overlay.classList.add('lose');
        }

    };
    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        const key = button.textContent;
        button.disabled = true;
        //if letter is correct add class chosen, sow letter in the phrase, check for win
        if (this.activePhrase.checkLetter(key)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(key);
            if (this.checkForWin()) {
                console.log(this.checkForWin())
                this.gameOver()
            }

        }
        //add class of wrong letter and remvove life
        else {
            button.classList.add('wrong');
            this.removeLife();

        }



    };



}
