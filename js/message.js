const body = document.querySelector('body');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

const isEscEvent = (evt) => {
  if(evt.keyCode === 27){
    return true;
  }
};

const onEscKeydown = (evt) => {
  if(isEscEvent(evt)){
    evt.preventDefault();
    closeMessage();
  }
};

const onOverlayClick = () => {
  closeMessage();
};

const onErrorButtonClick = () => {
  closeMessage();
};

const showSuccessMessage = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  body.appendChild(successMessage);
  document.addEventListener('click', onOverlayClick);
  document.addEventListener('keydown', onEscKeydown);
  body.style.overflow = 'hidden';
};

const showErrorMessage = () => {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  body.appendChild(errorMessage);
  document.querySelector('.error__button').addEventListener('click', onErrorButtonClick);
  document.addEventListener('keydown', onEscKeydown);
  body.style.overflow = 'hidden';
};

function closeMessage() {
  const message = document.querySelector('.success') || document.querySelector('.error');
  message.remove();
  document.removeEventListener('click', onOverlayClick);
  document.removeEventListener('keydown', onEscKeydown);
  body.style.overflow = 'auto';
}

const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.textContent = message;
  alert.classList.add('alert');
  body.appendChild(alert);

  setTimeout(() => {
    alert.remove();
  }, 2000);
};

export { showSuccessMessage, showErrorMessage, showAlert };
