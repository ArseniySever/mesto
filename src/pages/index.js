import "./index.css";
import { Card } from "../components/Card.js";
import {
  validationConfig,
  initialCards,
  popupPhoto,
  popupSubtitle,
  placesBox,
  buttonEdit,
  buttonAdd,
  login,
  job,
  titleInput,
  imageInput,
  formEditProfile,
  formAddNewCard,
  nameInput,
  jobInput,
} from "../components/utils/constants.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import { FormValidator } from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import PlaceInfo from "../components/PlaceInfo.js";
import logo from "../images/Vector.svg";
import avatar from "../images/image.jpg";

const formProfileValidator = new FormValidator(
  validationConfig,
  formEditProfile
);
formProfileValidator.enableValidation();
const formCardValidator = new FormValidator(validationConfig, formAddNewCard);
formCardValidator.enableValidation();
const userInfoNew = new UserInfo({ nameLink: login, jobLink: job });
const placeInfoNew = new PlaceInfo({
  nameLink: popupSubtitle,
  sourceLink: popupPhoto,
});

buttonEdit.addEventListener("click", () => {
  const getUserInfoNew = userInfoNew.getUserInfo();
  nameInput.value = getUserInfoNew.name;
  jobInput.value = getUserInfoNew.job;
  popupProfileElement.open();
  formProfileValidator.toggleButtonState();
});
const cardSection = new Section(
  {
    renderer: (item) => {
      const placeElement = createPlace(item, ".element-template");
      cardSection.addItem(placeElement);
    },
  },
  ".elements"
);
cardSection.renderItems(initialCards);

function createPlace(cardData, template) {
  const card = new Card(cardData, template, (card) => popupImage.open(card));
  const cardElement = card.generateCard();
  return cardElement;
}
function addCard() {
  const getPlaceInfoNew = placeInfoNew.getPlaceInfo();
  const createdCard = createPlace(getPlaceInfoNew, ".element-template");
  cardSection.addItem(createdCard);
}

const popupProfileElement = new PopupWithForm({
  selectorPopup: ".popup-profile",
  handleFormSubmit: (formData) => {
    userInfoNew.setUserInfo({ name: formData.name, job: formData.about });
  },
});
popupProfileElement.setEventListeners();

const popupMestoElement = new PopupWithForm({
  selectorPopup: ".popup-place",
  handleFormSubmit: (formData) => {
    placeInfoNew.setPlaceInfo({ name: formData.name, link: formData.link });
    const newCard = addCard();
  },
});
popupMestoElement.setEventListeners();

const popupImage = new PopupWithImage(".popup-image");
popupImage.setEventListeners();

buttonAdd.addEventListener("click", () => {
  popupMestoElement.open();
  formCardValidator.toggleButtonState();
});
