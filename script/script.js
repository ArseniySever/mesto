let page = document.querySelector('.page');
let popup = page.querySelector('.popup');
let editButton = page.querySelector('.profile__edit-button');
let closeButton = page.querySelector('.popup__close');
let formElement = page.querySelector('.popup__form');
let login = page.querySelector('.profile__title');
let job = page.querySelector('.profile__subtitle');
let nameInput = formElement.querySelector('.popup_item_name');
let jobInput = formElement.querySelector('.popup_item_job');
let save = page.querySelector('.popup__save');
let heart = document.querySelector('.element__heart');

function open_popup() {
    popup.classList.add('popup_opened');
}
function close_popup() {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    login.textContent = nameInput.value;
    job.textContent = jobInput.value;
}

function click_heart() {
    heart.classList.add('element__heart_active');
}

heart.addEventListener('click', click_heart);
editButton.addEventListener('click', open_popup);
formElement.addEventListener('submit', handleFormSubmit);
save.addEventListener('click', close_popup);
closeButton.addEventListener('click', close_popup);


