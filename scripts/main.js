// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

let myImage = document.querySelector('img')

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src')
	if (mySrc === 'images/winter.jpg') {
		myImage.setAttribute('src', 'images/florium.jpg')
	} else {
		myImage.setAttribute('src', 'images/winter.jpg')
	}
};

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h2')

function setUserName() {
	let myName = prompt('Пожалуйста, введите своё имя.')
	localStorage.setItem('name', myName)
	myHeading.textContent = 'Florium_spb приветствует Вас, ' + myName + '!'
}

	if (!localStorage.getItem('name')) {
		setUserName()
	} else {
		let storedName = localStorage.getItem('name')
		myHeading.textContent = 'Florium_spb приветствует Вас, ' + storedName + '!'
	}

	myButton.onclick = function() {
		setUserName();
	}