export {Card, popupElement}; 

const popupElement = document.querySelector('.popup-image'); 
 
 
class Card { 
    constructor(data, templateSelector, handleImageClick) { 
        this._data = data; 
        this._templateSelector = templateSelector; 
        this._name = data.name; 
        this._link = data.link; 
        this._handleImageClick = handleImageClick;


    } 
    _getTemplate() { 
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
        this._heart = this._element.querySelector('.element__heart');

        this._image.addEventListener("click", () => {
        this._handleImageClick(this._data);
      });

        this._heart.addEventListener('click', () => { 
            this._like(); 
        }); 
        
        this._element.querySelector('.element__trash').addEventListener('click', () => { 
            this._delete(); 
        }); 
     
    } 
    _like() { 
        this._heart.classList.toggle("element__heart_active"); 
    } 
    _delete() { 
        this._element.closest(".element__rectangle").remove(); 
    } 
 

} 