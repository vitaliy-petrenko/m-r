let startValue;
let firstTime;
let frame;
export let smoothScroll = (element, to, duration, start) => {
  if (start) {
    cancelAnimationFrame(frame);
    startValue = element.scrollTop;
    to = to - element.scrollTop
    firstTime = new Date().getTime();
  }
  let currentTime = new Date().getTime();
  let time = currentTime - firstTime;

  element.scrollTop = Math.easeOutCubic(element.scrollTop, time, startValue, to, duration);

  if (time >= duration) {
    startValue = null;
    firstTime = null;
    return;
  }
  frame = requestAnimationFrame(() => smoothScroll(element, to, duration));
};

Math.easeOutCubic = function (x, t, b, c, d) {
  return-c*(t/=d)*(t-2)+b;
};