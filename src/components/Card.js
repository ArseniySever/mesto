export { Card };
class Card {
  constructor({
    cardData,
    templateSelector,
    userId,
    handleCardClick ,
    handleDeleteIconClick,
    handleSetLike,
    handleRemoveLike
  }) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._userId = userId;
    this._cardId = cardData._id;
    this._cardOwnerId = cardData.owner._id;
    this._handleCardClick  = handleCardClick ;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._likes = cardData.likes;
    this._handleSetLike = handleSetLike;
    this._handleRemoveLike = handleRemoveLike;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector(".element__rectangle")
      .cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector(".element__image");
    this._heart = this._element.querySelector('.element__heart');
    this._likesNumber = this._element.querySelector(".element__heart-number");
    this._deleteBtn = this._element.querySelector('.element__trash');
    this._image.alt = this._name;
    this._image.src = this._link;
    this._element.querySelector(".element__title").textContent = this._name;
    this._hasDeleteBtn();
    this._isCardLiked();
    this._likesNumber.textContent = this._likes.length;
    this._setEventListeners();
    return this._element;
  }
  _setEventListeners() {

    this._image.addEventListener("click", () => {
      this._handleCardClick (this._name, this._link);
    });

    this._deleteBtn.addEventListener("click", () => {
      this._handleDeleteIconClick(this._cardId);
    });
    this._heart.addEventListener("click", () => {
      if (this._heart.classList.contains("element__heart_active")) {
        this._handleRemoveLike(this._cardId);
      } else {
        this._handleSetLike(this._cardId);
      }
    });
  } 
  deleteCard() {
    this._element.remove();
    this._element = null;
  }
  _isCardLiked() {
    if (this._likes.some((user) => {
      return this._userId === user._id;
    })) {
      this._heart.classList.add('element__heart_active');
    }
  }
  handleLikeCard(cardData) {
    this._likes = cardData.likes;
    this._likesNumber.textContent = this._likes.length;
    this._heart.classList.toggle("element__heart_active");
  }
  _hasDeleteBtn() {
    if (this._userId !== this._cardOwnerId) {
      this._deleteBtn.remove();
    }
  }
}
