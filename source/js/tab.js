
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
