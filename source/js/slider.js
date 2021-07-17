const swiper = new Swiper('.products .swiper-container', {
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
        el: '.swiper-pagination',
        clickable: true,
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          return current + '  of  ' + (total);
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
    // swiper.pagination.destroy();
    swiper.pagination.update();
    swiper.pagination.render();
  }
}, false);
