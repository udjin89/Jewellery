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
