const toggle = document.querySelector('.toggle');
const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.navigation');
const body = document.querySelector('.page__body');
const extra = menu.querySelector('.extra-navigation');
// No-js menu
header.classList.remove('header--no-js');
header.classList.remove('header--open');

if (menu) {
  menu.classList.remove('menu--open');
}
if (menuNav) {
  menuNav.classList.remove('navigation--open');
  extra.classList.remove('extra-navigation--open');
  menuNav.classList.remove('navigation--no-js');
}
if (toggle) {
  toggle.classList.remove('hidden');
  toggle.classList.remove('toggle--off');
}
// Кнопка гамбургер
if (toggle) {
  toggle.addEventListener('click', (evt) => {
    (toggle.classList.contains('is-active') === true) ? closeMenu() : openMenu();
  });
}

function openMenu() {
  toggle.classList.add('is-active');
  menuNav.classList.add('navigation--open');
  extra.classList.add('extra-navigation--open');
  menu.classList.add('menu--open');
  header.classList.add('header--open');
  body.classList.add('overflow');
}
function closeMenu() {
  toggle.classList.remove('is-active');
  menuNav.classList.remove('navigation--open');
  extra.classList.remove('extra-navigation--open');
  menu.classList.remove('menu--open');
  header.classList.remove('header--open');
  body.classList.remove('overflow');
}
