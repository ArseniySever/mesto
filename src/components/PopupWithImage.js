import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._popupImage = this._popupType.querySelector(".popup__image");
    this._popupSubtitle = this._popupType.querySelector(".popup__subtitle");
  }
  open(name, link) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupSubtitle.textContent = name;

    super.open();
  }
}
