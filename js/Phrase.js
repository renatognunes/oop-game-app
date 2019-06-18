/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
        this.phrase = phrase.toLowerCase(); 
     };

     addPhraseToDisplay() {
        const phrase = this.phrase;
        const ul = document.getElementsByTagName('ul')[0];

        for(let i = 0; i < phrase.length; i++) {
            let li = document.createElement('li');

            if(phrase[i] !== ' ') {
                li.classList.add('letter');
                li.classList.add(phrase[i]);
                li.classList.add('hide');
            } else {
                li.classList.add('space');
            }
            
            li.textContent = phrase[i];
            ul.appendChild(li);
        }
     };

     /**
        * Checks if passed letter is in phrase
        * @param (string) letter - Letter to check
        */
     checkLetter(letter) {
        if(this.phrase.includes(letter)) {
            return true
        } else {
            return false
        }
     };
     /**
        * Displays passed letter on screen after a match is found
        * @param (string) letter - Letter to display
        */
    showMatchedLetter(letter) {
        const matchedLetter = document.getElementsByClassName(letter);
        for(let i = 0; i < matchedLetter.length; i ++) {
            matchedLetter[i].classList.remove('hide');
            matchedLetter[i].classList.add('show');
        }
    };

     
 }