
const overlay = document.querySelector('.bg-overlay');
const buttons = document.querySelectorAll('.button--login');
const modal = document.querySelector('.modal--login');
const buttonClose = modal.querySelector('.button--close');
const inputEmail = modal.querySelector('input[type=email]');

if (buttons) {
  buttons.forEach(function (item) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      overlay.classList.remove('hidden');
      modal.classList.remove('hidden');
      modal.classList.add("modal-show-x");
      inputEmail.focus();
      // body.dataset.scrollY = getBodyScrollTop() // сохраним значение скролла
      // body.style.top = `-${body.dataset.scrollY}px`
      body.classList.add('overflow');
      eventclose();

    });
  });

}

function eventclose() {
  window.addEventListener('keydown', onEscKeydown);
  overlay.addEventListener('click', onOverlayClick);
  buttonClose.addEventListener('click', removeModal);
}
function onEscKeydown(evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    removeModal();
  }
}

function removeModal() {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
  modal.classList.remove("modal-show-x");
  body.classList.remove('overflow');
  window.removeEventListener('keydown', onEscKeydown);
  overlay.removeEventListener('click', onOverlayClick);

}

function onOverlayClick() {
  console.log('clickocerlay');
  removeModal();
}

function getBodyScrollTop() {
  return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
}
