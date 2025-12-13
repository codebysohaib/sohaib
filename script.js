const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.links');

hamburger.addEventListener('click', function () {
    navlinks.classList.toggle('active');
});
navlinks.addEventListener('click', function () {
    navlinks.classList.remove('active');
});



document.addEventListener('click', function () {
    const clickedinlinks = navlinks.contains(event.target);
    const clickedonhamburger = hamburger.contains(event.target);

    if (!clickedinlinks && !clickedonhamburger) {
        navlinks.classList.remove('active');
    }
});
