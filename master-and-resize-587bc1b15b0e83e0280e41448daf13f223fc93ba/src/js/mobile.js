'use strict';

export let isMobile = function () {
  let check = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return window.innerWidth <= 700 || check;
};
