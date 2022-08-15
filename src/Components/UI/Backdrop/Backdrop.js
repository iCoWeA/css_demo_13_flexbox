const backdrop = document.querySelector('.backdrop');
const adminMenu = document.querySelector('.admin-menu');

backdrop.addEventListener('click', function () {
    adminMenu.classList.remove('shown');
    backdrop.classList.remove('shown');
});