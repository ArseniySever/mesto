export default class UserInfo {
  constructor({ nameLink, jobLink, avatarLink }) {
    this._nameUser = nameLink;
    this._jobUser = jobLink;
    this._avatar = avatarLink;
  }
  setUserInfo(data) {
    this._nameUser.textContent = data.name;
    this._jobUser.textContent = data.about;
    this._avatar.src = data.avatar;
  }
  getUserInfo() {
    return {
      name: this._nameUser.textContent,
      about: this._jobUser.textContent,
      avatar: this._avatar.src
    };
  }
}
