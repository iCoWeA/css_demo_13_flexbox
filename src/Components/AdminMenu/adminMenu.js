const menuButtons = document.getElementsByClassName('admin-menu__btn');

for (const menuButton of menuButtons) {
    menuButton.addEventListener('click', () => {
        const menuButtonArrow = menuButton.lastElementChild;
        menuButtonArrow.classList.toggle('admin-menu__icon--active');

        const menuList = menuButton.nextElementSibling;
        menuList.classList.toggle('admin-menu__items--active');
    });
}