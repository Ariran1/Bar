class advantages {
  constructor() {

    let closes = document.querySelectorAll('.advantages__infoBlocks-item--close');
    for (var i = 0; i < closes.length; i++) {
      closes[i].addEventListener('click',(e)=>{
        this.close();
      });
    }

  }

  close() {
    document.querySelector('[name="showBlockAdvantages"]:checked').checked = false;
  }
}
document.addEventListener('DOMContentLoaded',()=>{
  new advantages();
});
