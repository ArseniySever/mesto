import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._popupImage = this._popupType.querySelector(".popup__image");
    this._popupSubtitle = this._popupType.querySelector(".popup__subtitle");
  }
  open(data) {
    this._popupImage.src = data.link;
    this._popupImage.alt = data.name;
    this._popupSubtitle.textContent = data.name;

    super.open();
  }
}
