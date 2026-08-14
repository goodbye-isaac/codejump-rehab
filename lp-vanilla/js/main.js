const hamburger = document.getElementById('js-hamburger');
const nav = document.getElementById('js-nav');

hamburger.addEventListener('click',() => {
// is-activeクラスをつけ外しする
	hamburger.classList.toggle('is-open');
	nav.classList.toggle('is-open');
})