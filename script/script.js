let page = document.querySelector('.page');
let popupList = document.querySelectorAll('.popup');
let popupProfile = page.querySelector('.popup-profile');
let editButton = page.querySelector('.profile__edit-button');
let popupPlace = page.querySelector('.popup-place');
let popupImage = page.querySelector('.popup-image');

let addButton = page.querySelector('.profile__add-button');

let closeButtonList = document.querySelectorAll('.popup__close');
let formElementProfile = page.querySelector('.popup__form-profile');
let formElementPlace = page.querySelector('.popup__form-place');

let login = page.querySelector('.profile__title');
let job = page.querySelector('.profile__subtitle');
let nameInput = formElementProfile.querySelector('.popup__name-item_value_name');
let jobInput = formElementProfile.querySelector('.popup__name-item_value_job');
let titleInput = formElementPlace.querySelector('.popup__name-item_value_title');
let imageInput = formElementPlace.querySelector('.popup__name-item_value_link');
const placesBox = document.querySelector(".elements");
const placeTemplate = document.querySelector("#element").content;
const creatButton = document.querySelector(".creat__button");


function addCard(name, link) {
    const placeElement = document.querySelector("#element").content; 
    const newElement = placeElement.querySelector('.element__rectangle').cloneNode(true);  
    newElement.querySelector(".element__title").textContent = name;
    newElement.querySelector(".element__image").src = link;
    newElement.querySelector(".element__image").alt = name;
    newElement
        .querySelector('.element__heart')
        .addEventListener('click', likeButton);
        newElement
        .querySelector('.element__trash')
        .addEventListener('click', DeleteOnClick);
    newElement.querySelector('.element__image').addEventListener('click', function() {
        popupImage.querySelector(".popup__image").src = link;
        popupImage.querySelector(".popup__subtitle").textContent = name;
        openPopup(popupImage);
    });
    return newElement;
}


function arrayInitialCards(initialCards) {
    initialCards.forEach((item) => {
        placesBox.append(addCard(item.name, item.link));
    })
}

function closePopup() {
    for (var i = 0; i < popupList.length; i++) {
            popupList[i].classList.remove('popup_opened');
        };
}

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function likeButton(e) {
    
    e.target.classList.toggle("element__heart_active");
}


function DeleteOnClick(e) {
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



function creatPlace(event) {
    event.preventDefault();
    placesBox.prepend(addCard(titleInput.value, imageInput.value));

    closePopup(popupPlace);
    event.target.reset(); 
}

addButton.addEventListener('click', openPopupEdit);
editButton.addEventListener('click', openPopupProfile);
closeButtonList.forEach(button => button.addEventListener("click", closePopup));
formElementProfile.addEventListener('submit', handleFormSubmitProfile);
formElementPlace.addEventListener('submit', creatPlace);

arrayInitialCards(initialCards);







