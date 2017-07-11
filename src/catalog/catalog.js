const filters = require('./js/filters.js');
const CollectionsMobile = require('./js/collectionsMobile.js');

class Catalog {
  constructor() {

    this.mobileCollections = new CollectionsMobile();
    this.filters = new filters();

    this.mobileCollections.label.addEventListener('click',() => {
      if (!this.mobileCollections.input.checked) {
        this.filters.hide();
      }
    });
    this.filters.showAllFiltersLabel.addEventListener('click',() => {
      if (!this.filters.showAllFiltersInput.checked) {
        this.mobileCollections.hide();
      }
    });
  }



}
document.addEventListener('DOMContentLoaded',function(){
  new Catalog();
});
