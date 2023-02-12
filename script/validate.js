const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__name-item_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__name-item_active');
  };
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__name-item_error');
    errorElement.classList.remove('popup__name-item_active');
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__name-item'));
    const buttonElement = formElement.querySelector('.popup__save');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      const fieldsetList = Array.from(formElement.querySelectorAll('.popup__set'));
  
    fieldsetList.forEach((fieldSet) => {
        setEventListeners(fieldSet);
      }); 
    })
  };
  
  enableValidation();
  function hasInvalidInput(inputList){
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });  
  }
  function toggleButtonState(inputList, buttonElement){
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup__save_inactive');
      buttonElement.setAttribute('disabled', 'disabled');
    } else {
      buttonElement.classList.remove('popup__save_inactive');
      buttonElement.removeAttribute('disabled', 'disabled');
    }
  }
  
  