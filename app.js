const navbarButton = document.getElementById('navbar__button');
const triangulo = document.querySelector('.triangulo');
const navbar = document.querySelector('.navbar');

console.log('javascript cargado');
console.log(navbarButton);

navbarButton.addEventListener('click', ()=>{
	console.log('evento escuchado');
	triangulo.classList.toggle('hidden');
	navbar.classList.toggle('hidden');
});