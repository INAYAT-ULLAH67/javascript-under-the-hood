const button = document.getElementById('menu-button');
const menu = document.getElementById('mobileMenu');

button.addEventListener('click', function() {
    menu.classList.toggle('hidden');
});