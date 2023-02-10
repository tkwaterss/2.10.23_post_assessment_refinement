const button = document.querySelector('button');
const restaurants = document.querySelectorAll('.restaurants');

const randomRestaurant = event => {
    let suggest = document.querySelector('#recommended');
    suggest.textContent = restaurants[Math.floor(Math.random() * restaurants.length)].outerText
}

const changeColor = event => {
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
}
const reverseColor = event => {
    event.target.style.backgroundColor = 'yellow';
    event.target.style.color = 'black'
}

const addItem = event => {

}

const deleteItem = event => {

}

const crossOffItem = event => {

}

const revealItem = event => {

}

button.addEventListener('click', randomRestaurant);
button.addEventListener('mouseover', changeColor);
button.addEventListener('mouseout', reverseColor);

