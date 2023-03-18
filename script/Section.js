export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._containerSelector = containerSelector;
    }
    renderItems(itemsArr) {
        itemsArr.forEach((item) => this._renderer(item));
    }
    addItem(item) {
        this._containerSelector.prepend(item);
    }
}