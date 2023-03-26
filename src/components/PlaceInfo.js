export default class PlaceInfo {
  constructor({ nameLink, sourceLink }) {
    this._placeName = nameLink;
    this._placeLink = sourceLink;
  }
  setPlaceInfo({ name, link }) {
    this._placeName.textContent = name;
    this._placeLink.src = link;
  }
  getPlaceInfo() {
    return {
      name: this._placeName.textContent,
      link: this._placeLink.src,
    };
  }
}
