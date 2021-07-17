const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', { // ищем слайдер превью по селектору
  // задаем параметры
  direction: 'vertical', // вертикальная прокрутка
  slidesPerView: 3, // показывать по 3 превью
  spaceBetween: 24, // расстояние между слайдами
  freeMode: true,// при перетаскивании превью ведет себя как при скролле
  breakpoints: { // условия для разных размеров окна браузера
    0: { // при 0px и выше
      direction: 'horizontal', // горизонтальная прокрутка
      spaceBetween: 14,
    }, 1024: { // при 1024px и выше
      direction: 'vertical', // вертикальная прокрутка
    }
  },
});// Инициализация слайдера изображенийconst

sliderImages = new Swiper('.slider__images .swiper-container', { // ищем слайдер превью по селектору
  // задаем параметры
  direction: 'vertical', // вертикальная прокрутка
  slidesPerView: 1, // показывать по 1 изображению
  spaceBetween: 32, // расстояние между слайдами
  mousewheel: true, // можно прокручивать изображения колёсиком мыши
  navigation: { // задаем кнопки навигации
    nextEl: '.slider__next', // кнопка Next
    prevEl: '.slider__prev' // кнопка Prev
  },
  grabCursor: true, // менять иконку курсора
  thumbs: { // указываем на превью слайдер
    swiper: sliderThumbs // указываем имя превью слайдера
  },
  breakpoints: { // условия для разных размеров окна браузера
    0:
    { // при 0px и выше
      direction: 'horizontal', // горизонтальная прокрутка
      spaceBetween: 14,
      pagination: {
        el: '.slider__images .swiper-pagination',
        type: 'fraction',
      },
    },
    1024: { // при 768px и выше
      direction: 'vertical', // вертикальная прокрутка
    }
  },
});
