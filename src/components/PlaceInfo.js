export default class PlaceInfo { 
    constructor({ nameLink, sourceLink }) { 
      this._placeName = nameLink; 
      this._placeLink = sourceLink; 
    } 
    setUserInfo({name, link}) { 
      this._placeName.textContent = name; 
      this._placeLink.src = link; 
    } 
    getUserInfo() { 
      return { 
        name: this._placeName.textContent, 
        link: this._placeLink.src, 
      }; 
    } 
    
  }