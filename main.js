(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t,n,r,o,i,a,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._templateSelector=n,this._name=t.name,this._link=t.link,this._userId=r,this._cardId=t._id,this._cardOwnerId=t.owner._id,this._handleImageClick=o,this._handleCardClick=handleCardClick,this._handleDeleteIconClick=i,this._likes=t.likes,this._handleSetLike=a,this._handleRemoveLike=u}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element__rectangle").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._image=this._element.querySelector(".element__image"),this._heart=this._element.querySelector(".element__heart"),this._element.querySelector(".element__title").textContent=this._name,this._likesNumber=this._element.querySelector(".element__heart-number"),this._deleteBtn=this._element.querySelector(".element__trash"),this._image.alt=this._name,this._image.src=this._link,this._hasDeleteBtn(),this._isCardLiked(),this._likesNumber.textContent=this._likes.length,this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._image.addEventListener("click",(function(){e._handleImageClick(e._name,e._link)})),this._deleteBtn.addEventListener("click",(function(){e._handleDeleteIconClick(e._cardId)})),this._heart.addEventListener("click",(function(){e._heart.classList.contains("element__heart_active")?e._handleRemoveLike(e._cardId):e._handleSetLike(e._cardId)}))}},{key:"_hasDeleteBtn",value:function(){this._userId!==this._cardOwnerId&&this._deleteBtn.remove()}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"handleLikeCard",value:function(e){this._likes=e.likes,this._likesNumber.textContent=this._likes.length,this.heart.classList.toggle("element__heart_active")}},{key:"_isCardLiked",value:function(){var e=this;this._likes.some((function(t){return e._userId===t._id}))&&this._heart.classList.add("element__like-btn_active")}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}(),r={formSelector:".popup__form",inputSelector:".popup__name-item",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_inactive",inputErrorClass:"popup__name-item_error",errorClass:"popup__name-item_active"},o=document.querySelector(".page"),i=o.querySelector(".popup-profile"),a=o.querySelector(".profile__edit-button"),u=o.querySelector(".popup-place"),l=o.querySelector(".popup-avatar"),c=(o.querySelector(".profile__avatar"),o.querySelector(".profile__add-button")),s=o.querySelector(".popup__form-place"),f=(document.querySelector(".elements"),o.querySelector(".profile__title"),o.querySelector(".profile__subtitle"),o.querySelector(".profile__avatar")),p=o.querySelector(".profile__avatar-edit"),y=(s.querySelector(".popup__name-item_value_title"),s.querySelector(".popup__name-item_value_link"),i.querySelector(".popup__form")),h=u.querySelector(".popup__form"),m=l.querySelector(".popup__form"),v=y.querySelector(".popup__name-item_value_name"),d=y.querySelector(".popup__name-item_value_job");function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}m.querySelector(".popup__name-item_value_avatar"),o.querySelector(".popup__image"),o.querySelector(".popup__subtitle");var S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupType=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"open",value:function(){this._popupType.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupType.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupType.querySelector(".popup__close").addEventListener("click",(function(){e.close()})),this._popupType.addEventListener("click",(function(t){e._handleOverlayClose(t)}))}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e){var t,n=e.selectorPopup,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._popupForm=t._popupType.querySelector(".popup__form"),t._inputList=t._popupForm.querySelectorAll(".popup__name-item"),t._sumbitButton=t._popupType.querySelector(".popup__save"),t._sumbitButtonText=t._sumbitButton.textContent,t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"close",value:function(){w(j(a.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setEventListeners",value:function(){var e=this;w(j(a.prototype),"setEventListeners",this).call(this),this._popupType.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"loading",value:function(e){this._sumbitButton.textContent=e?"Сохранение...":this._sumbitButtonText}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(S);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==C(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popupType.querySelector(".popup__image"),t._popupSubtitle=t._popupType.querySelector(".popup__subtitle"),t}return t=a,(n=[{key:"open",value:function(e){this._popupImage.src=e.link,this._popupImage.alt=e.name,this._popupSubtitle.textContent=e.name,L(T(a.prototype),"open",this).call(this)}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(S);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==R(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}var B=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==x(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}var A=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validationConfig=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector)),this._buttonElement=this._formElement.querySelector(this._validationConfig.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._validationConfig.inputErrorClass),n.textContent=t,n.classList.add(this._validationConfig.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._validationConfig.inputErrorClass),t.classList.remove(this._validationConfig.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._validationConfig.inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")):(this._buttonElement.classList.remove(this._validationConfig.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=this;this.toggleButtonState(),this._formElement.addEventListener("reset",(function(){setTimeout((function(){e.toggleButtonState(e._inputList,e._buttonElement)}),0)})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==V(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}var N=function(){function e(t){var n=t.nameLink,r=t.jobLink,o=t.avatarLink;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameUser=n,this._jobUser=r,this._avatarUser=o}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e){this._nameUser.textContent=e.name,this._jobUser.textContent=e.job}},{key:"getUserInfo",value:function(){return{name:this._nameUser.textContent,job:this._jobUser.textContent}}},{key:"setUserAvatar",value:function(e){this._avatarUser.src=e}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==J(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}var M=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_parseResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._parseResponse(t)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._parseResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._parseResponse(e)}))}},{key:"setLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._parseResponse(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._parseResponse(e)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._parseResponse(t)}))}},{key:"editUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.nameLink,job:e.jobLink})}).then((function(e){return t._parseResponse(e)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._parseResponse(e)}))}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function z(e){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(e)}function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==z(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===z(o)?o:String(o)),r)}var o}function G(){return G="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},G.apply(this,arguments)}function K(e,t){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},K(e,t)}function Q(e){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Q(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&K(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Q(r);if(o){var n=Q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===z(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function a(e){var t,n=e.selectorPopup;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._form=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"submitCallback",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;G(Q(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("click",(function(t){t.preventDefault(),e._handleSubmit()}))}}])&&$(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(S);function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Y,Z=new M({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-63",headers:{authorization:"b1be6ff6-5ee2-4424-9627-8adc5e79825a","Content-Type":"application/json"}});Promise.all([Z.getInitialCards(),Z.getUserInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,u=[],l=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);l=!0);}catch(e){c=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ee.setUserInfo({userData:i}),Y=i._id,cardsList.renderItems(o)})).catch((function(e){console.log("Ошибка: ".concat(e))}));var ee=new N({nameLink:".profile__title",jobLink:".profile__subtitle",avatarLink:".profile__avatar"});new A(r,y).enableValidation();var te=new A(r,h);te.enableValidation();var ne=new A(r,m);ne.enableValidation();var re=new O({selectorPopup:".popup-avatar",handleFormSubmit:function(e){re.loading(!0),Z.editAvatar(e).then((function(e){f.src=e.avatar,re.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){re.loading(!1)}))}});re.setEventListeners(),p.addEventListener("click",(function(){re.open(),ne.toggleButtonState()}));var oe=new O({selectorPopup:".popup-profile",handleFormSubmit:function(e){oe.loading(!0),Z.editUserInfo(e).then((function(e){ee.setUserInfo({formData:e}),oe.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){oe.loading(!1)}))}});oe.setEventListeners(),a.addEventListener("click",(function(){var e=ee.getUserInfo();v.value=e.name,d.value=e.job,oe.open()}));var ie=function(e){var t=new n({data:e,templateSelector:".element-template",userId:Y,handleImageClick:function(e,t){ce.open(e,t)},handleDeleteIconClick:function(e){ue.open(),ue.submitCallback((function(){Z.deleteCard(e).then((function(){ue.close(),t.deleteCard()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}))},handleSetLike:function(e){Z.setLike(e).then((function(e){t.handleLikeCard(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))},handleRemoveLike:function(e){Z.deleteLike(e).then((function(e){t.handleLikeCard(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}});return t.generateCard()},ae=new B({renderer:function(e){ae.addItem(ie(e))}},".elements"),ue=new W({selectorPopup:".popup-delete"});ue.setEventListeners();var le=new O({selectorPopup:".popup-place",handleFormSubmit:function(e){le.loading(!0),Z.addCard(e).then((function(e){ae.addItem(ie(e)),le.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){le.loading(!1)}))}});le.setEventListeners(),c.addEventListener("click",(function(){le.open(),te.toggleButtonState()}));var ce=new q(".popup-image");ce.setEventListeners()})();