// display month for given time , still allowing for next and prev months 
// nav will be a way to keep track of which month we are on 
let nav = 0;

// stateful , whichever day we have clicked on, will set clicked to 
let clicked = null;

// stateful, pulling from local storage, check to make sure it exists before calling json.parse (can only store strings in localStorage, not obj) , if it doesn't, return empty array 
// manipulation of this array is how we will allow users to add and change events 
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : []; 

// reference to calendar in the DOM
const calendar = document.getElementById('calendar');

// create new event modal
const newEventModal = document.getElementById('newEventModal');

// create new event modal
const deleteEventModal = document.getElementById('deleteEventModal');

// backdrop for modal
const backDrop = document.getElementById('modalBackdrop');

const eventTitleInput = document.getElementById('eventTitleInput');


// how we will calculate how many padding days need to exist at beginning of month 
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function openModal(date) {
    clicked = date;
    
    // loop through events array to look for events on the day we are looking for 
    const eventForDay = events.find(e => e.date === clicked);

    // if we find an event on that day we will show delete option 
    if (eventForDay) {
        
        document.getElementById('eventText').innerText = eventForDay.title;
        
        deleteEventModal.style.display = 'block';

    } else {
        newEventModal.style.display = 'block';
    }
    backDrop.style.display = 'block'
}

// to display everything on screen
function load() {
    const dt = new Date();

    // check for any navigation backwards or forwards 
    if (nav !== 0) {
        // passing in a date obj and incrementing it by nav value
        dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    // when using the date object it is the index of the array , so we need to remember that 
    // when printing the month we will need to say month + 1 
    console.log(day, month, year);

    // passing 1 to get first day of the month
    const firstDayOfMonth = new Date(year, month, 1);
    console.log(firstDayOfMonth);

    // by giving date API zero for day we are actually getting the last day of prev month 
    // here we get the number of days in the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    console.log(daysInMonth);
    
    // how we get the string we can call split on to calculate padding days 
    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });
    console.log(dateString);
    
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
    console.log(paddingDays);

    // populating current month in the header of the document 
    document.getElementById('monthDisplay').innerText = `${dt.toLocaleDateString('en-us', {month: 'long'})} ${year}`;

    // wiping out the content in the calendar div 
    calendar.innerHTML = '';
    
    // then re rendering everything 
    for(let i = 1; i <= paddingDays + daysInMonth; i++) {
        const daySquare = document.createElement('div');
        daySquare.classList.add('day');

        if (i > paddingDays) {
            daySquare.innerText = i - paddingDays;

            // interpolated date 
            const dayString = `${month + 1}/${i - paddingDays}/${year}`;

            const eventForDay = events.find(e => e.date === dayString);


            if (i - paddingDays === day && nav === 0){
                daySquare.id = 'currentDay';
            }

            if (eventForDay) {
                // if event exists put it in a div in the day square on the calendar 
                const eventDiv = document.createElement('div');
                
                // give event a class of event
                eventDiv.classList.add('event');
                
                // give event a title
                eventDiv.innerText = eventForDay.title;
                
                // append to a daySquare so it can be added to the calendar 
                daySquare.appendChild(eventDiv);

            }

            // months are index valued, so + 1, and day will be calculated from paddingDays as we loop through
            daySquare.addEventListener('click', () => openModal(dayString));
        } else {
            // classList used to modify the class of the elements class attribute 
            daySquare.classList.add('padding');
        }

        // take day square and add it to the calendar reference in the DOM
        calendar.appendChild(daySquare);
    }
}

function closeModal() {
    // if we close modal while there is an error we want to remove the error 
    eventTitleInput.classList.remove('error');
    newEventModal.style.display = 'none';
    deleteEventModal.style.display = 'none';
    backDrop.style.display = 'none';
    eventTitleInput.value = '';
    clicked = null; 
    load();
}

function saveEvent() {
    // get value out of the input 

    if (eventTitleInput.value) {
        // check for input and only accept if true
        eventTitleInput.classList.remove('error');

        // push to events array in state 
        events.push({
            date: clicked,
            title: eventTitleInput.value,
        });

        // not that we know the event exists and it has been pushed to the array, we stringify to 
        // store it to local storage 
        localStorage.setItem('events', JSON.stringify(events));
        
        // now we want to close the modal 
        closeModal();
    } else {
        eventTitleInput.classList.add('error');
    }

}

function deleteEvent() {
    // filter out single event that we are deleting
    // if equal to clicked then filter it from the array , so we can delete it 
    events = events.filter(e => e.date !== clicked);

    //reset in localstorage 
    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
}

function initButtons() {
    document.getElementById('nextButton').addEventListener('click', () => {
        nav++;
        load();
    });

    document.getElementById('backButton').addEventListener('click', () => {
        nav--;
        load();
    });

    document.getElementById('saveButton').addEventListener('click', saveEvent);
    document.getElementById('cancelButton').addEventListener('click', closeModal);

    document.getElementById('deleteButton').addEventListener('click', deleteEvent);
    document.getElementById('closeButton').addEventListener('click', closeModal);
}


initButtons();
load();
