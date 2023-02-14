const showInputError = (settings, formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);

};



const hideInputError = (settings, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.classList.remove(settings.errorClass);
  errorElement.textContent = '';
};



const checkInputValidity = (settings, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(settings, formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(settings, formElement, inputElement);
  }
};



const setEventListeners = (settings, formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const buttonElement = formElement.querySelector(settings.submitButtonSelector);
  toggleButtonState(settings, inputList, buttonElement);
  formElement.addEventListener('reset', () => {
    setTimeout(() => {
        toggleButtonState(settings, inputList, buttonElement);
      }, 0); 
    });
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(settings, formElement, inputElement);
      toggleButtonState(settings, inputList, buttonElement);
    });
  });
};



const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
      setEventListeners(settings, formElement);
    })
 };



const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

function toggleButtonState(settings, inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    disableButton(settings, buttonElement);
  } else {
    enableButton(settings, buttonElement);
  }
};

const disableButton = (settings, buttonElement) => {
  buttonElement.classList.add(settings.inactiveButtonClass);
  buttonElement.setAttribute('disabled', "disabled");

}

const enableButton = (settings, buttonElement) => {
  buttonElement.classList.remove(settings.inactiveButtonClass);
  buttonElement.removeAttribute('disabled', "disabled");

}


enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__name-item',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__name-item_error',
  errorClass: 'popup__name-item_active'
}); 