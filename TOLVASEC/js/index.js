/* Pure js section */
"use strict";
/* Classes, functions and/or eventListeners related to the typewriter */
class typewriter {
    /* Constructors for the typewriter class */
    constructor(spanElement, words, wait) {
        /* Dynamic text in the span element */
        this.spanElement = spanElement;
        /* Declare typeable text as empty string first */
        this.txt = '';
        /* Array of words from words */
        this.words = words;
        /* Index of array of the data-word array to cycle through words put in it */
        this.wordIndex = 0;
        /* Wait time between cycling through words, determined in the wait attribute */
        this.wait = wait;
        /* Typewriter function upon page load (in next section) */
        this.type();
        /* Toggles between typing and deleting */
        this.backspace = false;
    }

    /* Typewriter type and delete function on page load */
    type() {
        /* Claculates the current index position of the program by taking the remainder of the wordIndex variable (which is incremental after word is done) and the length of the words array */
        const currentIndexPosition = this.wordIndex % this.words.length;
        /* Makes the fullTxt variable declared to the word of the currentIndexPosition */
        const fullTxt = this.words[currentIndexPosition];

        /* If backspace is true, delete characters 1 by 1 */
        if (this.backspace) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } 
        /* Else add text */
        else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        /* Makes the span element contain what this.txt contains to 'refresh' the typewriter */
        this.spanElement.innerHTML = this.txt;

        /* Initial type speed = 100 */
        let typeSpeed = 75;

        /* Check if word is complete (Once this.backspace is not deleting and the text is exactly the text in the array) */
        if (!this.backspace && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.backspace = true;
        } else if (this.backspace && this.txt === '') {
            this.backspace = false;
            this.wordIndex++;
            typeSpeed = 200;
        }

        /* Pause after word is finished (Using arrow function to this.type) */
        setTimeout(() => this.type(), typeSpeed);
    }
}
/* Initialization function to load all variables as elements and attributes from the html page, then using those as parameters for the typewriter */
function init() {
    /* Make spanElement = .txt-type class, words = parseJSON format of the words array, wait time = number in wait attribute */
    const spanElement = document.querySelector('.txt-type');
    const words = JSON.parse(spanElement.getAttribute('data-words'));
    const wait = spanElement.getAttribute('data-wait');
    new typewriter(spanElement, words, wait);
}
/* Add event listener. When DOM content is loaded, execute the init() function */
document.addEventListener('DOMContentLoaded', init);

/* jQuery section */
$(document).ready(function() {
    var carOffset = $(".carousel").offset().top;
    /* Fade in sections based on the offset of the user scroll from top to show bottom section */
    var $w = $(window).scroll(function(){
        if ( $w.scrollTop() > carOffset ) {   
            $(".timeline").animate({ opacity: '1' }, 500);
            $(".certifications").animate({ opacity: '1' }, 500);
            $(".contact").animate({ opacity: '1' }, 500);
        }
    });
});