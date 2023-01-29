var page = document.querySelector('.page');
var popup = document.querySelectorAll('.popup');
var popupProfile = page.querySelector('.popup-profile');
var editButton = page.querySelector('.profile__edit-button');
var popupPlace = page.querySelector('.popup-place');
var popupImage = page.querySelector('.popup-image');

var addButton = page.querySelector('.profile__add-button');

var closeButton = document.querySelectorAll('.popup__close');
var formElementProf = page.querySelector('.popup__form-profile');
var formElementPla = page.querySelector('.popup__form-place');

var login = page.querySelector('.profile__title');
var job = page.querySelector('.profile__subtitle');
var nameInput = formElementProf.querySelector('.popup__name-item_value_name');
var jobInput = formElementProf.querySelector('.popup__name-item_value_job');
let titleInput = formElementPla.querySelector('.popup__name-item_value_title');
var imageInput = formElementPla.querySelector('.popup__name-item_value_link');
const placesBox = document.querySelector(".elements");
const placeTemplate = document.querySelector("#element").content;
var trash = document.querySelectorAll('.element__trash');
var heart = document.querySelectorAll('.element__heart');

const creatButton = document.querySelector(".creat__button");

const initialCards = [
    {
        name: 'Тихвин',
        link: 'https://sun6-23.userapi.com/s/v1/if1/tfLbly28AUsC2zFfiGLw_DGpr8qTPjXO4ko6czg5B9TWl_Cs1chlVb_6gFmKr6aUQJvDV5fY.jpg?size=902x902&quality=96&crop=170,0,902,902&ava=1'
    },
    {
        name: 'Старая Ладога',
        link: 'https://35photo.pro/photos_main/1266/6330385.jpg'
    },
    {
        name: 'Гатчина',
        link: 'https://kartinkin.net/pics/uploads/posts/2022-08/1659628366_24-kartinkin-net-p-osennii-peterburg-priroda-krasivo-foto-24.jpg'
    },
    {
        name: 'Выборг',
        link: 'https://kareliya-tur.ru/images/foto-vyborg/zimoj/vyborgskij-zamok-zimoj.jpg'
    },
    {
        name: 'Петергорф',
        link: 'http://news-piter.ru/wp-content/uploads/2012/03/DSC_9151.jpg'
    },
    {
        name: 'Орешек',
        link: 'https://takeyourtrip.ru/images/posts/8789/HQ/IMG_5287.jpg'
    }
];

const placeInf = initialCards.map(function (item) {
    return {
        name: item.name,
        link: item.link
    };
});
function closePopup() {
    for (var i = 0; i < popup.length; i++) {
            popup[i].classList.remove('popup_opened');
        };
}

function lovePlace(e) {
    e.target.classList.toggle("element__heart_active");
}
function creation() {
    placeInf.forEach(creationCart);
}

function onClickDelite(e) {
    e.target.closest(".element__rectangle").remove();
}
function creationCart({ name, link }) {
    
    const placeElement = placeTemplate.querySelector(".element__rectangle").cloneNode(true);
    placeElement.querySelector(".element__title").textContent = name;
    placeElement.querySelector(".element__image").src = link;
    
    placeElement.querySelector('.element__image').addEventListener ("click", ()=> {
        popupImage.classList.add('popup_opened');
        popupImage.querySelector(".popup__image").src = link;
        popupImage.querySelector(".popup__subtitle").textContent = name;
       
    });
    placeElement
        .querySelector('.element__heart')
        .addEventListener('click', lovePlace);
    placeElement
        .querySelector('.element__trash')
        .addEventListener('click', onClickDelite);
    placesBox.prepend(placeElement);
    return placeElement;
    

}

function openPopupProfile() {
    nameInput.value = login.textContent;
    jobInput.value = job.textContent;
    popupProfile.classList.add('popup_opened');
    
}
function openPopupEdit() {
    popupPlace.classList.add('popup_opened');
    
}


function handleFormSubmit(evt) {
    evt.preventDefault();
    login.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup();

}

function creatPlace(evt){
    evt.preventDefault();
    const placeElement = placeTemplate.querySelector(".element__rectangle").cloneNode(true);
    placeElement. querySelector('.element__title').textContent = titleInput.value;
    placeElement. querySelector('.element__image').src = imageInput.value;
    closePopup();
    placeElement
        .querySelector('.element__heart')
        .addEventListener('click', lovePlace);
    placeElement
        .querySelector('.element__trash')
        .addEventListener('click', onClickDelite);
    placesBox.prepend(placeElement);
    return placeElement;
}

creation();
addButton.addEventListener('click', openPopupEdit);
editButton.addEventListener('click', openPopupProfile);
closeButton.forEach(button => button.addEventListener("click", closePopup));
formElementProf.addEventListener('submit', handleFormSubmit);
formElementPla.addEventListener('submit', creatPlace);
trash.forEach(button => button.addEventListener("click", onClickDelite));
heart.forEach(button => button.addEventListener("click", lovePlace));






