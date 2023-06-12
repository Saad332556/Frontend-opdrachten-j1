// Maak een variabele aan genaamd: subtractButtons en selecteer alle buttons met de klasse subtract.
// Maak een variabele aan genaamd: addButtons en selecteer alle buttons met de klasse add.

// Maak een variabele aan genaamd: counterEl en selecteer het div element met het id counter.
// Maak een variabele aan genaamd: counterVal en selecteer het innerHTML attribuut van de counterEl variabele.
// - - Omdat counterVal een variabele is die moet veranderen moeten we "let" gebruiken in plaats van "const"

const subtractButtons = document.querySelectorAll('button.subtract');
const addButtons = document.querySelectorAll('button.add');

const counterEl = document.querySelector('div#counter');
let counterVal = parseInt(counterEl.innerHTML);


subtractButtons.forEach( (buttonEl) => {
    buttonEl.addEventListener('click', function() {
        const value = parseInt(buttonEl.getAttribute('value'));
        
        counterVal -= value;

        counterEl.innerHTML = counterVal;

    });
});

addButtons.forEach( (buttonEl) => {
    buttonEl.addEventListener('click', function() {
        const value = parseInt(buttonEl.getAttribute('value'));
        
        counterVal += value;

        counterEl.innerHTML = counterVal;

    });
});