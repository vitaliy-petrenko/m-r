'use strict';

import '!style!css!sass!./styles/index.sass';
import { localization } from './js/localization';
import { scroll } from './js/scroll';
import { popup } from './js/popup';
import { slider } from './js/slider';
import { animationInit } from './js/animation';
import { isMobile } from './js/mobile';
import { rectangles } from './js/rectangles';

import { DOMContentLoaded } from './js/events';
// import { events } from './js/events';
let sizeCheck = () => {
  if (isMobile()) {
    document.body.classList.add('mobile');
    document.body.classList.remove('disabled_scroll_animation');
    scroll.init();
    rectangles.stop();
  } else {
    slider.init();
    rectangles.stop();
    document.body.classList.remove('mobile');
    rectangles.init();
  }
};
function init() {
  sizeCheck();
  window.addEventListener('resize', sizeCheck);
  localization.init();
  scroll.init();
  popup.init();
  animationInit();
  document.addEventListener('sectionchange', function (e) {

  });
}
DOMContentLoaded(init);
