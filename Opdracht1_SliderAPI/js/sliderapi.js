document.querySelector('div#carousel');

'use strict';

// XmlHttpRequest variable
let xhr = new XMLHttpRequest();

// Setting method and URL
xhr.open('GET', 'http://jemx.nl/fe-api/Intro-opdracht/index.php');

// Sending request
xhr.send();

// When the request is done and response is given the onload function is fired.
xhr.onload = function() {
    if (xhr.status == 200) { // If the response was successfull
        // Parse the JSON response output.
        let response = JSON.parse(xhr.response);

        // @TODO: voer de generate_slider_items functie uit en stuur de response variable mee.
    }
};

// When the request failed the onerror function is fired.
xhr.onerror = function(event) {
    console.log("Request failed");
}

const educationArr = [
    {
        'title': '',
        'duration': '',
        'description': '',
        'image': ''
    },
    {
        'title': '',
        'duration': '',
        'description': '',
        'image': ''
    },
    {
        'title': '',
        'duration': '',
        'description': '',
        'image': ''
    },
    {
        'title': '',
        'duration': '',
        'description': '',
        'image': ''
    },
    {
        'title': '',
        'duration': '',
        'description': '',
        'image': ''
    }
];

const educationListEl = document.querySelector('div.education ul');

educationArr.forEach( (education) => {

    let newItem = document.createElement('li');
    
    let innerHTML = '<h4>'+education.title+'</h4>';
     innerHTML += '<span class="duration">'+education.duration+'</span>';
     innerHTML += '<span class="school">'+education.school+'</span>';
     innerHTML += '<p>'+education.description+'</p>';

    newItem.innerHTML = innerHTML;

    educationListEl.appendChild(newItem);
});
