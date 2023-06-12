// Het img element wordt geselecteerd.
// En het src attribuut wordt aangepast.
const photoEl = document.querySelector('div.profile-photo img');
photoEl.src = 'img/itachi.jpeg';

// Het h3 element met de klasse name wordt geselecteerd.
// En de innerlijke html wordt aangepast.
const nameEl = document.querySelector('h3.name');
nameEl.innerHTML = 'Saad Benaissa';

const birthdayEl = document.querySelector('span.birthday');
birthdayEl.innerHTML = '30 augustus 2000';

const emailEl = document.querySelector('span.email');
emailEl.innerHTML = '332556@student.mboutrecht.nl';

const profileEl = document.querySelector('p.profile');
profileEl.innerHTML = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.';

const educationArr = [
    {
        'title': 'Software Development MBO4',
        'duration': '09/2020 - heden',
        'school': 'MBO Utrecht',
        'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    {
        'title': 'Software Development MBO4',
        'duration': '09/2020 - 12/2020',
        'school': 'ROC MID College',
        'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    {
        'title': 'Medewerker beheer ICT MBO3',
        'duration': '09/2018 - 07/2020',
        'school': 'ROC ICT College',
        'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    {
        'title': 'Middelbaar onderwijs VMBO',
        'duration': '08/2014 - 07/2018',
        'school': 'Christelijk College Zeist',
        'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
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

const jobsArr = [
    {
        'title': 'Winkelmedewerker',
        'duration': '10/2017 - heden',
        'business': 'Action',
        'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    },
    {
        'title': 'Vulploeg',
        'duration': '04/2016 - 06/2016',
        'business': 'Hoogvliet',
        'description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
    }
];

const jobsListEl = document.querySelector('div.jobs ul');

jobsArr.forEach( (jobs) => {

    let newItem = document.createElement('li');
    
    let innerHTML = '<h4>'+jobs.title+'</h4>';
     innerHTML += '<span class="duration">'+jobs.duration+'</span>';
     innerHTML += '<span class="business">'+jobs.business+'</span>';
     innerHTML += '<p>'+jobs.description+'</p>';

    newItem.innerHTML = innerHTML;

    jobsListEl.appendChild(newItem);
});