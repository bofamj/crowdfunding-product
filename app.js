const burger = document.getElementById('burg');
const nav = document.querySelector('.nav');
const burgera = document.querySelector('.burger');
const btn = document.querySelector('.btn-btn');
const pra = document.querySelector('.btn-par');
const button = document.querySelector('.btn');
const tctiv = document.querySelector('.btn-act');

const sowNav = document.querySelector('.sowNav');

burger.addEventListener('click', function() {
	//console.log('hi');
	nav.classList.toggle('sowNav');
});

btn.addEventListener('click', () => {
	btn.classList.toggle('activ');
	pra.classList.toggle('btn-act');
	//pra.innerHTML = 'Bookmarked';
	txt();
});

function txt() {
	if (pra.innerHTML === 'Bookmark') {
		pra.innerHTML = 'Bookmarked';
	} else {
		pra.innerHTML = 'Bookmark';
	}
}
