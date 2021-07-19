
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
