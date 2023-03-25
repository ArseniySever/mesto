export default class Section { 
    constructor({renderer}, containerLink) { 
        this._renderer = renderer; 
        this._containerLink = document.querySelector(containerLink); 
    } 
    renderItems(items) {
        items.forEach(item => {
          this._renderer(item); 
        });
    }
    addItem(item) { 
        this._containerLink.prepend(item); 
    } 
} 