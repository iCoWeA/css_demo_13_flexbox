const menuButtons = document.getElementsByClassName('admin-menu__button');

for (const menuButton of menuButtons) {
    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('admin-menu__button--active');
        const menuList = menuButton.nextElementSibling;
        menuList.classList.toggle('admin-menu__items--active');
    });
}