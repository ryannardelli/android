const burguer = document.querySelector('.burguer');
const nav = document.querySelector('.nav');
const video = document.querySelector('.video-container');
const list = document.querySelector('.container-extra');

burguer.addEventListener('click', () => {
    nav.classList.toggle('active');
    if (isMenuActive()) {
        video.style.display = 'none';
        list.style.display = 'none';
    } else {
        video.style.display = 'block';
        list.style.display = 'block';
    }
});

function isMenuActive() {
    return nav.classList.contains('active');
}
