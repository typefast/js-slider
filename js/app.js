
var bdy = document.getElementById('body');
var menu = document.getElementById('menu');
var openBtn = document.getElementById('btn');
var closeButton = document.getElementById('close');

//transition timing function because why not
function transitionTime(element, time) {
	element.style.transition = "transform " + time + "s ease-in-out";
	console.log('transitioned');
}



//menu slide function
function open() {
	menu.style.transform = "translateX(300px)";
	transitionTime(menu, 1);

	
	console.log('opened');
}

//menu cose function
function close() {
	menu.style.transform = "translate(0)";
	
	console.log('closed');
}

openBtn.addEventListener('click', open);
closeButton.addEventListener('click', close);