let page = document.querySelector('.page');
let popup = page.querySelector('.popup');
let editButton = page.querySelector('.profile__edit-button');
let closeButton = page.querySelector('.popup__close');
let formElement = page.querySelector('.popup__form');
let login = page.querySelector('.profile__title');
let job = page.querySelector('.profile__subtitle');
let nameInput = formElement.querySelector('.popup__name-item_value_name');
let jobInput = formElement.querySelector('.popup__name-item_value_job');
let save = popup.querySelector('.popup__save');
let heart = document.querySelector('.element__heart');

function openPopup() {
    nameInput.value = login.textContent;
    jobInput.value = job.textContent;
    popup.classList.add('popup_opened');


}
function closePopup() {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    login.textContent = nameInput.value;
    job.textContent = jobInput.value;
    save.addEventListener('click', closePopup);

}

function clickHeart() {
    heart.classList.add('element__heart_active');
}

heart.addEventListener('click', clickHeart);
editButton.addEventListener('click', openPopup);
formElement.addEventListener('submit', handleFormSubmit);
closeButton.addEventListener('click', closePopup);


