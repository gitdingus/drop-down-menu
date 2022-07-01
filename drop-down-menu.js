const expandMenu = function expandDropDownMenu() {
  const dropdownDiv = this.querySelector('.drop-down');
  const ul = this.querySelector('.drop-down>ul');
  const ulRect = ul.getBoundingClientRect();
  this.classList.add('expanded');
  dropdownDiv.setAttribute('style', `height:${ul.offsetHeight}px;`);

  if (this.closest('.drop-down') !== null) {
    if (ulRect.right < window.innerWidth) {
      this.classList.add('open-right');
    } else {
      this.classList.add('open-left');
    }
  }
};

const collapseMenu = function collapseDropDownMenu() {
  this.classList.remove('expanded');
  this.querySelector('.drop-down').removeAttribute('style');

  /*
        prevent jitter when removing these classes
  */
  setTimeout(() => {
    this.classList.remove('open-right');
    this.classList.remove('open-left');
  }, 200);
};

const menus = document.querySelectorAll('.drop-down-menu');

menus.forEach((menu) => {
  menu.addEventListener('mouseenter', expandMenu);
  menu.addEventListener('mouseleave', collapseMenu);
});
