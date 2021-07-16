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
