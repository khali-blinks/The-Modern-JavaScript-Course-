const colors = [
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'purple',
	'indigo',
	'violet'
];
const changeColor = function(evt) {
    console.log(evt)
	const h1 = document.querySelector('h1');
	h1.style.color = this.style.backgroundColor;
    // this refers to the box that was clicked becuase 
    // the function is attached as an event listener. It retrieves the backgroundColor property of the clicked box
};
const container = document.querySelector('#boxes');

for (let color of colors) {
	const box = document.createElement('div');
	box.style.backgroundColor = color;
	box.classList.add('box');
	container.appendChild(box);
	box.addEventListener('click', changeColor);
}