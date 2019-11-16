'use strict';
import { popup } from './popup';

let activeSlide, xDiff, slideWidth, sliderWidth, sliderFreeze = 700, slideLock = false;
class Slider {
  init() {
    if (this.initialized) {
      this.initSizes();
      this.setActive(activeSlide, true);
      return;
    }
    this.slider = document.querySelector('.slider');

    this.getSlides();

    this.slides.forEach(slide => {
      slide.xDiff = 0;
      this.addClick(slide);
    });

    this.initSizes();
    let activeIndex = Math.floor(this.slides.length / 2);

    this.setActive(this.slides[activeIndex], true);
    this.initialized = true;
  }

  addClick(element) {
    element.querySelector('.slide__inner').addEventListener('click', (e) => {
      e.preventDefault();
      click(element);
    })
  }

  getSlides() {
    this.slides = [];
    [].forEach.call(this.slider.querySelectorAll('.slide'), slide => this.slides.push(slide));
  }

  initSizes() {
    slideWidth = this.slides[0].offsetWidth;
    sliderWidth = this.slider.offsetWidth;
    let diff = sliderWidth - window.innerWidth;
    if (diff <= 2 * slideWidth) {
      diff = Math.abs(diff);
      let slidesCount = Math.round(diff / slideWidth);
      let slidesCountLeft = slidesCount + 2;
      let slidesCountRight = this.slides.length - slidesCountLeft;

      while (slidesCountRight < 0 || slidesCountRight < slidesCountLeft) {
        slidesCountRight += this.slides.length;
      }

      for (let i = 0; i < slidesCountLeft; i++) {
        let index = i;
        while (this.slides.length <= index) {
          index -= this.slides.length
        }
        let forAppEnd = this.slides[index].cloneNode(true);
        forAppEnd.classList.remove('active');
        this.slider.appendChild(forAppEnd);
        this.addClick(forAppEnd);
      }
      for (let i = 0; i < slidesCountRight; i++) {
        let index = i;
        while (this.slides.length <= index) {
          index -= this.slides.length
        }
        let forPrepEnd = this.slides[this.slides.length - 1 - index].cloneNode(true);
        forPrepEnd.classList.remove('active');
        this.slider.insertBefore(forPrepEnd, this.slider.querySelectorAll('.slide')[0]);
        this.addClick(forPrepEnd);
      }
      this.getSlides();
    }

  }

  setActive(slide, lockAnimation) {
    if (slideLock) return;

    let slideIndex = this.slides.indexOf(slide),
      activeIndex = this.slides.indexOf(activeSlide),
      diff = 0,
      next;

    if (slideIndex > activeIndex) {
      next = true;
    } else if (slideIndex < activeIndex) {
      next = false;
    }
    if (~activeIndex) {
      diff = slideWidth * (this.slides.length / 2 - slideIndex) - .5 * slideWidth;
    } else if (this.slides.length % 2 === 0) {
      diff = -.5 * slideWidth;
    }
    this.slider.diff = diff;

    if (lockAnimation) {
      this.slider.style.transition = 'all 0s';
    }
    this.slider.style.transform = `translate3d(${diff}px, 0, 0)`;
    if (lockAnimation) {
      this.slider.offsetHeight;
      this.slider.style.transition = '';
    }

    if (typeof next !== 'undefined') {
      slideLock = true;
      setTimeout(() => {

        if (next) {
          if (~activeIndex) {
            for (let i = 0; i < slideIndex - activeIndex; i++) {
              let index = i;
              while (this.slides.length <= index) {
                index -= this.slides.length;
              }
              this.slider.appendChild(this.slides[i])
            }
          }

        } else {
          for (let i = 0; i < activeIndex - slideIndex; i++) {
            let index = i;
            while (this.slides.length <= index) {
              index -= this.slides.length;
            }
            this.slider.insertBefore(this.slides[this.slides.length - 1 - i], document.querySelectorAll('.slide')[0]);
          }
        }
        this.slider.style.transition = 'all 0s';
        this.getSlides();
        slideLock = false;
        this.setActive(slide, true);
      }, sliderFreeze)
    }

    if (activeSlide) {
      activeSlide.classList.remove('active');
    }
    activeSlide = slide;
    activeSlide.classList.add('active');
  }
}
export let slider = new Slider();

let click = function (slide) {
  if (slide.classList.contains('active')) {
    let target = slide.getAttribute('href').substr(1);
    popup.open(target)
  } else {
    this.setActive(slide)
  }

}.bind(slider);

