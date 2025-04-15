const API_URL = 'https://cashtrack-deploy-production.up.railway.app';
//const API_URL = 'http://localhost:8080';

document.addEventListener('DOMContentLoaded', async () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    // When the burger button is clicked, activates the hidden nav menu
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });
});