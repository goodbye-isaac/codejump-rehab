const hamburger = document.getElementById('js-hamburger');
const nav = document.getElementById('js-nav');

hamburger.addEventListener('click',() => {
// is-openクラスをつけ外しする
	hamburger.classList.toggle('is-open');
	nav.classList.toggle('is-open');
})

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(navLink => {
	navLink.addEventListener('click',()=> {
		hamburger.classList.remove('is-open');
		nav.classList.remove('is-open');		
	})
});
