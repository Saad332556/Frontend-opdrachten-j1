
function check_guess() {

  // guess variable. input element with ID guess value will be used.
  // -- Value is parsed to integer.
  const guess = parseInt(document.querySelector('input#guess').value);

  // lastguess value element will be filled with guess variable.
  document.querySelector('div#lastguess span.value').innerHTML = guess;

  if (guess) {

    if (guess >= minRange && guess <= maxRange) {

      // if-statement: check of de guess variabele gelijk is aan de secretNumber variabele

        // Voer uit: win functie met de guess variabele
        // Voer uit: show_feedback functie met 'win'

      // else

        // Voer uit: update_lives functie met -1

        // if-statement: check of de guess variabele kleiner is dan de secretNumber variabele.
          // Voer uit: show_feedback functie met 'low'

        // else-if-statement: check of de guess variabele groter is dan de secretNumber variabele.
          // Voer uit: show_feedback functie met 'high'

    } else {
      // Voer uit: show_message functie met "Number is out of range!"
    }
  } else {
    // Voer uit: show_message functie met "No number!"
  }
}
