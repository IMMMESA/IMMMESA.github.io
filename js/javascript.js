// HEADER ROLAGEM

window.addEventListener('scroll', () => {

    const header = document.getElementById('header');

    header.classList.toggle('rolagem', window.scrollY > 50);

});

// MENU MOBILE

const menuMobile = document.getElementById('menu-mobile');
const menu = document.getElementById('menu');

menuMobile.addEventListener('click', () => {

    menu.classList.toggle('active');

    menuMobile.classList.toggle('open');

});

// FECHAR MENU AO CLICAR

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', () => {

        menu.classList.remove('active');

    });

});