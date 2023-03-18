import './index.css';

import { initialCards, Card } from '../script/card.js'
import { config, FormValidator } from '../script/FormValidator.js';
import PopupWithForm from "../script/PopupWithForm.js";
import Section from "../script/Section.js";
import PopupWithImage from "../script/PopupWithImage.js";
import UserInfo from "../script/UserInfo.js";

import logo from '../images/Vector.svg';
import avatar from '../images/image.jpg';


const whoIsTheGoat = [
  { name: 'logoImage', image: logo },
  { name: 'avatarImage', link: avatar },
]; 



const page = document.querySelector('.page');
const popupProfile = page.querySelector('.popup-profile');
const editButton = page.querySelector('.profile__edit-button');
const popupPlace = page.querySelector('.popup-place');
const addButton = page.querySelector('.profile__add-button');
const formElementPlace = page.querySelector('.popup__form-place');
const placesBox = document.querySelector(".elements");
const login = page.querySelector('.profile__title');
const job = page.querySelector('.profile__subtitle');
const titleInput = formElementPlace.querySelector('.popup__name-item_value_title');
const imageInput = formElementPlace.querySelector('.popup__name-item_value_link');
const formEditProfile = popupProfile.querySelector(".popup__form");
const formAddNewCard = popupPlace.querySelector(".popup__form");
const nameInput = formEditProfile.querySelector('.popup__name-item_value_name');
const jobInput = formEditProfile.querySelector('.popup__name-item_value_job');
const formProfileValidator = new FormValidator(config, formEditProfile);
formProfileValidator.enableValidation();
const formCardValidator = new FormValidator(config, formAddNewCard);
formCardValidator.enableValidation();
const userInfoNew = new UserInfo({ nameSelector: login, jobSelector: job });
editButton.addEventListener("click", () => {
  const getUserInfoNew = userInfoNew.getUserInfo();
  nameInput.value = getUserInfoNew.nameSelector;
  jobInput.value = getUserInfoNew.jobSelector;
  popupProfileElement.open();
  formProfileValidator.toggleButtonState();
});
const cardList = new Section({
  renderer: (item) => {
    addCard(item, ".element-template");
    cardList.addItem(addCard(item));
  },
},
  ".elements"
);
function addCard(newCards, template) {
  const card = new Card(newCards, template);
  const cardElement = card.generateCard();
  placesBox.prepend(cardElement);
}
function creatPlace() {
  const newCards = [
    {
      name: '',
      link: ''
    }
  ];
  newCards.name = titleInput.value;
  newCards.link = imageInput.value;
  addCard(newCards, ".element-template");

}
const popupProfileElement = new PopupWithForm({
  selectorPopup: ".popup-profile",
  handleFormSubmit: () => {
    userInfoNew.setUserInfo(nameInput, jobInput);
  },
})
popupProfileElement.setEventListeners();
const popupMestoElement = new PopupWithForm({
  selectorPopup: ".popup-place",
  handleFormSubmit: () => {
    const newCard = creatPlace();
    return newCard;
  },
})
popupMestoElement.setEventListeners();
const popupImage = new PopupWithImage(".popup-image");
popupImage.setEventListeners();
addButton.addEventListener("click", () => {
  popupMestoElement.open();
  formCardValidator.toggleButtonState();
});
const formEditProfileValidator = new FormValidator(config, formEditProfile);
formEditProfileValidator.enableValidation();
const formAddNewCardValidator = new FormValidator(config, formAddNewCard);
formAddNewCardValidator.enableValidation();
initialCards.forEach((item) => {
  addCard(item, ".element-template");
}); 