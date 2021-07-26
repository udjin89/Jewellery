
const accordion = document.querySelector('.accordion');

if (accordion) {
  const accordionItems = accordion.querySelectorAll('.accordion__item');
  const panelItem = accordion.querySelectorAll('button');
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

const options = document.querySelector('.catalog__option-list');
if (options) {
  const catalogItems = options.querySelectorAll('.catalog__item');
  const optionsList = options.querySelectorAll('.catalog__button');

  optionsList.forEach((elem, index) => {

    elem.addEventListener('click', function (evt) {
      this.parentNode.classList.toggle('catalog__item--active');
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

const toggle = document.querySelector('.toggle');
const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.navigation');
const body = document.querySelector('.page__body');
const extra = document.querySelector('.extra-navigation');
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
    focusManager.release(modal);
  }

  if (modal) {
    trigger.forEach((item) => {
      item.addEventListener('click', (evt) => { //На каждый элемент, вешаем событие
        if (evt.target) {
          evt.preventDefault();
        }
        closeMenu();
        overlay.classList.remove('hidden');
        modal.classList.remove('hidden');
        modal.classList.add("modal-show-x");
        const input = modal.querySelector('input');
        input.focus();
        body.classList.add('overflow');
        focusManager.capture(modal);
      });
    });

    close.addEventListener('click', () => {
      closeModal();
    });
    window.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        closeModal();
      }
    });
    overlay.addEventListener('click', function (evt) {
      evt.preventDefault();
      closeModal();
    });

  }

}

// 1- Элемент на который нажимаем, 2- модальное окно, 3-кнопка крестик для закрытия
bindModal('.login', '.modal--login', '.modal--login .button--close');
bindModal('.button--add-to-card', '.modal--cart', '.modal--cart .button--close');
// bindModal('.button--filter', '.catalog__grid form', '.catalog__grid .button--close-filter');

const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', { // ищем слайдер превью по селектору
  // задаем параметры
  direction: 'vertical', // вертикальная прокрутка
  slidesPerView: 3, // показывать по 3 превью
  spaceBetween: 24, // расстояние между слайдами
  freeMode: true,// при перетаскивании превью ведет себя как при скролле
  // initialSlide: 1,
  breakpoints: { // условия для разных размеров окна браузера
    0: { // при 0px и выше
      direction: 'horizontal', // горизонтальная прокрутка
      spaceBetween: 14,
    }, 1024: { // при 1024px и выше
      direction: 'vertical', // вертикальная прокрутка
      spaceBetween: 30,
    }
  },
});

const sliderImages = new Swiper('.slider__images .swiper-container', { // ищем слайдер превью по селектору
  // задаем параметры
  direction: 'vertical', // вертикальная прокрутка
  slidesPerView: 1, // показывать по 1 изображению
  spaceBetween: 32, // расстояние между слайдами
  loop: true,
  //mousewheel: true, // можно прокручивать изображения колёсиком мыши
  // initialSlide: 1,
  navigation: { // задаем кнопки навигации
    nextEl: '.slider-next', // кнопка Next
    prevEl: '.slider-prev' // кнопка Prev
  },
  grabCursor: true, // менять иконку курсора
  thumbs: { // указываем на превью слайдер
    swiper: sliderThumbs, // указываем имя превью слайдера
    autoScrollOffset: 2,
  },
  breakpoints: { // условия для разных размеров окна браузера
    0:
    { // при 0px и выше
      direction: 'horizontal', // горизонтальная прокрутка
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination-gallery',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          return current + '  of  ' + (total);
        }
      },
    },
    768:
    { // при 0px и выше
      direction: 'horizontal', // горизонтальная прокрутка
      spaceBetween: 14,
      pagination: {
        el: '.swiper-pagination-gallery',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          return '';
        }
      },
    },
    1024: { // при 768px и выше
      direction: 'vertical', // вертикальная прокрутка
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination-gallery',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          return '';
        }
      },
    }
  },
});

sliderImages.on('resize', function () {
  sliderImages.pagination.update();
  sliderImages.pagination.render();
});

const swiper = new Swiper('.products--main .swiper-container', {
  speed: 400,
  observer: true,
  observeParents: true,
  initialSlide: 8,
  // spaceBetween: 30,
  updateOnWindowResize: true,
  loop: true,

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
        type: 'bullets',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          return current + '  of  ' + (total);
        },
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

const swiper2 = new Swiper('.products--card .swiper-container', {
  speed: 400,
  observer: true,
  observeParents: true,
  // spaceBetween: 30,
  loop: true,

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
        el: '.swiper-pagination1',
        clickable: true,
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          return current + '  of  ' + (total);
        },
      },
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      allowTouchMove: true,
      pagination: {
        el: '.swiper-pagination1',
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
        el: '.swiper-pagination1',
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
        el: '.swiper-pagination1',
        clickable: true,
        type: 'bullets',
        renderBullet: function (index, className) {
          return '<span class="' + className + '"> ' + (index + 1) + '</span>';
        },
      },
    },
  },
});

swiper.on('resize', function () {
  // console.log('RESIZE');
  swiper.pagination.update();
  swiper.pagination.render();
});

