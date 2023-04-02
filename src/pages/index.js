import "./index.css";
import { Card } from "../components/Card.js";
import {
  validationConfig,
  popupPhoto,
  popupSubtitle,
  placesBox,
  buttonEdit,
  buttonAdd,
  login,
  job,
  avatar,
  popupProfile,
  formEditProfile,
  formAddNewCard,
  formAddAvatar,
  nameInput,
  avatarEdit,
  buttonEditeAvatar,
  popupAvatar,
  popupEditeAvatar,
  avatarInput,
  jobInput,
} from "../components/utils/constants.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import { FormValidator } from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithDeleter from "../components/PopupWithDeleter.js";

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-63',
  headers: {
    authorization: 'b1be6ff6-5ee2-4424-9627-8adc5e79825a',
    'Content-Type': 'application/json',
  }
})

let userId;

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([initialCards, userData]) => {
    userInfoNew.setUserInfo(userData);
    userId = userData._id;
    cardSection.renderItems(initialCards);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  })


  

const userInfoNew = new UserInfo({
  nameLink: login,
  jobLink: job,
  avatarLink: avatar,
});

const formProfileValidator = new FormValidator(
  validationConfig,
  formEditProfile
);
formProfileValidator.enableValidation();

const formCardValidator = new FormValidator(validationConfig, formAddNewCard);
formCardValidator.enableValidation();

const formAvatarEditValidate = new FormValidator(
  validationConfig,
  formAddAvatar
);
formAvatarEditValidate.enableValidation();

const popupProfileElement = new PopupWithForm({
  selectorPopup: ".popup-profile",
  handleFormSubmit: (dataForm) => {
    popupProfileElement.loading(true);
    api
      .editUserInfo(dataForm)
        .then((dataForm) => {
          userInfoNew.setUserInfo(dataForm);
          popupProfileElement.close();
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        })
        .finally(() => {
          popupProfileElement.loading(false);
        });
  },
});
popupProfileElement.setEventListeners();

const popupAvatarElement = new PopupWithForm({
  selectorPopup: ".popup-avatar",
  handleFormSubmit: (data) => {
    popupAvatarElement.loading(true);
    api
      .editAvatar(data)
        .then((data) => {
          avatar.src = data.avatar;
          popupAvatarElement.close();
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        })
        .finally(() => {
          popupAvatarElement.loading(false);
        });
  },
});
popupAvatarElement.setEventListeners();

buttonEditeAvatar.addEventListener("click", () => {
  popupAvatarElement.open();
  formAvatarEditValidate.toggleButtonState();
});

buttonEdit.addEventListener("click", () => {
  const getUserInfoNew = userInfoNew.getUserInfo();
  nameInput.value = getUserInfoNew.name;
  jobInput.value = getUserInfoNew.about;
  popupProfileElement.open();
});

const createPlace = (cardData) => {
  const card = new Card({
    cardData: cardData,
    templateSelector: ".element-template",
    userId: userId,
    handleCardClick: (name, link) => {
      popupImage.open(name, link);
    },
    handleDeleteIconClick: (cardId) => {
      deleteCardPopup.open();
      deleteCardPopup.submitCallback(() => {
        api.deleteCard(cardId)
            .then(() => {
              deleteCardPopup.close();
              card.deleteCard();
            })
            .catch((err) => {
              console.log(`Ошибка: ${err}`);
            });
        });
    },
    handleSetLike: (cardId) => {
      api.setLike(cardId)
          .then((cardData) => {
            card.handleLikeCard(cardData);
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
    },
    handleRemoveLike: (cardId) => {
      api
        .deleteLike(cardId)
          .then((cardData) => {
            card.handleLikeCard(cardData);
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
    },
  });
  const cardElement = card.generateCard();
  return cardElement;
};

const cardSection = new Section(
  {
    renderer: (item) => {
      const placeElement = createPlace(item); 
      cardSection.addItem(placeElement);
    },
  },
  ".elements"
);

const deleteCardPopup = new PopupWithDeleter({
  selectorPopup: ".popup-delete",
});
deleteCardPopup.setEventListeners();

const popupMestoElement = new PopupWithForm({
  selectorPopup: ".popup-place",
  handleFormSubmit: (formData) => {
    popupMestoElement.loading(true);
    api.addCard(formData)
      .then((formData) => {
        cardSection.addItem(createPlace(formData));
        popupMestoElement.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        popupMestoElement.loading(false);
      });
  },
});
popupMestoElement.setEventListeners();

buttonAdd.addEventListener("click", () => {
  formCardValidator.toggleButtonState();
  popupMestoElement.open();
});


const popupImage = new PopupWithImage(".popup-image");
popupImage.setEventListeners();
