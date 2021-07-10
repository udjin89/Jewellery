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
