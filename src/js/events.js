export let DOMContentLoaded = (callback) => {
  if (!callback) {
    return false;
  }

  if (document.readyState == "complete"
    || document.readyState == "loaded"
    || document.readyState == "interactive") {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
};

export let mouseWheel = (element, callback, remove) => {
  let action = 'addEventListener';

  if (remove) {
    action = 'removeEventListener';
  }

  if (!callback) {
    return false;
  }

  if ('onwheel' in document) {
    element[action]("wheel", callback);
  } else if ('onmousewheel' in document) {
    element[action]("mousewheel", callback);
  }
};

export let mobileTouchAndMove = (element, touchStart, touchMove, touchEnd, remove) => {
  let action = 'addEventListener';

  if (remove) {
    action = 'removeEventListener';
  }
  element[action]('touchstart', touchStart);
  element[action]('touchmove', touchMove);
  element[action]('touchend', touchEnd);
};

export let getCurrentTouchCoordinates = e => {
  let touches = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0];
  return { x: touches.clienX, y: touches.clientY }
};

let resizeTimeout;
export let resizeEnd = (callback) => {
  const freeze = 100;
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(()=> {
    callback && callback();
  }, freeze)
};