export default class Popup {
    constructor(selectorPopup) {
        this._popupType = document.querySelector(selectorPopup);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    _handleEscClose(evt) {
        evt.key == 'Escape'
            ? this.close()
            : false;
    }
    _handleOverlayClose(evt) {
        evt.target === evt.currentTarget
            ? this.close()
            : false;
    }
    open() {
        this._popupType.classList.add('popup_opened');
        document.addEventListener("click", this._handleEscClose);
    }
    close() {
        this._popupType.classList.remove('popup_opened');
        document.removeEventListener("click", this._handleEscClose);
    }
    setEventListeners() {
        this._popupType.querySelector('.popup__close').addEventListener('click', () => {
            this.close();
        });
        this._popupType.addEventListener('click', (evt) => {
            this._handleOverlayClose(evt)
        });
    }
}