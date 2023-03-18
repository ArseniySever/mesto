export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameUser = nameSelector;
    this._jobUser = jobSelector;
  }
  getUserInfo() {
    return {
      nameSelector: this._nameUser.textContent,
      jobSelector: this._jobUser.textContent
    };
  }
  setUserInfo(nameSelector, jobSelector) {
    this._nameUser.textContent = nameSelector.value;
    this._jobUser.textContent = jobSelector.value;
  }
}