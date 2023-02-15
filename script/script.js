const page = document.querySelector('.page');
const popupList = document.querySelectorAll('.popup');
const popupProfile = page.querySelector('.popup-profile');
const editButton = page.querySelector('.profile__edit-button');
const popupPlace = page.querySelector('.popup-place');
const popupImage = page.querySelector('.popup-image');
const image = popupImage.querySelector(".popup__image");
const subtitle = popupImage.querySelector(".popup__subtitle");
const addButton = page.querySelector('.profile__add-button');

const closeButtonList = document.querySelectorAll('.popup__close');
const formElementProfile = page.querySelector('.popup__form-profile');
const formElementPlace = page.querySelector('.popup__form-place');
const popupForm = document.querySelector(".popup__form");
const popupInput = popupForm.querySelector(".popup__name-item");
const login = page.querySelector('.profile__title');
const job = page.querySelector('.profile__subtitle');
const nameInput = formElementProfile.querySelector('.popup__name-item_value_name');
const jobInput = formElementProfile.querySelector('.popup__name-item_value_job');
const titleInput = formElementPlace.querySelector('.popup__name-item_value_title');
const imageInput = formElementPlace.querySelector('.popup__name-item_value_link');
const placesBox = document.querySelector(".elements");
const placeTemplate = document.querySelector("#element").content;
const creatButton = document.querySelector(".creat__button");
const closePopupPlaceButton = popupPlace.querySelector('.popup__close');
const closePopupProfileButton = popupProfile.querySelector('.popup__close');
const closePopupImageButton = popupImage.querySelector('.popup__close');



function addCard(name, link) {
    const placeElement = document.querySelector("#element").content;
    const newElement = placeElement.querySelector('.element__rectangle').cloneNode(true);
    newElement.querySelector(".element__title").textContent = name;
    const elementImage = newElement.querySelector(".element__image");
    elementImage.src = link;
    elementImage.alt = name;

    addButton.addEventListener('click', openPopupEdit);
    newElement
        .querySelector('.element__heart')
        .addEventListener('click', toggleLike);
    newElement
        .querySelector('.element__trash')
        .addEventListener('click', deleteOnClick);
    elementImage.addEventListener('click', function () {
        image.src = link;
        subtitle.textContent = name;
        image.alt = name;
        openPopup(popupImage);
    });
    return newElement;
}


function renderInitialCards(initialCards) {
    initialCards.forEach((item) => {
        placesBox.append(addCard(item.name, item.link));
    })
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape); 

}

function toggleLike(e) {

    e.target.classList.toggle("element__heart_active");
}


function deleteOnClick(e) {
    e.target.closest(".element__rectangle").remove();
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
    placesBox.prepend(addCard(titleInput.value, imageInput.value));
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

renderInitialCards(initialCards);







