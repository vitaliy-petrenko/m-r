'use strict';

export let isMobile = () => {
  let check = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return window.innerWidth <= 700 || check;
};

export let isLongrid =  () => {
  return window.innerHeight < 650 && !isMobile();
};