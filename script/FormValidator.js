export { config, FormValidator };

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__name-item',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_inactive',
  inputErrorClass: 'popup__name-item_error',
  errorClass: 'popup__name-item_active',
};

class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
  }
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass);
  };

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(config.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', 'disabled');
    } else {
      this._buttonElement.classList.remove(config.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  };

  _setEventListeners() {
    this.toggleButtonState();
    this._formElement.addEventListener('reset', () => {
      setTimeout(() => {
        this.toggleButtonState(this._inputList, this._buttonElement);
      }, 0);
    });
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    })
  };

  enableValidation() {
    this._setEventListeners();
  };
}