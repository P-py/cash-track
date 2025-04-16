document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const submitButtons = document.querySelectorAll('.submit-btn');

    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
        window.location.href = 'dashboard.html';
    }

    // When the burger button is clicked, activates the hidden nav menu
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });
    
    // Goes through all submit buttons and adds a loading class to them if clicked
    submitButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            button.classList.add('loading');

            setTimeout(() => {
                button.classList.remove('loading');
            }, 2000);
        });
    });
});