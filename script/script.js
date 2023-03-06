import { initialCards, Card } from './card.js'
import { config, FormValidator } from './FormValidator.js';

const page = document.querySelector('.page');
const popupList = document.querySelectorAll('.popup');
const popupProfile = page.querySelector('.popup-profile');
const editButton = page.querySelector('.profile__edit-button');
const popupPlace = page.querySelector('.popup-place');
const addButton = page.querySelector('.profile__add-button');
const closeButtonList = document.querySelectorAll('.popup__close');
const formElementProfile = page.querySelector('.popup__form-profile');
const formElementPlace = page.querySelector('.popup__form-place');
const placesBox = document.querySelector(".elements");
const login = page.querySelector('.profile__title');
const job = page.querySelector('.profile__subtitle');
const nameInput = formElementProfile.querySelector('.popup__name-item_value_name');
const jobInput = formElementProfile.querySelector('.popup__name-item_value_job');
const titleInput = formElementPlace.querySelector('.popup__name-item_value_title');
const imageInput = formElementPlace.querySelector('.popup__name-item_value_link');
const formEditProfile = popupProfile.querySelector(".popup__form");
const formAddNewCard = popupPlace.querySelector(".popup__form");

function addCard(newCards, template) {
    const card = new Card(newCards, template);
    const cardElement = card.generateCard();
    placesBox.prepend(cardElement);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}

function openPopupProfile() {
    nameInput.value = login.textContent;
    jobInput.value = job.textContent;
    openPopup(popupProfile);

}

function openPopupEdit() {
    titleInput.value = "";
    imageInput.value = "";

    openPopup(popupPlace);
}

function handleFormSubmitProfile(evt) {
    evt.preventDefault();
    login.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup(popupProfile);

}

closeButtonList.forEach(btn => {
    const popup = btn.closest('.popup');
    btn.addEventListener('click', () => closePopup(popup));
})

function creatPlace(evt) {
    evt.preventDefault();
    const newCards = [
        {
            name: '',
            link: ''
        }
    ];
    newCards.name = titleInput.value;
    newCards.link = imageInput.value;
    addCard(newCards, ".element-template");
    closePopup(popupPlace);
    evt.target.reset();
}

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
        this._hideInputError;
    }
}

popupList.forEach((popup) => {
    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            closePopup(popup);
            this._hideInputError;

        }
    });
});

addButton.addEventListener('click', openPopupEdit);
editButton.addEventListener('click', openPopupProfile);
formElementProfile.addEventListener('submit', handleFormSubmitProfile);
formElementPlace.addEventListener('submit', creatPlace);
const formEditProfileValidator = new FormValidator(config, formEditProfile);
formEditProfileValidator.enableValidation();
const formAddNewCardValidator = new FormValidator(config, formAddNewCard);
formAddNewCardValidator.enableValidation();

initialCards.forEach((item) => {
    const card = new Card(item, ".element-template");
    const cardElement = card.generateCard();
    placesBox.append(cardElement);
});





