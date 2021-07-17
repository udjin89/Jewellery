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
  mousewheel: true, // можно прокручивать изображения колёсиком мыши
  // initialSlide: 1,
  navigation: { // задаем кнопки навигации
    nextEl: '.slider__next', // кнопка Next
    prevEl: '.slider__prev' // кнопка Prev
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
    }
  },
});

window.addEventListener('resize', event => {
  if (screen.width < 1024) {
    // swiper.pagination.destroy();
    swiper.pagination.update();
    swiper.pagination.render();
    swiper2.pagination.update();
    swiper2.pagination.render();

    // // sliderImages.pagination.destroy();
    sliderImages.pagination.update();
    sliderImages.pagination.render();
  }
}, false);
