import { createHtmlElement } from 'dom-utils';
import menuHtml from './menu-header-template.html';
import menuDropdown from './menu-drop-down-template.html';
import './drop-down-menu.css';

const createMenuTitle = function createMenuTitleElement({ displayText, linkSrc = '' }) {
  let linkElement;
  let menuTitleElement;

  if (linkSrc !== '') {
    linkElement = createHtmlElement({
      tag: 'a',
      properties: {
        href: linkSrc,
        textContent: displayText,
      },
    });
  }

  if (linkElement !== undefined) {
    menuTitleElement = createHtmlElement({
      tag: 'h1',
      properties: {
        innerHTML: linkElement.outerHTML,
      },
    });
  } else {
    menuTitleElement = createHtmlElement({
      tag: 'h1',
      properties: {
        textContent: displayText,
      },
    });
  }

  return menuTitleElement;
};

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

  // prevent jitter when removing these classes
  setTimeout(() => {
    this.classList.remove('open-right');
    this.classList.remove('open-left');
  }, 200);
};

const addBehavior = function addBehaviorsToDropDownList(dropdownMenu, behavior) {
  if (behavior === 'hover') {
    dropdownMenu.addEventListener('mouseenter', expandMenu);
  } else if (behavior === 'click') {
    dropdownMenu.addEventListener('click', expandMenu);
  }

  dropdownMenu.addEventListener('mouseleave', collapseMenu);
};

const createMenuItem = function createDropdownMenuListItem({
  type, displayText = '', linkSrc = '', content = null,
}) {
  const li = createHtmlElement({ tag: 'li' });

  if (type === 'link') {
    const link = createHtmlElement({
      tag: 'a',
      properties: {
        textContent: displayText,
        href: linkSrc,
      },
    });

    li.classList.add('link');
    li.appendChild(link);
  } else if (type === 'content') {
    li.appendChild(content);
  } else {
    return null;
  }

  return li;
};

export default function createDropDownMenu({ menuHeader, behavior = 'hover' }) {
  const dropdownMenuTemplate = createHtmlElement({ tag: 'template' });
  dropdownMenuTemplate.innerHTML = menuHtml;
  const dropdownMenu = dropdownMenuTemplate.content.firstElementChild.cloneNode(true);

  dropdownMenu.querySelector('.menu-header').appendChild(createMenuTitle(menuHeader));
  addBehavior(dropdownMenu, behavior);

  const addMenuItem = function addMenuItemToDropdownMenuList(itemInfo) {
    let dropdownList = dropdownMenu.querySelector('.drop-down');
    if (dropdownList === null) {
      const dropdownListTemplate = createHtmlElement({ tag: 'template' });
      dropdownListTemplate.innerHTML = menuDropdown;
      dropdownList = dropdownListTemplate.content.firstElementChild.cloneNode(true);

      dropdownMenu.appendChild(dropdownList);
    }

    dropdownList.querySelector('.menu-list').appendChild(createMenuItem(itemInfo));
  };

  return { dropdownMenu, addMenuItem };
}
