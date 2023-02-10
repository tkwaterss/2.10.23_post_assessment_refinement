console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been submitted!");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const image = document.querySelector('img');

const compliment = event => {
	alert("You Rock!")
}

image.addEventListener('mouseover', compliment)