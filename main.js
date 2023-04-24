const menu = document.getElementById('menu')
const nav = document.getElementById('nav')
const overlay = document.getElementById('overlay')

menu.onclick = () => {
	nav.classList.add('open')
	overlay.classList.add('open')
	overlay.classList.add('opacity')
}
overlay.onclick = () => {
	nav.classList.remove('open')
	overlay.classList.remove('open')
	overlay.classList.remove('opacity')
}
