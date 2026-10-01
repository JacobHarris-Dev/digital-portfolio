// Selects the hamburger menu button
const navToggle = document.querySelector('.nav-toggle');

// Selects all navigation links in the menu
const navLinks = document.querySelectorAll('.nav__link')

// Toggles the navigation menu open/closed when the hamburger is clicked
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// Closes the navigation menu when any link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

const particleContainer = document.querySelector('#particles');

if (particleContainer) {
    const randomBetween = (minimum, maximum) => Math.random() * (maximum - minimum) + minimum;

    for (let index = 0; index < 24; index += 1) {
        const firefly = document.createElement('span');
        firefly.className = 'firefly';
        firefly.setAttribute('aria-hidden', 'true');
        firefly.style.setProperty('--start-x', `${randomBetween(2, 98)}%`);
        firefly.style.setProperty('--start-y', `${randomBetween(3, 97)}%`);
        firefly.style.setProperty('--firefly-size', `${randomBetween(1.5, 3.5)}px`);
        firefly.style.setProperty('--duration', `${randomBetween(10, 19)}s`);
        firefly.style.setProperty('--delay', `${randomBetween(-19, 0)}s`);

        for (let stop = 1; stop <= 3; stop += 1) {
            firefly.style.setProperty(`--drift-${['one', 'two', 'three'][stop - 1]}-x`, `${randomBetween(-72, 72)}px`);
            firefly.style.setProperty(`--drift-${['one', 'two', 'three'][stop - 1]}-y`, `${randomBetween(-54, 54)}px`);
        }

        particleContainer.append(firefly);
    }
}
