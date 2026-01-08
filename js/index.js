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
