
export {initialCards, Card};
const initialCards = [
    {
        name: 'Тихвин',
        link: 'https://sun6-23.userapi.com/s/v1/if1/tfLbly28AUsC2zFfiGLw_DGpr8qTPjXO4ko6czg5B9TWl_Cs1chlVb_6gFmKr6aUQJvDV5fY.jpg?size=902x902&quality=96&crop=170,0,902,902&ava=1'
    },
    {
        name: 'Старая Ладога',
        link: 'https://35photo.pro/photos_main/1266/6330385.jpg'
    },
    {
        name: 'Гатчина',
        link: 'https://sun9-61.userapi.com/tUYFzmhM9m6W-cY17yM7qcT2_XEupql_ml-ORQ/4UBZEAvWm7Q.jpg'
    },
    {
        name: 'Выборг',
        link: 'https://kareliya-tur.ru/images/foto-vyborg/zimoj/vyborgskij-zamok-zimoj.jpg'
    },
    {
        name: 'Петергорф',
        link: 'http://news-piter.ru/wp-content/uploads/2012/03/DSC_9151.jpg'
    },
    {
        name: 'Орешек',
        link: 'https://takeyourtrip.ru/images/posts/8789/HQ/IMG_5287.jpg'
    }
];
const popupElement = document.querySelector('.popup-image');
const image = popupElement.querySelector(".popup__image");
const subtitle = popupElement.querySelector(".popup__subtitle");
const imageElement = document.querySelector('.element__image');


class Card {
    constructor(data, templateSelector) {
        this._templateSelector = templateSelector;
        this._name = data.name;
        this._link = data.link;
    }
    _getTemplate(){
        const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element__rectangle')
        .cloneNode(true);
        return cardElement;
    }
    generateCard() {
        this._element = this._getTemplate();
        this._image = this._element.querySelector('.element__image');
        this._setEventListeners();
        this._element.querySelector('.element__title').textContent = this._name;
        this._image.alt = this._name;
        this._image.src = this._link;
        return this._element;
    }
    
    _setEventListeners() {
        this._element.querySelector('.element__heart').addEventListener('click', () => {
          this._like();
      });
      this._image.addEventListener('click', () => {
            this._handleOpenPopup()
      });
       this._element.querySelector('.element__trash').addEventListener('click', () => {
        this._delete();
    });
    
    }
    _like() {
        this._element.querySelector('.element__heart').classList.toggle("element__heart_active");
    }
    _delete(){
        this._element.closest(".element__rectangle").remove();
    }
    _addDataToPopup() {
        image.src = this._link;
        image.alt = this._name;
        subtitle.textContent = this._name;
    }
    _handleOpenPopup() {
        this._addDataToPopup();
        popupElement.classList.add('popup_opened');
    } 
    _handleClosePopup() {
        popupElement.classList.remove('popup_opened');
    }
}

