// ハンバーガーメニュー
const hamburger = document.getElementById('js-hamburger');
const nav = document.getElementById('js-nav');

hamburger.addEventListener('click',() => {
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

/**
 * メインビジュアル フェード切り替え
 * - 画像が1枚以下の場合は何もしない
 * - タブが非アクティブの間は処理を停止（パフォーマンス考慮）
 */
const fadeImages = document.querySelectorAll('.js-fade');

if (fadeImages.length > 1) {
	let currentIndex = 0;
	const INTERVAL_MS = 3000;

	// 最初の画像を表示
	fadeImages[currentIndex].classList.add('is-visible');

	const changeImage = () => {
		fadeImages[currentIndex].classList.remove('is-visible');
		currentIndex = (currentIndex + 1) % fadeImages.length;
		fadeImages[currentIndex].classList.add('is-visible');
	};

	const intervalId = setInterval(changeImage, INTERVAL_MS);

	// タブが非アクティブの間は interval を停止し、戻ったら再開（省電力）
	document.addEventListener('visibilitychange', () => {
		if (document.hidden) {
			clearInterval(intervalId);
		} else {
			intervalId = setInterval(changeImage, INTERVAL_MS);
		}
	});
}

// IntersectionObserver
const callback = (entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('is-slide');
			observer.unobserve(entry.target);
		}
	});
}

const options = {
	root: null,
	rootMargin: '0px',
	threshold: 0
}

const observer = new IntersectionObserver(callback,options);

const elements = document.querySelectorAll('.js-slide-in');
elements.forEach(el => observer.observe(el));