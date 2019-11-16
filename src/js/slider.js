'use strict';
import { popup } from './popup';

let activeSlide, slideWidth, sliderWidth, sliderFreeze = 700, slideLock = false;
class Slider {
  init() {
    if (this.initialized) {
      this.initSizes();
      this.getSlides();
      this.addClick();
      let activeIndex = Math.floor(this.slides.length / 2);
      this.setActive(this.slides[activeIndex], true);
      return;
    }
    this.slider = document.querySelector('.slider');
    this.constSlides = this.slider.querySelectorAll('.slide');

    this.initSizes();
    this.getSlides();
    this.addClick();
    let activeIndex = Math.floor(this.slides.length / 2);
    this.setActive(this.slides[activeIndex], true);
    this.initialized = true;
  }

  addClick() {
    this.slides.forEach(element => {
      element.addEventListener('click', (e) => {
        e.preventDefault();
        click(element);
      })
    })

  }

  getSlides() {
    this.slides = [];
    [].forEach.call(this.slider.querySelectorAll('.slide'), slide => {
      this.slides.push(slide);
    });
  }

  initSizes() {
    this.slides = [];
    let fragment = document.createDocumentFragment();

    [].forEach.call(this.constSlides, slide => {
      let newSlide = slide.cloneNode(true);
      fragment.appendChild(newSlide);
      this.slides.push(newSlide);
    });
    if (!this.slider.querySelector('slide')) { //for width check
      this.slider.appendChild(this.slides[0].cloneNode(true));
    }

    slideWidth = this.slider.querySelector('.slide').offsetWidth;
    sliderWidth = this.slider.offsetWidth;
    this.slider.innerHTML = '';
    let slidesCountLeft = Math.floor(window.innerWidth / slideWidth);
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
      fragment.appendChild(forAppEnd);
    }
    for (let i = 0; i < slidesCountRight; i++) {
      let index = i;
      while (this.slides.length <= index) {
        index -= this.slides.length
      }
      let forPrepEnd = this.slides[this.slides.length - 1 - index].cloneNode(true);
      forPrepEnd.classList.remove('active');
      fragment.insertBefore(forPrepEnd, fragment.querySelectorAll('.slide')[0]);
    }
    this.slider.appendChild(fragment);
  }

  setActive(slide, lockAnimation) {
    if (slideLock) return;

    let slideIndex = this.slides.indexOf(slide),
      activeIndex = this.slides.indexOf(activeSlide),
      diff,
      next;

    if (slideIndex > activeIndex) {
      next = true;
    } else if (slideIndex < activeIndex) {
      next = false;
    }

    diff = window.innerWidth / 2 - slideWidth * (slideIndex + .5);

    if (diff > 0) {
      diff = 0;
    }
    this.slider.diff = diff;

    if (lockAnimation) {
      this.slider.style.transition = 'all 0s';
    }

    this.slider.style.transform = `translate3d(${diff}px, 0, 0)`;
    if (lockAnimation) {
      this.slider.offsetHeight;
      this.slider.style.transition = '';
    } else if (typeof next !== 'undefined') {
      slideLock = true;
      this.slider.style.pointerEvents = 'none';
      setTimeout(() => {
        let fragmentAfter = document.createDocumentFragment();
        let fragmentBefore = document.createDocumentFragment();
        this.slider.style.pointerEvents = 'all';
        if (next) {
          if (~activeIndex) {
            for (let i = 0; i < slideIndex - activeIndex; i++) {
              let index = i;
              while (this.slides.length <= index) {
                index -= this.slides.length;
              }
              fragmentAfter.appendChild(this.slides[i])
            }
          }

        } else {
          for (let i = 0; i < activeIndex - slideIndex; i++) {
            let index = i;
            while (this.slides.length <= index) {
              index -= this.slides.length;
            }
            if (!fragmentBefore.querySelector('.slide')) {
              fragmentBefore.appendChild(this.slides[this.slides.length - 1 - i])
            } else {
              fragmentBefore.insertBefore(this.slides[this.slides.length - 1 - i], fragmentBefore.querySelectorAll('.slide')[0]);
            }
          }
        }
        if (fragmentAfter.querySelectorAll('.slide')) {
          this.slider.appendChild(fragmentAfter);
        }
        if (fragmentBefore.querySelectorAll('.slide')) {
          this.slider.insertBefore(fragmentBefore, this.slider.querySelectorAll('.slide')[0]);
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

