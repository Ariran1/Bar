class advantages {
  constructor() {
    console.log(1);
    this.carousContainer = document.querySelector('.advantages__infoBlocks-container');
    this.carous = document.querySelector('.advantages__infoBlocks');
    this.carousChilds = document.querySelectorAll('.advantages__infoBlocks-item');
    console.log(this.carousChilds.length * 100 + '%');
    this.carous.style.width = this.carousChilds.length * 100 + '%';
  }
}
document.addEventListener('DOMContentLoaded',()=>{
  new advantages();
});
