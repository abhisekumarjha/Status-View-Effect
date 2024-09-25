const container = document.querySelector('.container');
const body = document.querySelector('body');
const profileIcons = document.querySelectorAll('.profile-icon');
const h1 = document.querySelector('h1');


profileIcons.forEach(icon => {
    const image = icon.querySelector('img');

    icon.addEventListener('click', () => {
        h1.textContent = "";
        const imageUrl = image.src;

        [container, body].forEach(element => {
            element.style.backgroundImage = `url(${imageUrl})`;
            element.style.backgroundSize = 'cover';
            element.style.backgroundPosition = 'center';
        });
        [body].forEach(element => {
            element.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.25), rgba(255, 255, 255, 0.25)), url(${imageUrl})`;
        });
    });
});
