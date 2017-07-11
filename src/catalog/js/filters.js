const click = require('../../js/click.js');

module.exports = class CatalogFilters {
  constructor() {
    this.showAllFiltersInput = document.querySelector('#showAllFilters');
    this.showAllFiltersLabel = document.querySelector('[for="showAllFilters"]');
    this.showFilterInCatalogInputs = document.querySelectorAll('[name="showFilterInCatalog"]');



    [].forEach.call(document.querySelectorAll('.filter__label'),(item,index) => {
      // item.addEventListener('click',(e) => {
      //   this.close(e.currentTarget);
      // });

      new click({
        element:item,
        callback: (e) => {
          this.close(e.currentTarget);
        }
      });


    });

    this.filtersDroplists = document.querySelectorAll('.filter [data-style="dropList"]');

    [].forEach.call(this.filtersDroplists,(item,index) => {
      item.addEventListener('mouseleave',() => {
        this.close();
      });
    });
  }
  close(element){
    [].forEach.call(this.showFilterInCatalogInputs,function(item,index){
      if (element) {
        if (item.id == element.getAttribute('for')) return;
      }
      item.checked = false;
    });

  }

  hide() {
    this.showAllFiltersInput.checked = false;
  }

}
