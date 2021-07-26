
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
