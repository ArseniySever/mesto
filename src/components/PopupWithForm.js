import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor({ selectorPopup, handleFormSubmit }) {
    super(selectorPopup);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupType.querySelector(".popup__form");
    this._inputList = this._popupForm.querySelectorAll(".popup__name-item");
    this._sumbitButton = this._popupType.querySelector(".popup__save");
    this._sumbitButtonText = this._sumbitButton.textContent;
  }
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );
    return this._formValues;
  }
  close() {
    super.close();
    this._popupForm.reset();
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupType.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
  loading(isLoading) {
    if (isLoading) {
      this._sumbitButton.textContent = "Сохранение...";
    } else {
      this._sumbitButton.textContent = this._sumbitButtonText;
    }
  }
}
