module.exports = class CollectionMobile {
  constructor() {

    this.input = document.querySelector('#showMobileCollections');
    this.label = document.querySelector('[for="showMobileCollections"]');

  }

  show() {
    this.input.checked = true;
  }

  hide() {
    this.input.checked = false;
  }
}
