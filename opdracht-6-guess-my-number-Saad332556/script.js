'use strict';

// Minimal and maximum range.
const minRange = 1;
const maxRange = 20;

// Random Number generator between range.
let secretNumber = Math.trunc(Math.random() * maxRange) + minRange;

let maxLives = 20; // maxLives integer variable
let highscore = 0; // highscore integer variable

// Set innerHTML of lives and highscore elements on load.
document.querySelector('div#lives span.value').innerHTML = maxLives;
document.querySelector('div#highscore span.value').innerHTML = highscore;

// EventListeners
