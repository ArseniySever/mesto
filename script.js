let page = document.querySelector('.page');
let popup = page.querySelector('.popup');
let editButton = page.querySelector('.profile__edit-button');
let closeButton = page.querySelector('.popup__close');
let formElement = page.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__name-item_name');
let jobInput = formElement.querySelector('.popup__name-item_job');
let Name = page.querySelector('.profile__title');
let Job = page.querySelector('.profile__subtitle');
let save = page.querySelector('.popup__save');
let form = formElement.querySelector('.popup__form');
let heart = document.querySelector('.element__heart');

function active_button(){
    popup.classList.add('popup__opened');
}
function close_button(){
    popup.classList.remove('popup__opened');
}

editButton.addEventListener('click', active_button);
closeButton.addEventListener('click', close_button);

function handleFormSubmit (evt) {
    evt.preventDefault();
    jobInput.value;
    nameInput.value;
    Name.textContent = nameInput.value;
    Job.textContent = jobInput.value;   
}

form.addEventListener('submit', handleFormSubmit);
save.addEventListener('click', close_button);
closeButton.addEventListener('click', close_button);

function active_heart(){
    heart.classList.remove('element__heart');
    heart.classList.add('element__heart_active');
}
heart.addEventListener('click', active_heart);

