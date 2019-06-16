/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }
     createPhrases = () => {
        const phrase1 = {phrase: 'Life is good'};
        const phrase2 = {phrase: 'Keep Working'};
        const phrase3 = {phrase: 'You can do it'};
        const phrase4 = {phrase: 'Have a nice day'};
        const phrase5 = {phrase: 'Thank you'};
        return [phrase1, phrase2, phrase3, phrase4, phrase5]
     };

     getRandomPhrase = () => {
         const randomIndex = Math.floor(Math.random() * 5);
         return this.phrases[randomIndex];
     }
 }