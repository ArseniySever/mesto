import Popup from "./Popup.js";

export default class PopupWithDeleter extends Popup {
  constructor({ selectorPopup }) {
    super(selectorPopup);
    this._form = this._popupType.querySelector(".popup__form");
  }

  submitCallback(removing) {
    this._handleSubmit = removing;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("click", (event) => {
      event.preventDefault();
      this._handleSubmit();
    });
  }
}
