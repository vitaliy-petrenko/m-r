'use strict';

import '!style!css!sass!./styles/index.sass';
import { localization } from './js/localization';
import { scroll } from './js/scroll';
import { popup } from './js/popup';
import { slider } from './js/slider';
import { animationInit } from './js/animation';
import { isMobile, isLongrid } from './js/mobile';
import { rectangles } from './js/rectangles';
import { canvasBg } from './js/canvasBg';

import { DOMContentLoaded, resizeEnd } from './js/events';

let bC; //body.classList
let sizeCheck = () => {
  bC.add('disabled_scroll_animation');
  if (isMobile()) {
    bC.add('mobile');
    bC.remove('longrid');

    rectangles.stop();
  } else {
    if (isLongrid()) {
      bC.add('longrid');
    } else {
      bC.remove('longrid');
    }
    bC.remove('mobile');

    slider.init();
    rectangles.init();
    animationInit();
  }

  canvasBg();
  bC.remove('disabled_scroll_animation');
};
function init() {
  bC = document.body.classList;
  sizeCheck();
  window.addEventListener('resize', () => resizeEnd(sizeCheck));
  localization.init();
  scroll.init();
  popup.init();
}
DOMContentLoaded(init);
