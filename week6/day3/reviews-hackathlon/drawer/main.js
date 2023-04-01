const btnOpen = document.querySelector('#btnOpen');
const drawer = document.querySelector('.drawer');
const drawerContainer = document.querySelector('.drawer-container');
const btnCloseDrawer = document.querySelector('.drawer .close-drawer');

btnOpen.addEventListener('click', () => {

    drawer.classList.add('show')
});


const onCloseDrawer = () => {

    drawer.classList.remove('show')
};

btnCloseDrawer.addEventListener('click', onCloseDrawer);
drawer.addEventListener('click', onCloseDrawer);

drawerContainer.addEventListener('click', (event) => {

    event.stopPropagation();
});