swiper2.on('resize', function () {
  // console.log('RESIZE');
  swiper.pagination.update();
  swiper.pagination.render();
});


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

// const modalFocusTrap = createFocusTrap(".modal");
; (function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.focusManager = factory();
  }
}(this, function () {
  "use strict";

  function isAncestor(ancestor, descendant) {
    var element = descendant;
    while (element) {
      if (element === ancestor) {
        return true;
      }
      element = element.parentElement;
    }

    return false;
  }

  function isDisabled(element) {
    return element.disabled === true;
  }

  function isFocusable(element) {
    return Boolean(element) && element.tabIndex >= 0 && !isDisabled(element);
  }

  function makeFocusable(element) {
    // A tabIndex is needed to make the element focusable
    // A tabIndex of -1 means that the element is only programmatically focusable
    if (isDisabled(element)) {
      element.disabled = false;
    }

    if (!isFocusable(element)) {
      element.tabIndex = -1;
    }
  }

  // Find the first focusable element.
  // The candidates are the element and it's descendants.
  // The search is performed depth-first.
  function findFirstFocusableElement(element) {
    if (isFocusable(element)) {
      return element;
    }

    var children = element.children;
    var length = children.length;
    var child;
    var focusableDescendant;

    for (var i = 0; i < length; i += 1) {
      child = children[i];

      focusableDescendant = findFirstFocusableElement(child);

      if (focusableDescendant) {
        return focusableDescendant;
      }
    }

    return null;
  }

  // Find the first focusable element.
  // The candidates are the element and it's descendants.
  // The search is performed depth-first.
  function findLastFocusableElement(element) {
    var children = element.children;
    var length = children.length;
    var child;
    var focusableDescendant;

    for (var i = length - 1; i >= 0; i -= 1) {
      child = children[i];

      focusableDescendant = findLastFocusableElement(child);

      if (focusableDescendant) {
        return focusableDescendant;
      }
    }

    if (isFocusable(element)) {
      return element;
    }

    return null;
  }

  function focus(element) {
    makeFocusable(element);
    element.focus();
    state.lastFocus = element;
  }

  function resolveFocus(parent, defaultFocus) {
    var focusElement;

    if (defaultFocus) {
      focusElement = defaultFocus;
    } else {
      focusElement = findFirstFocusableElement(parent) || parent;

      if (focusElement === state.lastFocus) {
        focusElement = findLastFocusableElement(parent) || parent;
      }
    }

    focus(focusElement);
  }

  function focusFirstInElement(element) {
    var focusElement = findFirstFocusableElement(element) || element;
    focus(focusElement);
  }

  function focusLastInElement(element) {
    var focusElement = findLastFocusableElement(element) || element;
    focus(focusElement);
  }

  // State is kept is these variables.
  // Since only one modal dialog can capture focus at a time the state is a singleton.
  var state = {
    eventListenerArguments: null,
    eventListenerContext: null,
    lastFocus: null
  };

  function releaseModalFocus(focusElement) {
    var eventListenerContext = state.eventListenerContext;
    var eventListenerArguments = state.eventListenerArguments;

    if (eventListenerContext && eventListenerArguments) {
      eventListenerContext.removeEventListener.apply(eventListenerContext, eventListenerArguments);
    }

    // Reset the state object
    state.eventListenerContext = null;
    state.eventListenerArguments = null;
    state.lastFocus = null;

    if (focusElement) {
      focusElement.focus();
    }
  }

  // Keep focus inside the modal
  function restrictFocus(modal, focusedElement) {
    if (isAncestor(modal, focusedElement)) {
      state.lastFocus = focusedElement;
    } else {
      resolveFocus(modal);
    }
  }

  // modal, the element in which to contain focus
  // focusElement (optional), the element inside the modal to focus when opening
  // backgroundElement (optional), All focus events within this element are redirected to the modal. Defaults to document
  function captureModalFocus(modal, focusElement, backgroundElement) {

    // without a modal there is nothing to capture
    if (!modal) {
      return null;
    }

    // If any focus is already being captured, release it now
    releaseModalFocus();

    // focus the modal so the user knows it was opened
    resolveFocus(modal, focusElement);

    // Whenever an element outside of the modal is focused, the modal is focused instead
    function focusCallback(evnt) {
      restrictFocus(modal, evnt.target);
    }

    // The focus event does not bubble
    // however it can be captured on an ancestor element
    // by setting useCapture to true
    var eventListenerContext = backgroundElement || document;
    var eventListenerArguments = ["focus", focusCallback, true];

    // Save the eventListener data in the state object so it can be removed later
    // by the releaseModalFocus function
    state.eventListenerContext = eventListenerContext;
    state.eventListenerArguments = eventListenerArguments;

    eventListenerContext.addEventListener.apply(eventListenerContext, eventListenerArguments);
  }

  var focusManager = {
    capture: captureModalFocus,
    release: releaseModalFocus,
    focusFirstInElement: focusFirstInElement,
    focusLastInElement: focusLastInElement
  };
  return focusManager;
}));

window.addEventListener('focusin', event => console.log(event.target));
