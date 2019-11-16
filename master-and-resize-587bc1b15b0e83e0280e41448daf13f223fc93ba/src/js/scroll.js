'use strict';
import { mouseWheel, mobileScroll, getCurrentTouchCoordinates } from './events';
import { popup } from './popup';
import { isMobile } from './mobile';
const config = {
  section: 'section.page',
  pagerWrap: '.pager',
  activeClass: 'active',
  hashAttribute: 'id',
  disabledAnimationClass: 'disabled_scroll_animation',
  scrollFreeze: ~navigator.userAgent.indexOf('Mac OS X') ? 1400 : 500
};

(function () {

  if (typeof window.CustomEvent === "function") return false;

  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
})();

let sections,
  scroll,
  pagerItems = [],
  firstSrollTime = new Date().getTime(),
  lastScrollTime = firstSrollTime,
  mobileLastY, //for touch event
  mobileScrollSensitivity = .05, //percent of window height, that need to touch and move for scroll
  sectionsChangeEvent;
class Scroll {
  constructor() {
    this.activeSection = 0;

  }

  stop() {
    this.disableScroll = true;
  }

  start() {
    this.disableScroll = false;
  }

  changeSection(targetIndex, noFreeze) {
    if (popup.isOpen || isMobile()) {
      return null;
    }

    let currentTime = new Date().getTime();
    if (currentTime - this.lastWheel <= config.scrollFreeze && !noFreeze) {
      return null;
    }

    if (!noFreeze) {
      this.lastWheel = currentTime;
    }
    if (this.disableScroll) return;

    if (sections[targetIndex]) {
      sections[this.activeSection].classList.remove(config.activeClass);
      pagerItems[this.activeSection].classList.remove(config.activeClass);
      this.activeSection = targetIndex;
      window.location.hash = sections[this.activeSection].getAttribute(config.hashAttribute);
      sections[this.activeSection].classList.add(config.activeClass);
      pagerItems[this.activeSection].classList.add(config.activeClass);
      document.dispatchEvent(sectionsChangeEvent);
    }
  }

  init() {

    if (isMobile() && sections) {
      return null
    }

    [].forEach.call(document.querySelectorAll('.go_section'), element => {
      element.addEventListener('click', () => {
        let newIndex = parseInt(element.getAttribute('data-section'));
        this.changeSection(newIndex, true);
      });
    });
    sections = document.querySelectorAll(config.section);
    pagerInit();
    initHash.call(this);

    mouseWheel(window, wheel);
    mobileScroll(window, touchStart, touchMove, touchEnd);
    requestAnimationFrame(function () {
      document.body.classList.remove(config.disabledAnimationClass);
    });
    //key handlers
    window.addEventListener('keydown', e=> {
      let direction;
      //40 - arrow up, 38 - arrow down, 34 - page up, 33 - page down, 36 - home, 35 - end
      if (e.keyCode === 40 || e.keyCode === 38 || e.keyCode === 34 || e.keyCode === 33) {
        if (e.keyCode === 40 || e.keyCode === 34) {
          direction = 1;
        } else {
          direction = -1;
        }
        if (direction) {
          this.changeSection(this.activeSection + direction, true);
        }
      }

      if (e.keyCode === 36) {
        this.changeSection(0, true);
      }

      if (e.keyCode === 35) {
        this.changeSection(sections.length - 1, true);
      }
    });
  }
}

scroll = new Scroll();

sectionsChangeEvent = new CustomEvent("sectionchange", {
  bubbles: true
});

let pagerInit = function () {
  let pagerElementsFragment = document.createDocumentFragment(),
    pagerWrap = document.querySelector(config.pagerWrap);

  [].forEach.call(sections, (section, i) => {
    let li = document.createElement('span');
    i === 0 && li.classList.add(config.activeClass);
    pagerElementsFragment.appendChild(li);
    pagerItems.push(li);
  });
  if (pagerItems.length) {

    pagerWrap.appendChild(pagerElementsFragment);
    pagerWrap.classList.add(config.activeClass);
  }
  [].forEach.call(pagerItems, (pagerItem, i) => {
    pagerItem.addEventListener('click', () => {
      scroll.changeSection(i, true);
    })
  });
}.bind(scroll);

let touchPadInertia, lastWheel;
let wheel = function (e) {
  let direction = 1,
    deltaVal = e.wheelDelta || -e.detail || -e.deltaY,
    delta = -1 * Math.max(-1, Math.min(1, deltaVal));

  if (delta < 0) {
    direction = -1;
  }

  if (lastWheel) {
    touchPadInertia = lastWheel % deltaVal !== 0 && deltaVal % lastWheel !== 0;

    if (Math.abs(lastWheel) < Math.abs(deltaVal) && touchPadInertia) {
      scroll.changeSection(this.activeSection + direction);
    } else if (!touchPadInertia) {
      scroll.changeSection(this.activeSection + direction);
    }
  }

  lastWheel = deltaVal;

}.bind(scroll);

let touchMove = function (e) {

  let currentY, direction;
  currentY = getCurrentTouchCoordinates(e).y;
  if (currentY < mobileLastY) {
    direction = 1;
  } else if (currentY > mobileLastY) {
    direction = -1;
  }

  let sensitivity = window.innerHeight * mobileScrollSensitivity;
  if (Math.abs(currentY - mobileLastY) > sensitivity) {
    scroll.changeSection(this.activeSection + direction);
  }
}.bind(scroll);

let touchStart = e => {
  mobileLastY = getCurrentTouchCoordinates(e).y
};

let touchEnd = () => {
  mobileLastY = null
};


function getIndexByHash() {
  let hash = window.location.hash.substring(1),
    index = 0;
  if (!hash) return 0;
  [].forEach.call(sections, (section, i) => {
    let hashName = section.getAttribute(config.hashAttribute);
    if (hash === hashName) {
      index = i;
      return null;
    }
  });
  return index;
}
function initHash() {
  let index = getIndexByHash();
  scroll.changeSection(index, true);
}

export { scroll };