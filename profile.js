/*
create event listeners for each button to alert

my touch - make alert be a box on the page rather than
and alert box

also add mouseover color change for buttons
*/

const color = document.querySelector('#color');
const place = document.querySelector('#place');
const ritual = document.querySelector('#ritual');
const buttons = document.querySelectorAll('button');

const changeColor = event => {
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
}
const reverseColor = event => {
    event.target.style.backgroundColor = 'yellow';
    event.target.style.color = 'black'
}

const displayColor = event => {
    alert("My favorite color is Purple!")
}

const displayPlace = event => {
    alert("My favorite place is 'Somewhere on a River'")
}

const displayRitual = event => {
    alert("Playing 'Rose, Bud, Thorn' at the end of a trip.")
}

color.addEventListener('click', displayColor);
place.addEventListener('click', displayPlace);
ritual.addEventListener('click', displayRitual);

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover',changeColor);
}
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseout',reverseColor);
}