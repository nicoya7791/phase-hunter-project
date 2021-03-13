/* create Phrase class and constructor to initiolize the phrase.
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
        this.letters = this.phrase.split('');
    };

    /**
    * Display phrase on game board
    * used templet literal to add an li for each letter to the ul.
    */

    addPhraseToDisplay() {
        const phraseDiv = document.querySelector('#phrase');
        const ul = phraseDiv.firstElementChild;
        const html = this.letters.reduce((acc, letter) => {
            // test if the letter is a space or not. add letter class or space class respectively. 
            if (!/\s/g.test(letter)) {
                return acc + `<li class='hide letter'>${letter}</li>`;
            }
            else {
                return acc + `<li class='space'>${letter}</li>`
            }

        }, '')
        return ul.innerHTML = (html);
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check, return true of false
    */
    checkLetter(letter) {
        let bool = this.phrase.includes(letter) ? true : false;
        return bool;
    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const liArray = document.querySelectorAll('.letter');
        liArray.forEach(element => {
            //shows or hide the letter that was passed.
            if (element.innerHTML === letter) {
                element.classList.add('show')
                element.classList.remove('hide')
            }
        })

    }
}

