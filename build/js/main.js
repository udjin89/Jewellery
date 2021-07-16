
const accordion = document.querySelector('.accordion');

if (accordion) {
  const accordionItems = accordion.querySelectorAll('.accordion__item');
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
      this.parentNode.classList.toggle('accordion__item--active');
    });
  });
}

const catalog = document.querySelector('.catalog');
if (catalog) {
  const optionList = catalog.querySelector('.catalog__option-list');
  const optionsButton = optionList.querySelectorAll('h3');
  const buttonOpenFilter = catalog.querySelector('.button--filter');
  const buttonCloseFilter = catalog.querySelector('.button--close-filter');
  const form = catalog.querySelector('form');

  function closeFilter() {
    form.style.display = 'none';
    overlay.classList.add('hidden');
    overlay.classList.remove('bg-overlay--white');
  }

  if (buttonOpenFilter) {
    buttonOpenFilter.addEventListener('click', function (evt) {
      form.style.display = 'block';
      overlay.classList.add('bg-overlay--white');
      overlay.classList.remove('hidden');

      overlay.addEventListener('click', function (evt) {
        evt.preventDefault();
        closeFilter();
      });
      window.addEventListener('keydown', function (evt) {
        if (evt.key === 'Escape' || evt.key === 'Esc') {
          evt.preventDefault();
          closeFilter();
        }
      });
    });
  }
  if (buttonCloseFilter) {
    buttonCloseFilter.addEventListener('click', function (evt) {
      form.style.display = 'none';
      overlay.classList.add('hidden');
      overlay.classList.remove('bg-overlay--white');
      // body.classList.add('overflow');
    });
  }
  optionsButton.forEach(function (item) {
    item.addEventListener('click', function (evt) {
      this.parentNode.classList.toggle('catalog__item--active');
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

// No-js menu
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

// 1- Элемент на который нажимаем, 2- модальное окно, 3-кнопка крестик для закрытия
function bindModal(triggerSelector, modalSelector, closeSelector) //  Передаем в функцию селекторы!
{
  const trigger = document.querySelectorAll(triggerSelector); //Находим все элементы по селектору
  const modal = document.querySelector(modalSelector); // Находим модальное окно по селектору
  const close = document.querySelector(closeSelector); // находим по селектору "кнопку крестик"

  function closeModal() {
    modal.classList.add('hidden');
    modal.classList.remove("modal-show-x");
    body.classList.remove('overflow');
    overlay.classList.add('hidden');
  }

  if (modal) {
    trigger.forEach((item) => {
      item.addEventListener('click', (evt) => { //На каждый элемент, вешаем событие
        if (evt.target) {
          evt.preventDefault();
        }
        overlay.classList.remove('hidden');
        modal.classList.remove('hidden');
        modal.classList.add("modal-show-x");
        const input = modal.querySelector('input');
        input.focus();
        body.classList.add('overflow');
      });
    });

    close.addEventListener('click', () => {
      closeModal()
    });
    window.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        closeModal()
      }
    });
    overlay.addEventListener('click', function (evt) {
      evt.preventDefault();
      closeModal()
    });

  }

}

// 1- Элемент на который нажимаем, 2- модальное окно, 3-кнопка крестик для закрытия
bindModal('.button--login', '.modal--login', '.modal--login .button--close');
bindModal('.button--add-to-card', '.modal--cart', '.modal--cart .button--close');
// bindModal('.button--filter', '.catalog__grid form', '.catalog__grid .button--close-filter');

// Smooth scroll
// const links = document.querySelectorAll('a[href^="#"]');
// if (links) {
//   for (let link of links) {
//     link.addEventListener('click', function (evt) {
//       evt.preventDefault();
//       const id = link.getAttribute('href');
//       closeMenu();
//       document.querySelector(id).scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     });
//   };
// }

const swiper = new Swiper('.swiper-container', {
  speed: 400,
  observer: true,
  observeParents: true,
  // spaceBetween: 30,
  loop: true,
  // slidesPerView: 4,
  // slidesPerGroup: 4,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  //   type: 'bullets',
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '"> ' + (index + 1) + '</span>';
  //   },
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    100: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      allowTouchMove: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          return current + ' of ' + (total);
        }
      },
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      allowTouchMove: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        renderBullet: function (index, className) {
          return '<span class="' + className + '"> ' + (index + 1) + '</span>';
        },
      },
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 10,
      allowTouchMove: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        renderBullet: function (index, className) {
          return '<span class="' + className + '"> ' + (index + 1) + '</span>';
        },
      },
    },
    1190: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 30,
      allowTouchMove: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        renderBullet: function (index, className) {
          return '<span class="' + className + '"> ' + (index + 1) + '</span>';
        },
      },
    },
  },
});


window.addEventListener(`resize`, event => {
  if (screen.width < 1024) {
    swiper.pagination.destroy();
    swiper.pagination.update();
    swiper.pagination.render();
  }
}, false);


const tab = document.querySelector('.article-card__tab');

if (tab) {

  const tabLinks = tab.querySelectorAll('.article-card__link');
  const tabItems = tab.querySelectorAll('.article-card__description')

  tabLinks.forEach((elem, index) => {
    elem.addEventListener('click', (evt) => {
      evt.preventDefault();
      // Выделение кнопки
      tabLinks.forEach((elem) => {
        elem.classList.remove('article-card__link--active');
      });
      elem.classList.add('article-card__link--active');
      // Показываем нужный слайд
      tabItems.forEach((elem) => {
        elem.classList.add('hidden');
      });
      tabItems[index].classList.remove('hidden');
    });
  });
}
