
const accordion = document.querySelector('.accordion');
const accordionItems = accordion.querySelectorAll('.accordion__item');
if (accordion) {
  const panelItem = accordion.querySelectorAll('h3');
  const active = accordion.getElementsByClassName('panel-active');
  const activeItem = accordion.getElementsByClassName('accordion__item--active');

  accordionItems.forEach(function (item) {
    item.classList.remove('accordion__item--active');
  });
  panelItem.forEach(function (item) {
    item.classList.remove('panel-active');
  });

  Array.from(panelItem).forEach(function (item, i, panelItem) {
    item.addEventListener('click', function (e) {
      if (active.length > 0 && active[0] !== this) {
        // если есть активный элемент, и это не тот по которому кликнули
        active[0].classList.remove('panel-active'); // убрать класс panel-active
        activeItem[0].classList.remove('accordion__item--active');
      }
      // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
      this.classList.toggle('panel-active');
      // убрать класс panel-active

      // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
      this.parentNode.classList.toggle('accordion__item--active');
    });
  });
}


const inputNumberPhone = document.querySelector('#user-tel');
if (inputNumberPhone) {
  inputNumberPhone.addEventListener('keyup', (evt) => {
    inputNumberPhone.value = inputNumberPhone.value.replace(/[^\d^(^)^+^ ]/g, '');
  });
}

const toggle = document.querySelector('.toggle');
const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.navigation');
const body = document.querySelector('.page__body');

// // No-js menu
header.classList.remove('header--open');
if (menu) {
  menu.classList.remove('menu--open');
}
if (menuNav) {
  menuNav.classList.remove('navigation--open');
  menuNav.classList.remove('navigation--no-js');
}
if (toggle) {
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
  menu.classList.add('menu--open');
  header.classList.add('header--open');
  body.classList.add('overflow');
}
function closeMenu() {
  toggle.classList.remove('is-active');
  menuNav.classList.remove('navigation--open');
  menu.classList.remove('menu--open');
  header.classList.remove('header--open');
  body.classList.remove('overflow');
}


const overlay = document.querySelector('.bg-overlay');
const buttons = document.querySelectorAll('.button--login');
const modal = document.querySelector('.modal--login');
const buttonClose = modal.querySelector('.button--close');
const inputEmail = modal.querySelector('input[type=email]');

if (buttons) {
  buttons.forEach(function (item) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      overlay.classList.remove('hidden');
      modal.classList.remove('hidden');
      modal.classList.add("modal-show-x");
      inputEmail.focus();
      // body.dataset.scrollY = getBodyScrollTop() // сохраним значение скролла
      // body.style.top = `-${body.dataset.scrollY}px`
      body.classList.add('overflow');
      eventclose();

    });
  });

}

function eventclose() {
  window.addEventListener('keydown', onEscKeydown);
  overlay.addEventListener('click', onOverlayClick);
  buttonClose.addEventListener('click', removeModal);
}
function onEscKeydown(evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    removeModal();
  }
}

function removeModal() {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
  modal.classList.remove("modal-show-x");
  body.classList.remove('overflow');
  window.removeEventListener('keydown', onEscKeydown);
  overlay.removeEventListener('click', onOverlayClick);

}

function onOverlayClick() {
  console.log('clickocerlay');
  removeModal();
}

function getBodyScrollTop() {
  return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
}

// Smooth scroll
const links = document.querySelectorAll('a[href^="#"]');
if (links) {
  for (let link of links) {
    link.addEventListener('click', function (evt) {
      evt.preventDefault();
      const id = link.getAttribute('href');
      closeMenu();
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };
}

const swiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 30,
  loop: true,
  slidesPerView: 4,
  slidesPerGroup: 4,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"> ' + (index + 1) + '</span>';
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
