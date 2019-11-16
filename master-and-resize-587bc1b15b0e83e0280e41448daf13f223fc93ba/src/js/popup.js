'use strict';

let popups, openElements, closeElements, popupInners;

class Popup {
  constructor() {
    this.isOpen = false;
  }
  init() {
    popups = document.querySelectorAll('.popup');
    popupInners = document.querySelectorAll('.popup__inner');
    openElements = document.querySelectorAll('.popup_link');
    [].forEach.call(openElements, (openButton) => {
      openButton.addEventListener('click', (e) => {
        e.preventDefault();
        let target = openButton.getAttribute('data-popup');
        this.open(target);
      })
    });
    closeElements = document.querySelectorAll('.popup__close');
    [].forEach.call(closeElements, (closeButton) => {
      closeButton.addEventListener('click', () => this.close())
    });
    [].forEach.call(popups, (popup) => {
      popup.addEventListener('click', () => this.close())
    });
    [].forEach.call(popupInners, (popupInner) => {
      popupInner.addEventListener('click', e=> e.stopPropagation());
    });
    window.addEventListener('keydown', e=> {
      if (e.keyCode === 27) {
        this.close();
      }
    });
  }

  open(name) {
    [].forEach.call(popups, (popup) => {
      if (name === popup.getAttribute('id')) {
        this.isOpen = true;
        this.activePopup = popup;
        popup.scrollTop = 0;
        this.activePopup.classList.add('active');
        document.body.classList.add('popup_open');
      }
    })
  }

  close() {
    if (!this.activePopup) return null;
    if (this.lastHash) {
      window.location.hash = this.lastHash;
    }
    this.isOpen = false;
    this.activePopup.classList.remove('active');
    this.activePopup = null;
    document.body.classList.remove('popup_open');
  }
}

export let popup = new Popup();