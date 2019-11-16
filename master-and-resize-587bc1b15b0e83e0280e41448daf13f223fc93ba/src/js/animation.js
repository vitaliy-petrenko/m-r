import { isMobile } from './mobile';
const tagsAnimationDelay = 40; //ms
const motivationsDelay = 80;
let motivationsLi;

function stepsAnimation(wrap, selector, stepDelay, baseDelay) {
  if (isMobile()) {
    return null;
  }
  let wraps = document.querySelectorAll(wrap);
  [].forEach.call(wraps, wrap => {
    let childs = wrap.querySelectorAll(selector);
    baseDelay = typeof baseDelay === 'undefined' ? stepDelay : baseDelay;
    [].forEach.call(childs, target => {
      target.style.transitionDelay = baseDelay + 'ms';
      baseDelay += stepDelay
    })
  });
}

export let animationInit = () => {
  stepsAnimation('.page--skills', '.tag', tagsAnimationDelay, 200);
  motivationsLi = document.querySelectorAll('.motivations li');
  (function () {
    let baseDelay = 0;
    [].forEach.call(motivationsLi, motivationLi => {
      [].forEach.call(motivationLi.querySelectorAll('.motivation'), motivation=> {
        motivation.style.transitionDelay = baseDelay + 'ms';
      });
      baseDelay += motivationsDelay
    });
  }());

};