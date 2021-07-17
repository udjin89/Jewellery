const options = document.querySelector('.catalog__option-list');
if (options) {
  const optionsList = options.querySelectorAll('h3');

  optionsList.forEach((elem, index) => {

    elem.addEventListener('keydown', function (evt) {
      if (evt.key === 'Enter' || evt.key === ' ') {
        this.parentNode.classList.toggle('catalog__item--active');
      }
    });
  });

}
