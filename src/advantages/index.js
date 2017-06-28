class advantages {
  constructor() {

    this.carousContainer = document.querySelector('.advantages__infoBlocks-container');
    this.carous = document.querySelector('.advantages__infoBlocks');
    this.carousChilds = document.querySelectorAll('.advantages__infoBlocks-item');

    this.carous.style.width = this.carousChilds.length * document.documentElement.clientWidth  + 'px';
    this.cards = document.querySelectorAll('.advantages__cards-item');

    for (var i = 0; i < this.carousChilds.length; i++) {
      this.carousChilds[i].style.width = document.documentElement.clientWidth  + 'px';
    }

    for (var i = 0; i < this.cards.length; i++) {
      this.cards[i].addEventListener('click',(e)=>{
        this.selectCard(e);
        e.currentTarget.classList.add('advantages__cards-item--active');
      });
    }


    this.setSizes();
    window.onresize = ()=>{
      this.setSizes();
    };
    this.close();
  }

  setSizes() {
    for (var i = 0; i < this.carousChilds.length; i++) {
      this.carousChilds[i].style.width = document.documentElement.clientWidth  + 'px';
    }
  }

  selectCard(e) {
    document.querySelector('.advantages__cardsContainer').classList.add('advantages__cardsContainer--active');
    for (var i = 0; i < this.cards.length; i++) {
      this.cards[i].classList.remove('advantages__cards-item--active');
    }
    for (var i = 0; i < this.cards.length; i++) {
      if (this.cards[i] == e.currentTarget) {
        this.carousContainer.style.display = 'block';
        this.carous.style.transform = 'translateX(-' + i * document.documentElement.clientWidth  + 'px)';
        return;
      }
    }
  }
  close() {
    let closes = document.querySelectorAll('.advantages__infoBlocks-item--close');
    for (var i = 0; i < closes.length; i++) {
      closes[i].addEventListener('click',(e)=>{
        document.querySelector('.advantages__cardsContainer--active').classList.remove('advantages__cardsContainer--active');
        this.carousContainer.style.display = 'none';
        for (var i = 0; i < this.cards.length; i++) {
          this.cards[i].classList.remove('advantages__cards-item--active');
        }
      });
    }
  }
}
document.addEventListener('DOMContentLoaded',()=>{
  new advantages();
});
