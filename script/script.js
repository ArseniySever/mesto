import {initialCards, Card } from './card.js'
import FormValidator from './FormValidator.js'
import {config} from "./validate.js";
export {closeByEscape};
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

const popupForm = document.querySelector(".popup__form"); 
const formEditProfile = popupProfile.querySelector(".popup__form");
const formAddNewCard = popupPlace.querySelector(".popup__form");




function addCard(newCards) { 
    const card = new Card(newCards, ".element-template");
    const cardElement = card.generateCard();
    document.querySelector('.elements').prepend(cardElement);
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
    placesBox.prepend(addCard(newCards));
    closePopup(popupPlace);
    evt.target.reset();
}

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

popupList.forEach((popup) => {
    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            closePopup(popup);
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







