export default class UserInfo { 
    constructor({ nameLink, jobLink }) { 
      this._nameUser = nameLink; 
      this._jobUser = jobLink; 
    } 
    setUserInfo({name, job}) { 
      this._nameUser.textContent = name; 
      this._jobUser.textContent = job; 
    } 
    getUserInfo() { 
      return { 
        name: this._nameUser.textContent, 
        job: this._jobUser.textContent, 
      }; 
    } 
    
  }