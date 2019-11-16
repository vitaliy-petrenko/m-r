/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var _localization = __webpack_require__(64);
	
	var _scroll = __webpack_require__(66);
	
	var _popup = __webpack_require__(68);
	
	var _slider = __webpack_require__(70);
	
	var _animation = __webpack_require__(71);
	
	var _mobile = __webpack_require__(69);
	
	var _rectangles = __webpack_require__(72);
	
	var _events = __webpack_require__(67);
	
	// import { events } from './js/events';
	var sizeCheck = function sizeCheck() {
	  if ((0, _mobile.isMobile)()) {
	    document.body.classList.add('mobile');
	    document.body.classList.remove('disabled_scroll_animation');
	    _scroll.scroll.init();
	    _rectangles.rectangles.stop();
	  } else {
	    _slider.slider.init();
	    _rectangles.rectangles.stop();
	    document.body.classList.remove('mobile');
	    _rectangles.rectangles.init();
	  }
	};
	function init() {
	  sizeCheck();
	  window.addEventListener('resize', sizeCheck);
	  _localization.localization.init();
	  _scroll.scroll.init();
	  _popup.popup.init();
	  (0, _animation.animationInit)();
	  document.addEventListener('sectionchange', function (e) {});
	}
	(0, _events.DOMContentLoaded)(init);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(63)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./index.sass", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./index.sass");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\narticle, aside, details, figcaption, figure, footer, header, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nsvg {\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  width: inherit;\n  height: inherit; }\n\na, a:hover, a:focus, a:visited, a:link, a:active {\n  color: inherit;\n  text-decoration: none; }\n\na:hover {\n  text-decoration: underline; }\n\nbutton {\n  cursor: pointer; }\n\ninput, input:focus, button, textarea {\n  outline: none;\n  color: inherit;\n  font-family: inherit;\n  background-color: transparent;\n  border: 0;\n  box-sizing: border-box; }\n\n@font-face {\n  font-family: balezdrov11-Regular;\n  src: url(" + __webpack_require__(4) + ");\n  src: url(" + __webpack_require__(4) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(5) + ") format(\"woff\"), url(" + __webpack_require__(6) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: GothamPro;\n  src: url(" + __webpack_require__(7) + ");\n  src: url(" + __webpack_require__(7) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(8) + ") format(\"woff\"), url(" + __webpack_require__(9) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: GothamPro-Black;\n  src: url(" + __webpack_require__(10) + ");\n  src: url(" + __webpack_require__(10) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(11) + ") format(\"woff\"), url(" + __webpack_require__(12) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: GothamPro-Bold;\n  src: url(" + __webpack_require__(13) + ");\n  src: url(" + __webpack_require__(13) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(14) + ") format(\"woff\"), url(" + __webpack_require__(15) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: GothamPro-Medium;\n  src: url(" + __webpack_require__(16) + ");\n  src: url(" + __webpack_require__(16) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(17) + ") format(\"woff\"), url(" + __webpack_require__(18) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: logo;\n  src: url(" + __webpack_require__(19) + ");\n  src: url(" + __webpack_require__(19) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(20) + ") format(\"woff\"), url(" + __webpack_require__(21) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n#logo_main_yellow .st0 {\n  fill: #fff843; }\n\n#logo_main_yellow .st1 {\n  fill: #fff843; }\n\n#logo_main_yellow .st2 {\n  enable-background: new; }\n\n#logo_main_yellow .st3 {\n  fill: none;\n  stroke: #fff843;\n  stroke-width: 5;\n  stroke-miterlimit: 10; }\n\n#logo_main_yellow .st4 {\n  fill: none;\n  stroke: #fff843;\n  stroke-width: 4.88;\n  stroke-miterlimit: 10; }\n\n#logo_main_yellow .st5 {\n  fill: none;\n  stroke: #fff843;\n  stroke-width: 4.88;\n  stroke-miterlimit: 10;\n  stroke-dasharray: 17.5897, 8.7949; }\n\n#logo_main_yellow .st6 {\n  fill: none;\n  stroke: #fff843;\n  stroke-width: 4.88;\n  stroke-miterlimit: 10;\n  stroke-dasharray: 16.1637, 8.0818; }\n\n#logo_main .st0 {\n  fill: #231F20; }\n\n#logo_main .st1 {\n  fill: #002BFF; }\n\n#logo_main .st2 {\n  enable-background: new; }\n\n#logo_main .st3 {\n  fill: none;\n  stroke: #231F20;\n  stroke-width: 5;\n  stroke-miterlimit: 10; }\n\n#logo_main .st4 {\n  fill: none;\n  stroke: #002BFF;\n  stroke-width: 4.88;\n  stroke-miterlimit: 10; }\n\n#logo_main .st5 {\n  fill: none;\n  stroke: #002BFF;\n  stroke-width: 4.88;\n  stroke-miterlimit: 10;\n  stroke-dasharray: 17.5897, 8.7949; }\n\n#logo_main .st6 {\n  fill: none;\n  stroke: #002BFF;\n  stroke-width: 4.88;\n  stroke-miterlimit: 10;\n  stroke-dasharray: 16.1637, 8.0818; }\n\n#logo_small .a {\n  fill: #231f20; }\n\n#logo_small .b {\n  fill: #002bff; }\n\n#logo_small_black .a, #logo_small_black .b {\n  fill: #231f20 !important; }\n\n.master_icon .a {\n  fill: none; }\n\n.master_icon .b {\n  fill: #231f20; }\n\n.resize_icon .a {\n  fill: none; }\n\n.resize_icon .b, .resize_icon .c, .resize_icon .d {\n  fill: none;\n  stroke: #000;\n  stroke-miterlimit: 10;\n  stroke-width: 4.88px; }\n\n.resize_icon .c {\n  stroke-dasharray: 17.59 8.79; }\n\n.resize_icon .d {\n  stroke-dasharray: 16.16 8.08; }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .page--skills .tags .tag {\n  -webkit-backface-visibility: hidden;\n  transform: scale(0) translate3d(0, -200%, 0);\n  transition: transform .7s;\n  will-change: transform; }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .page.active .tags .tag {\n  transform: scale(1) translate3d(0, 0, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .page:not(.active) .tags .tag {\n  transition-delay: 0s !important; }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .team__row {\n  will-change: transform;\n  transition: transform .8s; }\n  body:not(.mobile):not(.disabled_scroll_animation) .team__row:nth-child(odd) {\n    transform: translate3d(-5%, 0, 0); }\n  body:not(.mobile):not(.disabled_scroll_animation) .team__row:nth-child(even) {\n    transform: translate3d(5%, 0, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .page.active .team__row {\n  transform: translate3d(0, 0, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .page--main .arrow--down {\n  will-change: transform;\n  transform: translate3d(0, -50%, 0);\n  transition: transform .6s; }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .page--main.active .arrow--down {\n  transform: translate3d(0, 0, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .page .page__inner {\n  will-change: transform;\n  transform: translate3d(0, 5%, 0);\n  transition: transform .5s; }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .page .title {\n  -webkit-backface-visibility: hidden;\n  will-change: transform;\n  transform: scale(0.9) translate3d(0, 0, 0);\n  transition: transform .8s; }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .page.active .page__inner {\n  transition: transform .6s;\n  transform: translate3d(0, 0, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .page.active .title {\n  transform: scale(1) translate3d(0, 0, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .face {\n  will-change: transform;\n  transition: transform 1.2s; }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .face--1 {\n  transform: translate3d(-40%, -40%, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .face--2 {\n  transform: translate3d(40%, -40%, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .face--3 {\n  transform: translate3d(50%, 0, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .face--4 {\n  transform: translate3d(-20%, -20%, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .face--5 {\n  transform: translate3d(8%, 40%, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .page.active .face {\n  transform: translate3d(0, 0, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .book .arrow {\n  will-change: transform;\n  transition: transform .8s; }\n  body:not(.mobile):not(.disabled_scroll_animation) .book .arrow.arrow--left {\n    transform: translate3d(100%, 0, 0); }\n  body:not(.mobile):not(.disabled_scroll_animation) .book .arrow.arrow--right {\n    transform: translate3d(-100%, 0, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .page.active .book .arrow {\n  transform: translate3d(0, 0, 0); }\n\n@-webkit-keyframes bubbleAnimation {\n  0% {\n    transform: translateY(0); }\n  20% {\n    transform: translateY(-5px); }\n  30% {\n    transform: translateY(0); } }\n\n@-moz-keyframes bubbleAnimation {\n  0% {\n    transform: translateY(0); }\n  20% {\n    transform: translateY(-5px); }\n  30% {\n    transform: translateY(0); } }\n\n@-ms-keyframes bubbleAnimation {\n  0% {\n    transform: translateY(0); }\n  20% {\n    transform: translateY(-5px); }\n  30% {\n    transform: translateY(0); } }\n\n@keyframes bubbleAnimation {\n  0% {\n    transform: translateY(0); }\n  20% {\n    transform: translateY(-5px); }\n  30% {\n    transform: translateY(0); } }\n\n@-webkit-keyframes masterAnimation {\n  0% {\n    width: 100%; }\n  40% {\n    width: 0; }\n  80% {\n    width: 100%; } }\n\n@-moz-keyframes masterAnimation {\n  0% {\n    width: 100%; }\n  40% {\n    width: 0; }\n  80% {\n    width: 100%; } }\n\n@-ms-keyframes masterAnimation {\n  0% {\n    width: 100%; }\n  40% {\n    width: 0; }\n  80% {\n    width: 100%; } }\n\n@keyframes masterAnimation {\n  0% {\n    width: 100%; }\n  40% {\n    width: 0; }\n  80% {\n    width: 100%; } }\n\n@-webkit-keyframes resizeAnimation {\n  0% {\n    letter-spacing: 4px; }\n  50% {\n    letter-spacing: 28px;\n    margin-right: -26px; }\n  90% {\n    letter-spacing: 2px; }\n  100% {\n    letter-spacing: 4px; } }\n\n@-moz-keyframes resizeAnimation {\n  0% {\n    letter-spacing: 4px; }\n  50% {\n    letter-spacing: 28px;\n    margin-right: -26px; }\n  90% {\n    letter-spacing: 2px; }\n  100% {\n    letter-spacing: 4px; } }\n\n@-ms-keyframes resizeAnimation {\n  0% {\n    letter-spacing: 4px; }\n  50% {\n    letter-spacing: 28px;\n    margin-right: -26px; }\n  90% {\n    letter-spacing: 2px; }\n  100% {\n    letter-spacing: 4px; } }\n\n@keyframes resizeAnimation {\n  0% {\n    letter-spacing: 4px; }\n  50% {\n    letter-spacing: 28px;\n    margin-right: -26px; }\n  90% {\n    letter-spacing: 2px; }\n  100% {\n    letter-spacing: 4px; } }\n\n.bubble_points {\n  will-change: transform; }\n\n.page--products.active .bubble_points span, .page--products.active .bubble_points:after, .page--products.active .bubble_points:before {\n  animation: bubbleAnimation 1s; }\n\n.page--products.active .bubble_points:before {\n  animation-delay: .4s; }\n\n.page--products.active .bubble_points span {\n  animation-delay: .6s; }\n\n.page--products.active .bubble_points:after {\n  animation-delay: .8s; }\n\n.page--products.active .step__icon--master:before {\n  animation: masterAnimation 3s;\n  animation-delay: 1.2s; }\n\n.page--products.active .step__icon--resize .logo__text--resize:after {\n  animation: resizeAnimation 1.4s;\n  animation-delay: 3s; }\n\n.step__icon--bubble:hover .bubble_points span, .step__icon--bubble:hover .bubble_points:after, .step__icon--bubble:hover .bubble_points:before {\n  animation: bubbleAnimation 1s infinite; }\n\n.step__icon--bubble:hover .bubble_points:before {\n  animation-delay: .4s; }\n\n.step__icon--bubble:hover .bubble_points span {\n  animation-delay: .6s; }\n\n.step__icon--bubble:hover .bubble_points:after {\n  animation-delay: .8s; }\n\n.step__icon--master:hover:before {\n  width: 0 !important; }\n\n.logo {\n  font-size: 0;\n  height: 58px;\n  width: 440px;\n  display: inline-block; }\n  .logo > * {\n    font-size: 19px;\n    display: block;\n    float: left;\n    line-height: 1;\n    height: inherit;\n    box-sizing: border-box; }\n\n.logo--part {\n  width: auto; }\n\n.logo--center {\n  position: relative;\n  display: block;\n  left: 50%;\n  margin-left: -169px; }\n\n.logo__master {\n  height: 100%;\n  border: 5px solid #000;\n  padding: 15px 14px 15px 16px;\n  position: relative; }\n\n.logo__resize {\n  height: 100%;\n  padding: 20px 19px 20px 21px;\n  position: relative;\n  color: #002bff;\n  transition: padding-right .5s; }\n  .logo__resize .logo__resize__border:after, .logo__resize .logo__resize__border:before {\n    content: '';\n    display: block;\n    position: absolute; }\n  .logo__resize .logo__resize__border.logo__resize__border--horizontal:after, .logo__resize .logo__resize__border.logo__resize__border--horizontal:before {\n    height: 5px;\n    background: url(" + __webpack_require__(22) + ") repeat-x center;\n    left: 21px;\n    right: 21px; }\n    @media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n      .logo__resize .logo__resize__border.logo__resize__border--horizontal:after, .logo__resize .logo__resize__border.logo__resize__border--horizontal:before {\n        background-image: url(" + __webpack_require__(23) + ");\n        background-size: auto 100%; } }\n  .logo__resize .logo__resize__border.logo__resize__border--horizontal:after {\n    top: 0; }\n  .logo__resize .logo__resize__border.logo__resize__border--horizontal:before {\n    bottom: 0; }\n  .logo__resize .logo__resize__border.logo__resize__border--vertical:after, .logo__resize .logo__resize__border.logo__resize__border--vertical:before {\n    width: 5px;\n    background: #002bff;\n    top: 21px;\n    bottom: 21px; }\n  .logo__resize .logo__resize__border.logo__resize__border--vertical:after {\n    right: 0; }\n  .logo__resize .logo__resize__border.logo__resize__border--vertical:before {\n    left: 0; }\n  .logo__resize .logo__resize__corner:after, .logo__resize .logo__resize__corner:before {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 12px;\n    height: 12px; }\n  .logo__resize .logo__resize__corner.logo__resize__corner--top:after, .logo__resize .logo__resize__corner.logo__resize__corner--top:before {\n    top: 0; }\n  .logo__resize .logo__resize__corner.logo__resize__corner--top:after {\n    right: 0;\n    border-top: 5px solid #002bff;\n    border-right: 5px solid #002bff; }\n  .logo__resize .logo__resize__corner.logo__resize__corner--top:before {\n    border-top: 5px solid #002bff;\n    border-left: 5px solid #002bff;\n    left: 0; }\n  .logo__resize .logo__resize__corner.logo__resize__corner--bottom:after, .logo__resize .logo__resize__corner.logo__resize__corner--bottom:before {\n    bottom: 0; }\n  .logo__resize .logo__resize__corner.logo__resize__corner--bottom:after {\n    border-bottom: 5px solid #002bff;\n    border-right: 5px solid #002bff;\n    right: 0; }\n  .logo__resize .logo__resize__corner.logo__resize__corner--bottom:before {\n    border-bottom: 5px solid #002bff;\n    border-left: 5px solid #002bff;\n    left: 0; }\n\n.logo:hover .logo__text--resize {\n  margin-right: -24px; }\n  .logo:hover .logo__text--resize:after {\n    letter-spacing: 26px; }\n\n.page--main .logo:hover .logo__text--resize {\n  transition-delay: .3s; }\n  .page--main .logo:hover .logo__text--resize:after {\n    transition-delay: .3s; }\n\n.logo__text {\n  letter-spacing: 4px;\n  display: block;\n  font-family: logo; }\n\n.logo__text--and:after {\n  content: '\\E900'; }\n\n.logo__text--master:after {\n  content: '\\E904\\E901\\E906\\E907\\E902\\E905'; }\n\n.logo__text--resize {\n  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); }\n  .logo__text--resize:after {\n    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    content: '\\E905\\E902\\E906\\E903\\E908\\E902'; }\n\n.logo__text--and {\n  font-size: 20px;\n  margin: 0 9px 0 11px;\n  line-height: 58px; }\n\nhtml, body {\n  min-height: 100%; }\n\nbody {\n  overflow: hidden;\n  font-family: GothamPro;\n  font-size: 15px;\n  line-height: 24px; }\n\n.popup_open {\n  overflow: hidden; }\n\n.svg_wrapper {\n  display: none; }\n\n.left {\n  float: left; }\n\n.right {\n  float: right; }\n\n.button {\n  font-family: GothamPro-Black;\n  font-weight: bold;\n  text-transform: uppercase;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.m0auto {\n  margin: 0 auto; }\n\nheader {\n  box-sizing: border-box;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 10;\n  height: 48px;\n  line-height: 48px;\n  background-color: #000;\n  color: #fff;\n  transition: background-color 1s cubic-bezier(0.175, 0.885, 0.32, 1);\n  padding: 0 15px;\n  will-change: background-color; }\n  header .left > * {\n    float: left; }\n  header .right > * {\n    float: right; }\n  header:after {\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: -4px;\n    background: #fff623;\n    transition: width 0.66667s;\n    width: 0;\n    right: 0;\n    height: 4px; }\n  header .logo_small {\n    float: left;\n    cursor: pointer;\n    display: block;\n    width: 43px;\n    height: 100%;\n    margin-right: 18px; }\n    header .logo_small svg {\n      top: -2px;\n      height: 25px; }\n      header .logo_small svg .a, header .logo_small svg .b {\n        fill: #fff;\n        transition: fill 1s cubic-bezier(0.175, 0.885, 0.32, 1); }\n\n.order_button {\n  font-size: 12px;\n  color: #000;\n  background-color: #fff843;\n  transition: color 1s cubic-bezier(0.175, 0.885, 0.32, 1), background-color 1s cubic-bezier(0.175, 0.885, 0.32, 1), opacity 1s cubic-bezier(0.175, 0.885, 0.32, 1) 0.5s;\n  cursor: pointer;\n  will-change: opacity;\n  height: 48px; }\n\n.header_contacts svg {\n  fill: #fff;\n  transition: fill 1s cubic-bezier(0.175, 0.885, 0.32, 1); }\n\n.header_contacts .phone svg {\n  top: -1px;\n  width: 24px;\n  height: 24px; }\n\n.header_contacts .messenger svg {\n  width: 25px;\n  height: 26px; }\n\n.header_contacts .phone, .header_contacts .messenger {\n  position: relative;\n  margin-left: 2px;\n  padding: 0 4px;\n  cursor: pointer;\n  display: block;\n  float: left;\n  height: 100%; }\n\n.language {\n  font-size: 14px;\n  cursor: pointer;\n  margin: 0 33px 0 37px;\n  transition: color 1s cubic-bezier(0.175, 0.885, 0.32, 1); }\n\n.page--main.active ~ header {\n  transition: background-color 0.5s cubic-bezier(0.175, 0.885, 0.32, 1);\n  background-color: transparent; }\n  .page--main.active ~ header .logo_small svg .a {\n    fill: #000; }\n  .page--main.active ~ header .logo_small svg .b {\n    fill: #002bff; }\n  .page--main.active ~ header .header_contacts svg {\n    fill: #000; }\n  .page--main.active ~ header .language {\n    color: #000; }\n  .page--main.active ~ header .order_button {\n    pointer-events: none;\n    opacity: 0;\n    transition: color 1s cubic-bezier(0.175, 0.885, 0.32, 1), background-color 1s cubic-bezier(0.175, 0.885, 0.32, 1), opacity 0.76923s cubic-bezier(0.175, 0.885, 0.32, 1); }\n\n.page--products.active ~ header .order_button {\n  background: #fff;\n  color: #002bff; }\n\n.page--portfolio.active ~ header .order_button {\n  background: #0014d9;\n  color: #fff; }\n\n.page--skills.active ~ header .order_button {\n  background: #0014d9;\n  color: #fff; }\n\n.page--contacts.active ~ header:after {\n  width: 100%; }\n\n.page--production.active ~ header .order_button {\n  background: #fff;\n  color: #002bff; }\n\nsection.page:nth-child(1) {\n  z-index: 8; }\n\nsection.page:nth-child(2) {\n  z-index: 7; }\n\nsection.page:nth-child(3) {\n  z-index: 6; }\n\nsection.page:nth-child(4) {\n  z-index: 5; }\n\nsection.page:nth-child(5) {\n  z-index: 4; }\n\nsection.page:nth-child(6) {\n  z-index: 3; }\n\nsection.page:nth-child(7) {\n  z-index: 2; }\n\nsection.page:nth-child(8) {\n  z-index: 1; }\n\nsection.page:nth-child(9) {\n  z-index: 0; }\n\n.page {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  text-align: center;\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  will-change: transform;\n  pointer-events: none;\n  background-color: #fff;\n  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1);\n  backface-visibility: hidden;\n  -moz-transform: translate3d(0, -100%, 0);\n  -o-transform: translate3d(0, -100%, 0);\n  -ms-transform: translate3d(0, -100%, 0);\n  -webkit-transform: translate3d(0, -100%, 0);\n  transform: translate3d(0, -100%, 0);\n  -webkit-backface-visibility: hidden; }\n\n.page.active {\n  pointer-events: initial;\n  -moz-transform: translate3d(0, 0, 0);\n  -o-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n  .page.active ~ .page {\n    -moz-transform: translate3d(0, 0, 0);\n    -o-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n\n.page--main {\n  background: #f6f6f6; }\n\n.page--motivation {\n  background: #f6f6f6; }\n\n.page--products, .page--production {\n  background: #fff843; }\n\n.page--contacts {\n  background: #000000;\n  color: #fff; }\n\nbody.disabled_scroll_animation section.page {\n  transition: none; }\n\n.page__bg {\n  position: absolute;\n  width: 100%;\n  height: 100%; }\n  .page__bg canvas {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n\n.page__inner {\n  position: relative;\n  z-index: 1;\n  margin: auto 0;\n  padding: 60px 0; }\n  .page__inner .logo_small {\n    display: inline-block;\n    width: 42px;\n    height: 25px;\n    margin-top: 6vh; }\n\n.page__inner--production {\n  padding: 60px 60px 0; }\n\n.page__inner--team {\n  position: relative;\n  z-index: 2; }\n\n.copyright {\n  background: url(" + __webpack_require__(24) + ") center no-repeat;\n  width: 16px;\n  height: 158px;\n  left: 6px;\n  bottom: 45px;\n  position: absolute; }\n\n.points_group {\n  position: absolute;\n  z-index: 2; }\n\n.points {\n  background: url(" + __webpack_require__(25) + ") center no-repeat;\n  width: 115px;\n  height: 134px;\n  float: left;\n  margin: 5px 6px 6px 0; }\n\n.points--horizontal {\n  background: url(" + __webpack_require__(26) + ") center no-repeat;\n  height: 115px;\n  width: 134px;\n  margin: 0 5px 6px 6px; }\n\n.points--horizontal--blue {\n  background-image: url(" + __webpack_require__(27) + "); }\n\n.points--horizontal--yellow {\n  background-image: url(" + __webpack_require__(28) + "); }\n\n.points--horizontal--yellow--thin {\n  background-image: url(" + __webpack_require__(29) + "); }\n\n.figure {\n  position: absolute;\n  z-index: 0;\n  background: #fff623; }\n\n.pager {\n  position: absolute;\n  right: 29px;\n  bottom: 110px;\n  width: 10px;\n  z-index: 10;\n  will-change: opacity;\n  opacity: 0;\n  transition: opacity .5s; }\n  .pager.active {\n    will-change: none;\n    opacity: 1; }\n  .pager:after {\n    content: '';\n    display: block;\n    position: absolute;\n    left: 50%;\n    width: 2px;\n    margin-left: -1px;\n    top: 0;\n    background: #000;\n    bottom: 0;\n    transition: background 1s cubic-bezier(0.175, 0.885, 0.32, 1); }\n  .pager span {\n    cursor: pointer;\n    z-index: 2;\n    display: block;\n    position: relative;\n    margin-bottom: 16px;\n    border: 3px solid #000;\n    background: #000;\n    width: 10px;\n    height: 10px;\n    box-sizing: border-box;\n    will-change: transform;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    transform: translateZ(0);\n    transition: background 1s cubic-bezier(0.175, 0.885, 0.32, 1), border-color 1s cubic-bezier(0.175, 0.885, 0.32, 1), transform 100ms;\n    border-radius: 50%; }\n    .pager span:hover {\n      transform: scale(1.2) translateZ(0); }\n    .pager span:after {\n      content: '';\n      display: block;\n      position: absolute;\n      left: -8px;\n      top: -8px;\n      right: -8px;\n      bottom: -8px; }\n    .pager span.active {\n      pointer-events: none;\n      background: #fff; }\n    .pager span:last-child {\n      margin-bottom: 0; }\n\n.page--contacts.active ~ .pager:after {\n  background: #fff; }\n\n.page--contacts.active ~ .pager span {\n  background: #fff;\n  border-color: #fff; }\n  .page--contacts.active ~ .pager span.active {\n    background: #000; }\n\n.button {\n  display: inline-block;\n  padding: 0 28px;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  letter-spacing: .2em;\n  cursor: pointer; }\n\n.button--big {\n  font-size: 18px;\n  box-sizing: border-box;\n  height: 70px;\n  line-height: 60px;\n  border: 5px solid #000;\n  color: #002bff; }\n\n.arrow {\n  display: inline-block; }\n\n.arrow--down {\n  display: block;\n  width: 40px;\n  height: 90px;\n  margin: 52px auto 0;\n  background: url(" + __webpack_require__(30) + ") no-repeat center center; }\n\n.arrow--left:before, .arrow--right:before {\n  content: '';\n  padding-bottom: 45.56%;\n  display: block;\n  width: 100%;\n  background: url(" + __webpack_require__(31) + ") no-repeat center; }\n\n.arrow--right:before {\n  background: url(" + __webpack_require__(32) + ") no-repeat center; }\n\n.arrow--brands {\n  width: 10.59%; }\n\n.section_next {\n  cursor: pointer; }\n\n.logo_big {\n  width: 335px;\n  height: 58px; }\n\n.title {\n  font-family: balezdrov11-Regular, Arial, sans-serif;\n  font-size: 50px;\n  line-height: 1.3em;\n  display: block;\n  max-width: 900px;\n  padding: 0 20px;\n  margin: 0 auto; }\n\n.title--contacts {\n  margin-top: 75px; }\n\n.title--main {\n  max-width: 1000px; }\n\n.title--skills:before {\n  content: '';\n  display: block;\n  width: 135px;\n  height: 135px;\n  background: url(" + __webpack_require__(33) + ") no-repeat;\n  margin: 0 auto 35px; }\n\n.title--popup {\n  margin-bottom: 30px; }\n\n.subtitle {\n  max-width: 670px;\n  line-height: 24px;\n  margin: 18px auto 0; }\n\n.tags {\n  font-size: 0;\n  max-width: 1100px;\n  margin: 0 auto; }\n\n.tag {\n  padding: 0 1.23em;\n  display: inline-block;\n  line-height: 2.54em;\n  margin: 0 12px 15px;\n  font-size: 13px; }\n\n.tags--skills .tag {\n  background: #042dff;\n  color: #fff; }\n\n.tags--platforms .tag {\n  background: #fff623;\n  color: #000; }\n\n.tags--brands {\n  font-family: Helvetica Neue, Helvetica, Arial;\n  max-width: 896px; }\n  .tags--brands .tag {\n    padding: 0 .56em;\n    font-size: 18px;\n    background: #f6f6f6;\n    color: #000000;\n    margin: 0 7px 15px;\n    line-height: 2em; }\n\n.page--main .subtitle {\n  margin-top: 29px;\n  font-size: 20px;\n  margin-bottom: 75px; }\n\n.page--main .logo {\n  margin-bottom: 90px; }\n\n.page--products .subtitle {\n  max-width: 590px; }\n\n.page--portfolio .logo {\n  margin-top: 3vh; }\n\n.page--skills .skills_text {\n  font-family: \"GothamPro-Bold\";\n  text-transform: uppercase;\n  letter-spacing: .2em;\n  max-width: 520px;\n  font-size: 11.7px;\n  line-height: 1.7em;\n  margin: 35px auto 0; }\n\n.page--skills .tags {\n  margin-top: 40px; }\n\n.page--skills .tags_platforms {\n  margin-top: 25px; }\n\n.page--team .subtitle {\n  max-width: 580px;\n  margin-top: 30px; }\n\n.page--contacts .logo * {\n  color: #fff843; }\n\n.page--contacts .logo .logo__master {\n  border-color: #fff843; }\n\n.page--contacts .logo .logo__resize .logo__resize__corner:before, .page--contacts .logo .logo__resize .logo__resize__corner:after {\n  border-color: #fff843; }\n\n.page--contacts .logo .logo__resize .logo__resize__border.logo__resize__border--vertical:before, .page--contacts .logo .logo__resize .logo__resize__border.logo__resize__border--vertical:after {\n  background: #fff843; }\n\n.page--contacts .logo .logo__resize .logo__resize__border.logo__resize__border--horizontal:before, .page--contacts .logo .logo__resize .logo__resize__border.logo__resize__border--horizontal:after {\n  background-image: url(" + __webpack_require__(34) + "); }\n  @media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n    .page--contacts .logo .logo__resize .logo__resize__border.logo__resize__border--horizontal:before, .page--contacts .logo .logo__resize .logo__resize__border.logo__resize__border--horizontal:after {\n      background-image: url(" + __webpack_require__(35) + ");\n      background-size: auto 100%; } }\n\n.page--production .subtitle {\n  color: #747128;\n  line-height: 26px; }\n\n.motivations {\n  margin-top: 50px;\n  display: table;\n  width: 100%; }\n\n.motivation {\n  min-height: 150px;\n  box-sizing: border-box;\n  width: 50%;\n  display: block;\n  float: left;\n  text-align: left;\n  position: relative;\n  background-color: #fff; }\n  .motivation:nth-child(odd) .motivation__inner {\n    float: right; }\n\n.motivation__inner {\n  max-width: 489px;\n  padding: 0 40px 0 150px;\n  box-sizing: border-box;\n  position: relative; }\n  .motivation__inner:before {\n    height: 150px;\n    width: 150px;\n    content: '';\n    display: block;\n    position: absolute;\n    background: no-repeat center center;\n    background-size: contain; }\n\n.motivation__text {\n  min-height: 150px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  line-height: 24px;\n  position: relative;\n  padding: 20px 0 20px 5px; }\n\n.motivation_image {\n  height: 150px;\n  width: 150px;\n  float: left;\n  position: relative; }\n  .motivation_image:after {\n    content: '';\n    display: block;\n    position: absolute;\n    background: no-repeat center center;\n    background-size: contain; }\n\n.motivation--click, .motivation--interactive, .motivation--time {\n  background: #fff843; }\n\n.motivation--click .motivation__inner:before {\n  top: 23px;\n  left: -13px;\n  width: 130px;\n  height: 100px;\n  background-image: url(" + __webpack_require__(36) + "); }\n  @media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n    .motivation--click .motivation__inner:before {\n      background-image: url(" + __webpack_require__(37) + "); } }\n\n.motivation--focus .motivation__inner:before {\n  top: 36px;\n  left: -26px;\n  width: 158px;\n  height: 68px;\n  background-image: url(" + __webpack_require__(38) + "); }\n  @media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n    .motivation--focus .motivation__inner:before {\n      background-image: url(" + __webpack_require__(39) + "); } }\n\n.motivation--media .motivation__inner:before {\n  top: 25px;\n  left: -5px;\n  width: 123px;\n  height: 112px;\n  background-image: url(" + __webpack_require__(40) + "); }\n  @media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n    .motivation--media .motivation__inner:before {\n      background-image: url(" + __webpack_require__(41) + "); } }\n\n.motivation--interactive .motivation__inner:before {\n  top: 8px;\n  left: 35px;\n  width: 117px;\n  height: 133px;\n  background-image: url(" + __webpack_require__(42) + "); }\n  @media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n    .motivation--interactive .motivation__inner:before {\n      background-image: url(" + __webpack_require__(43) + "); } }\n\n.motivation--time .motivation__inner:before {\n  top: 24px;\n  left: 14px;\n  width: 80px;\n  height: 103px;\n  background-image: url(" + __webpack_require__(44) + "); }\n  @media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n    .motivation--time .motivation__inner:before {\n      background-image: url(" + __webpack_require__(45) + "); } }\n\n.motivation--success .motivation__inner:before {\n  top: 22px;\n  left: 33px;\n  width: 99px;\n  height: 101px;\n  background-image: url(" + __webpack_require__(46) + "); }\n  @media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n    .motivation--success .motivation__inner:before {\n      background-image: url(" + __webpack_require__(47) + "); } }\n\n.team {\n  margin-top: 35px;\n  font-size: 0;\n  font-family: GothamPro-Medium; }\n\n.team__row {\n  line-height: 32px;\n  margin-bottom: 5px; }\n  .team__row li {\n    display: inline-block;\n    font-size: 20px;\n    padding-left: 50px;\n    position: relative; }\n    .team__row li:before {\n      content: '';\n      position: absolute;\n      display: block;\n      width: 6px;\n      height: 6px;\n      background: currentColor;\n      border-radius: 3px;\n      left: 22px;\n      top: 50%;\n      margin-top: -3px; }\n    .team__row li:first-child {\n      padding-left: 0; }\n      .team__row li:first-child:before {\n        display: none; }\n\n.products_steps {\n  text-align: left;\n  width: 1060px;\n  margin: 55px auto 0; }\n\n.step {\n  display: block;\n  float: left;\n  width: 351px;\n  position: relative; }\n  .step:last-child {\n    width: 290px; }\n  .step:first-child {\n    padding-left: 68px; }\n  .step:after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 90px;\n    height: 41px;\n    right: 60px;\n    background: url(" + __webpack_require__(32) + ") no-repeat center;\n    background-size: cover;\n    top: 11px; }\n  .step:last-child:after {\n    display: none; }\n  .step:last-child .step__text {\n    width: auto; }\n\n.step__icon {\n  position: relative;\n  margin-bottom: 35px;\n  height: 58px;\n  display: inline-block; }\n\n.logo--steps * {\n  color: #000; }\n\n.logo--steps .logo__master {\n  border-color: #000; }\n\n.logo--steps .logo__resize .logo__resize__corner:before, .logo--steps .logo__resize .logo__resize__corner:after {\n  border-color: #000; }\n\n.logo--steps .logo__resize .logo__resize__border.logo__resize__border--vertical:before, .logo--steps .logo__resize .logo__resize__border.logo__resize__border--vertical:after {\n  background: #000; }\n\n.logo--steps .logo__resize .logo__resize__border.logo__resize__border--horizontal:before, .logo--steps .logo__resize .logo__resize__border.logo__resize__border--horizontal:after {\n  background-image: url(" + __webpack_require__(48) + "); }\n  @media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n    .logo--steps .logo__resize .logo__resize__border.logo__resize__border--horizontal:before, .logo--steps .logo__resize .logo__resize__border.logo__resize__border--horizontal:after {\n      background-image: url(" + __webpack_require__(49) + ");\n      background-size: auto 100%; } }\n\n.step__icon--bubble {\n  height: 76px;\n  width: 137px;\n  margin-top: -8px;\n  margin-bottom: 20px;\n  background: url(" + __webpack_require__(50) + ") no-repeat center; }\n  .step__icon--bubble .bubble_points {\n    top: 23px;\n    font-size: 0;\n    position: absolute;\n    z-index: 2;\n    width: 100%;\n    left: 0;\n    text-align: center; }\n    .step__icon--bubble .bubble_points span {\n      position: relative; }\n    .step__icon--bubble .bubble_points span, .step__icon--bubble .bubble_points:before, .step__icon--bubble .bubble_points:after {\n      display: inline-block;\n      width: 10px;\n      border-radius: 50%;\n      height: 10px;\n      background: #000;\n      margin: 0 7px; }\n    .step__icon--bubble .bubble_points:before, .step__icon--bubble .bubble_points:after {\n      content: ''; }\n  .step__icon--bubble svg {\n    width: 138px;\n    height: 76px;\n    top: -7px; }\n  .step__icon--bubble:after {\n    right: -149px; }\n\n.step__icon--master:after {\n  right: -142px; }\n\n.step__icon--master:before, .step__icon--resize:before {\n  transition: width 1s;\n  content: '';\n  width: 100%;\n  right: 0;\n  position: absolute;\n  height: 100%;\n  display: block;\n  background: #fff;\n  z-index: 0; }\n\n.step__text {\n  width: 260px; }\n\n.brands_title {\n  text-align: center;\n  max-width: 852px;\n  padding: 0 18px;\n  margin: 55px auto 30px;\n  overflow: hidden;\n  box-sizing: border-box;\n  font-size: 0; }\n  .brands_title .arrow {\n    width: 10.59%; }\n  .brands_title > * {\n    display: inline-block;\n    vertical-align: middle; }\n  .brands_title span {\n    width: 78.82%;\n    font-size: 18px;\n    font-family: \"GothamPro-Bold\";\n    line-height: 2.33em; }\n\n.faces {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1; }\n\n.face {\n  position: absolute;\n  background: 0 0 no-repeat;\n  background-size: 100% auto; }\n\n.face--1 {\n  right: 50%;\n  margin-right: 444px;\n  top: 60px;\n  background-image: url(" + __webpack_require__(51) + ");\n  width: 239px;\n  height: 331px; }\n\n.face--2 {\n  left: 50%;\n  margin-left: 376px;\n  top: 114px;\n  width: 147px;\n  height: 282px;\n  background-image: url(" + __webpack_require__(52) + "); }\n\n.face--3 {\n  top: 384px;\n  right: 0;\n  background-image: url(" + __webpack_require__(53) + ");\n  width: 174px;\n  height: 186px; }\n\n.face--4 {\n  width: 126px;\n  height: 184px;\n  bottom: 106px;\n  margin-right: 353px;\n  right: 50%;\n  background-image: url(" + __webpack_require__(54) + "); }\n\n.face--5 {\n  width: 92px;\n  height: 137px;\n  bottom: 32px;\n  margin-left: 97px;\n  left: 50%;\n  background-image: url(" + __webpack_require__(55) + "); }\n\n.prices_image {\n  background: url(" + __webpack_require__(56) + ") no-repeat center;\n  background-size: contain;\n  width: 143px;\n  height: 140px;\n  margin: 0 auto 42px; }\n\n.price_list {\n  overflow: hidden;\n  margin: 55px auto 0;\n  display: block;\n  max-width: 886px;\n  text-align: left; }\n\n.price {\n  display: block;\n  width: 33.33%;\n  float: left;\n  margin-bottom: 40px;\n  padding-left: 64px;\n  box-sizing: border-box; }\n  .price:nth-child(3n+4) {\n    clear: both; }\n\n.price__value {\n  font-size: 16px; }\n\n.step__title, .price__title {\n  font-family: GothamPro-Bold;\n  font-size: 20px;\n  margin-bottom: 15px;\n  line-height: 1.35em;\n  width: 260px; }\n\n.contacts_list {\n  width: 886px;\n  margin: 80px auto 0;\n  font-size: 0;\n  text-align: left; }\n\n.contacts_list__item {\n  display: inline-block;\n  font-size: 20px;\n  margin-left: 90px; }\n  .contacts_list__item:first-child {\n    margin-left: 80px; }\n\n.contact_link:before {\n  content: '';\n  display: inline-block;\n  background: center no-repeat;\n  background-size: contain;\n  width: 30px;\n  height: 30px;\n  vertical-align: middle;\n  margin-right: 19px;\n  position: relative;\n  top: -2px; }\n\n.contact_link--phone:before {\n  background-image: url(" + __webpack_require__(57) + "); }\n\n.contact_link--messenger:before {\n  background-image: url(" + __webpack_require__(58) + "); }\n\n.contact_link--email:before {\n  width: 31px;\n  height: 24px;\n  background-image: url(" + __webpack_require__(59) + "); }\n\n.address {\n  color: #505050;\n  font-size: 12px;\n  letter-spacing: .2em;\n  margin-top: 120px;\n  font-family: GothamPro-Bold;\n  text-transform: uppercase; }\n\n.book {\n  margin: 2vh auto 0;\n  box-sizing: border-box;\n  text-transform: uppercase;\n  position: relative;\n  max-width: 250px;\n  width: 25vh; }\n\n.book__image {\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  height: 0;\n  padding: 0 2.2vh 137.28% .6vh;\n  overflow: hidden; }\n  .book__image:before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: url(" + __webpack_require__(60) + ") no-repeat center;\n    width: 100%;\n    height: 100%; }\n\n.arrow--book {\n  width: 99px;\n  position: absolute;\n  top: 50%;\n  margin-top: -22px; }\n  .arrow--book.arrow--left {\n    left: 100%;\n    margin-left: 112px; }\n  .arrow--book.arrow--right {\n    right: 100%;\n    margin-right: 112px; }\n\n.book__title {\n  font-family: GothamPro-Black;\n  font-weight: bold;\n  font-size: 1.1vh;\n  line-height: 2vh;\n  letter-spacing: .2em;\n  padding: 0 1vh;\n  margin-top: 4vh; }\n\n.book__logo {\n  margin: 3vh auto 0;\n  width: 10vh;\n  height: 6.08vh;\n  max-width: 135px;\n  max-height: 82px; }\n\n.book_description {\n  max-width: 650px;\n  line-height: 27px;\n  margin: 2vh auto 0; }\n\n.book_request_title {\n  font-family: GothamPro-Black;\n  font-weight: bold;\n  font-size: 11px;\n  line-height: 2em;\n  text-transform: uppercase;\n  margin-top: 2vh;\n  margin-bottom: 1.5vh; }\n\n.book_request_inner {\n  margin: 0 auto;\n  font-size: 0; }\n  .book_request_inner input, .book_request_inner button {\n    vertical-align: top;\n    display: inline-block;\n    margin: 0 12px 12px;\n    width: 312px; }\n\n::-webkit-input-placeholder {\n  color: #000; }\n\n::-moz-placeholder {\n  color: #000; }\n\n:-moz-placeholder {\n  color: #000; }\n\n:-ms-input-placeholder {\n  color: #000; }\n\nbutton {\n  display: block;\n  background-color: #fff; }\n\ninput, textarea {\n  display: block;\n  background-color: #fff;\n  height: 70px;\n  line-height: 42px;\n  color: #000;\n  padding: 14px 34px;\n  margin-bottom: 12px; }\n  input:focus, textarea:focus {\n    background: #fff; }\n\ntextarea {\n  line-height: 28px; }\n\nform {\n  position: relative;\n  z-index: 1; }\n\n.popup__close {\n  position: absolute;\n  width: 21px;\n  height: 21px;\n  background: url(" + __webpack_require__(61) + ") no-repeat center;\n  background-size: contain;\n  cursor: pointer;\n  top: 32px;\n  right: 32px; }\n\n.popup__inner {\n  overflow-x: hidden;\n  box-sizing: border-box;\n  margin: 100px auto;\n  position: relative;\n  will-change: transform;\n  transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1);\n  transform: translate3d(0, -30%, 0);\n  border: 4px solid #000;\n  padding: 87px 187px 113px;\n  background: #fff843;\n  max-width: 886px; }\n  .popup__inner input, .popup__inner textarea {\n    width: 100%; }\n  .popup__inner textarea {\n    resize: none;\n    height: 160px; }\n  .popup__inner button {\n    margin-top: 32px;\n    padding: 0 53px; }\n\n.popup__inner--banner {\n  padding: 85px 100px 120px;\n  width: 100%;\n  background: #fff; }\n\n.popup {\n  z-index: 100;\n  position: fixed;\n  height: 100%;\n  left: 0;\n  top: 0;\n  width: 100%;\n  overflow-y: auto;\n  opacity: 0;\n  pointer-events: none;\n  will-change: opacity;\n  transition: opacity 0.2s cubic-bezier(0.175, 0.885, 0.32, 1);\n  background-color: rgba(0, 0, 0, 0.3); }\n  .popup.active {\n    opacity: 1;\n    pointer-events: auto; }\n    .popup.active .popup__inner {\n      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1);\n      transform: translate3d(0, 0, 0); }\n\n.popup--order {\n  flex-direction: column;\n  text-align: center; }\n\n.popup_banner_title {\n  font-size: 18px;\n  text-align: center;\n  margin-bottom: 40px;\n  font-family: Helvetica Neue, Helvetica, Arial; }\n\n.popup_banner_description {\n  max-width: 563px;\n  margin-bottom: 30px; }\n\n.banners {\n  overflow: hidden;\n  margin-bottom: 27px; }\n\n.banner {\n  margin-right: 20px;\n  margin-bottom: 20px;\n  float: left; }\n\n.banner_code {\n  clear: both;\n  color: #0014d9;\n  max-width: 563px; }\n\n.slider_wrap {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin: 0 auto;\n  padding-top: 80px; }\n\n.slider {\n  margin: 0 auto;\n  display: flex;\n  align-content: space-around;\n  transition: transform .7s; }\n\n.slide {\n  padding: 0 42px;\n  width: 240px;\n  display: block;\n  position: relative;\n  will-change: transform; }\n  .slide.active {\n    z-index: 10; }\n    .slide.active .slide__inner:after {\n      opacity: 0; }\n    .slide.active .slide__inner:before {\n      border-color: transparent;\n      background: transparent; }\n    .slide.active .slide__title {\n      opacity: 1;\n      transform: translate3d(0, 0, 0);\n      transition-delay: .6s;\n      pointer-events: auto; }\n    .slide.active .slide__image {\n      -moz-filter: grayscale(0) !important;\n      -webkit-filter: grayscale(0) !important;\n      filter: grayscale(0) !important;\n      color: #fff; }\n\n.slide__title {\n  position: absolute;\n  top: -60px;\n  color: #666666;\n  width: 100%;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity .3s, transform .3s;\n  will-change: opacity, transform;\n  transform: translate3d(0, 50%, 0); }\n\n.slide__image {\n  transition: all .4s;\n  position: relative;\n  background: red;\n  width: 100%;\n  padding-bottom: 166.67%;\n  height: 0;\n  color: #c7c7c7;\n  background: center no-repeat;\n  background-size: cover;\n  -moz-filter: grayscale(100%);\n  -webkit-filter: grayscale(100%);\n  filter: grayscale(100%); }\n\n.slide__inner {\n  cursor: pointer;\n  width: inherit;\n  margin: 0 auto;\n  position: relative; }\n  .slide__inner:after, .slide__inner:before {\n    content: '';\n    position: absolute;\n    display: block;\n    z-index: 2; }\n  .slide__inner:after {\n    width: 76px;\n    height: 76px;\n    left: 50%;\n    top: 50%;\n    margin-left: -38px;\n    margin-top: -38px;\n    background: url(" + __webpack_require__(62) + ") no-repeat center;\n    background-size: contain;\n    opacity: 1;\n    will-change: opacity;\n    transition: opacity .1s; }\n  .slide__inner:before {\n    transition: all .3s;\n    background: rgba(255, 255, 255, 0.78);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    border: 4px solid #002bff; }\n  .slide__inner:hover:after {\n    opacity: 0; }\n  .slide__inner:hover:before {\n    background: rgba(255, 255, 255, 0.6); }\n  .slide__inner:hover .slide__image {\n    -moz-filter: grayscale(50%);\n    -webkit-filter: grayscale(50%);\n    filter: grayscale(50%); }\n\n.disabled_scroll_animation .slider {\n  transition: none; }\n  .disabled_scroll_animation .slider .slide .slide__image {\n    transition: none; }\n  .disabled_scroll_animation .slider .slide .slide__title {\n    transition: none; }\n\n@media screen and (max-width: 1000px) {\n  .price {\n    width: 50%; }\n    .price:nth-child(3n+4) {\n      clear: none; }\n    .price:nth-child(2n +3) {\n      clear: both; }\n  .contacts_list {\n    width: 100%;\n    text-align: center; }\n    .contacts_list li {\n      margin: 0 45px 25px !important; }\n  .products_steps {\n    width: 100%;\n    text-align: center; }\n  .step {\n    width: 30%;\n    padding: 0 !important;\n    margin: 0 35px 35px !important;\n    display: inline-block;\n    float: none; }\n    .step:after {\n      display: none; }\n  .step__title, .step__text {\n    width: 100%; }\n  .step__icon {\n    margin: 0 auto 15px; } }\n\n@media screen and (max-width: 700px) {\n  .products_steps li {\n    margin: 0 0 35px !important;\n    width: 100%; } }\n\n@media screen and (max-height: 770px) {\n  .book {\n    width: 18vh; } }\n\n@media screen and (max-height: 900px) {\n  .slider .slide {\n    padding: 0 2vh;\n    width: 20vh; }\n    .slider .slide .slide_title {\n      font-size: 2vh;\n      top: -8vh;\n      line-height: 1.5em; }\n    .slider .slide .slide_inner:after {\n      width: 6vh;\n      height: 6vh;\n      margin-left: -3vh;\n      margin-top: -3vh; } }\n\n@media screen and (max-width: 700px) {\n  body {\n    overflow: auto;\n    font-size: 14px; }\n  canvas {\n    display: none; }\n  .page {\n    position: relative;\n    height: auto;\n    z-index: 1;\n    display: block;\n    pointer-events: all;\n    transform: none;\n    font-size: 14px;\n    transition: all 0s; }\n    .page .page__inner {\n      padding: 50px 0; }\n  .page--contacts .page__inner {\n    padding: 50px 0 100px; }\n  .page--portfolio, .page--production {\n    display: none; }\n  header {\n    background: #000 !important; }\n    header * {\n      color: #fff !important; }\n    header .logo_small {\n      display: none; }\n    header svg {\n      fill: #fff !important; }\n  .order_button {\n    position: fixed;\n    bottom: 0;\n    z-index: 2;\n    left: 0;\n    width: 100%;\n    margin: 0;\n    text-align: center;\n    padding: 0;\n    opacity: 1 !important;\n    pointer-events: all !important;\n    background: #000;\n    color: #fff;\n    transition: all 0s !important; }\n  .pager {\n    display: none; }\n  .title {\n    font-size: 35px;\n    line-height: 48px; }\n  .page--main .page__inner {\n    padding-top: 112px; }\n  .logo_big {\n    width: 80%; }\n  .page--main .arrow_down {\n    margin-top: 35px;\n    width: 21px;\n    height: 45px; }\n  .page--main .logo_big {\n    margin-bottom: 52px; }\n  .page--main .subtitle {\n    font-size: 18px;\n    margin: 25px auto; }\n  .price {\n    width: 100%;\n    text-align: center;\n    padding: 0; }\n  .price__title {\n    width: 100%; }\n  .motivations {\n    display: block; }\n  .motivation {\n    display: block;\n    min-height: 0;\n    background: #fff !important;\n    width: 100%;\n    padding: 0; }\n    .motivation:nth-child(even) {\n      background-color: #fff843 !important; }\n  .motivation__inner {\n    max-width: initial;\n    width: 100%; }\n  .motivation__text {\n    padding: 20px; }\n  .motivation--click .motivation__inner:before {\n    top: 24px;\n    left: 21px;\n    width: 110px;\n    height: 85px; }\n  .motivation--focus .motivation__inner:before {\n    top: 30px;\n    left: -10px;\n    width: 131px;\n    height: 60px; }\n  .motivation--media .motivation__inner:before {\n    top: 27px;\n    left: 26px;\n    width: 92px;\n    height: 84px; }\n  .motivation--interactive .motivation__inner:before {\n    top: 14px;\n    left: 30px;\n    width: 94px;\n    height: 115px; }\n  .motivation--time .motivation__inner:before {\n    top: 21px;\n    left: 38px;\n    width: 70px;\n    height: 91px; }\n  .motivation--success .motivation__inner:before {\n    top: 26px;\n    left: 28px;\n    width: 95px;\n    height: 95px; }\n  .skills_text {\n    width: 90%; }\n  .team__row {\n    margin: 0; }\n    .team__row li {\n      padding-bottom: 30px;\n      width: 100%;\n      padding-left: 0; }\n      .team__row li:first-child:before {\n        display: block; }\n      .team__row li:before {\n        position: absolute;\n        left: 50%;\n        bottom: 12px;\n        top: auto; }\n  .face {\n    display: none; }\n  .face--1 {\n    left: 0;\n    top: 160px;\n    width: 150px;\n    margin-left: -80px;\n    display: block; }\n  .face--5 {\n    display: block;\n    width: 72px;\n    bottom: 20px;\n    margin-left: 0;\n    left: 0; }\n  .face--2 {\n    right: -21px;\n    margin-left: 0;\n    top: 290px;\n    width: 87px;\n    display: block;\n    left: auto; }\n  .popup {\n    overflow: hidden; }\n  .popup--order .popup__inner {\n    max-width: initial;\n    border: 0;\n    padding: 60px 13px; }\n  .popup__inner {\n    margin: 0;\n    left: 0;\n    position: absolute;\n    bottom: 0;\n    top: 0;\n    width: 100%;\n    box-sizing: border-box;\n    overflow-y: auto; }\n    .popup__inner form {\n      max-width: 600px;\n      margin: 0 auto; }\n  .popup_open {\n    overflow: hidden; } }\n\n.mobile body, .mobile {\n  overflow: auto;\n  font-size: 14px; }\n\n.mobile canvas {\n  display: none; }\n\n.mobile .page {\n  position: relative;\n  height: auto;\n  z-index: 1;\n  display: block;\n  pointer-events: all;\n  transform: none;\n  font-size: 14px;\n  transition: all 0s; }\n  .mobile .page .page__inner {\n    padding: 50px 0; }\n\n.mobile .page--contacts .page__inner {\n  padding: 50px 0 100px; }\n\n.mobile .page--portfolio, .mobile .page--production {\n  display: none; }\n\n.mobile header {\n  background: #000 !important; }\n  .mobile header * {\n    color: #fff !important; }\n  .mobile header .logo_small {\n    display: none; }\n  .mobile header svg {\n    fill: #fff !important; }\n\n.mobile .order_button {\n  position: fixed;\n  bottom: 0;\n  z-index: 2;\n  left: 0;\n  width: 100%;\n  margin: 0;\n  text-align: center;\n  padding: 0;\n  opacity: 1 !important;\n  pointer-events: all !important;\n  background: #000;\n  color: #fff;\n  transition: all 0s !important; }\n\n.mobile .pager {\n  display: none; }\n\n.mobile .title {\n  font-size: 35px;\n  line-height: 48px; }\n\n.mobile .page--main .page__inner {\n  padding-top: 112px; }\n\n.mobile .logo_big {\n  width: 80%; }\n\n.mobile .page--main .arrow_down {\n  margin-top: 35px;\n  width: 21px;\n  height: 45px; }\n\n.mobile .page--main .logo_big {\n  margin-bottom: 52px; }\n\n.mobile .page--main .subtitle {\n  font-size: 18px;\n  margin: 25px auto; }\n\n.mobile .price {\n  width: 100%;\n  text-align: center;\n  padding: 0; }\n\n.mobile .price__title {\n  width: 100%; }\n\n.mobile .motivations {\n  display: block; }\n\n.mobile .motivation {\n  display: block;\n  min-height: 0;\n  background: #fff !important;\n  width: 100%;\n  padding: 0; }\n  .mobile .motivation:nth-child(even) {\n    background-color: #fff843 !important; }\n\n.mobile .motivation__inner {\n  max-width: initial;\n  width: 100%; }\n\n.mobile .motivation__text {\n  padding: 20px; }\n\n.mobile .motivation--click .motivation__inner:before {\n  top: 24px;\n  left: 21px;\n  width: 110px;\n  height: 85px; }\n\n.mobile .motivation--focus .motivation__inner:before {\n  top: 30px;\n  left: -10px;\n  width: 131px;\n  height: 60px; }\n\n.mobile .motivation--media .motivation__inner:before {\n  top: 27px;\n  left: 26px;\n  width: 92px;\n  height: 84px; }\n\n.mobile .motivation--interactive .motivation__inner:before {\n  top: 14px;\n  left: 30px;\n  width: 94px;\n  height: 115px; }\n\n.mobile .motivation--time .motivation__inner:before {\n  top: 21px;\n  left: 38px;\n  width: 70px;\n  height: 91px; }\n\n.mobile .motivation--success .motivation__inner:before {\n  top: 26px;\n  left: 28px;\n  width: 95px;\n  height: 95px; }\n\n.mobile .skills_text {\n  width: 90%; }\n\n.mobile .team__row {\n  margin: 0; }\n  .mobile .team__row li {\n    padding-bottom: 30px;\n    width: 100%;\n    padding-left: 0; }\n    .mobile .team__row li:first-child:before {\n      display: block; }\n    .mobile .team__row li:before {\n      position: absolute;\n      left: 50%;\n      bottom: 12px;\n      top: auto; }\n\n.mobile .face {\n  display: none; }\n\n.mobile .face--1 {\n  left: 0;\n  top: 160px;\n  width: 150px;\n  margin-left: -80px;\n  display: block; }\n\n.mobile .face--5 {\n  display: block;\n  width: 72px;\n  bottom: 20px;\n  margin-left: 0;\n  left: 0; }\n\n.mobile .face--2 {\n  right: -21px;\n  margin-left: 0;\n  top: 290px;\n  width: 87px;\n  display: block;\n  left: auto; }\n\n.mobile .popup {\n  overflow: hidden; }\n\n.mobile .popup--order .popup__inner {\n  max-width: initial;\n  border: 0;\n  padding: 60px 13px; }\n\n.mobile .popup__inner {\n  margin: 0;\n  left: 0;\n  position: absolute;\n  bottom: 0;\n  top: 0;\n  width: 100%;\n  box-sizing: border-box;\n  overflow-y: auto; }\n  .mobile .popup__inner form {\n    max-width: 600px;\n    margin: 0 auto; }\n\n.mobile.popup_open {\n  overflow: hidden; }\n", ""]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/balezdrov11-Regular.eot";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/balezdrov11-Regular.woff";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/balezdrov11-Regular.ttf";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/GothamPro.eot";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/GothamPro.woff";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/GothamPro.ttf";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/GothamPro-Black.eot";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/GothamPro-Black.woff";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/GothamPro-Black.ttf";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/GothamPro-Bold.eot";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/GothamPro-Bold.woff";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/GothamPro-Bold.ttf";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/GothamPro-Medium.eot";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/GothamPro-Medium.woff";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/GothamPro-Medium.ttf";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/logo.eot";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/logo.woff";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/logo.ttf";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/dashed_line_blue.png";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/dashed_line_blue2x.png";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/copyright.png";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/points.svg";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/points_horizontal.svg";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/points_blue_horizontal.svg";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/points_yellow_horizontal.svg";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/points_yellow_horizontal_thin.svg";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/arrow_down.svg";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/arrow_left.svg";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/arrow_right.svg";

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/circle_and_square.svg";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/dashed_line_yellow.png";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/dashed_line_yellow2x.png";

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/motivation_icon_1.png";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/motivation_icon_1_2x.png";

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/motivation_icon_2.png";

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/motivation_icon_2_2x.png";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/motivation_icon_3.png";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/motivation_icon_3_2x.png";

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/motivation_icon_4.png";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/motivation_icon_4_2x.png";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/motivation_icon_5.png";

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/motivation_icon_5_2x.png";

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/motivation_icon_6.png";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/motivation_icon_6_2x.png";

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/dashed_line.png";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/dashed_line2x.png";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/bubble.svg";

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/face_1.svg";

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/face_2.svg";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/face_3.png";

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/face_4.svg";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/face_5.svg";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/prices_image.png";

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/phone.svg";

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/messenger.svg";

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/mail.svg";

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/book.svg";

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/popup_close.svg";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/play.svg";

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.localization = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ajax = __webpack_require__(65);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var config = {
	  attributes: {
	    local: 'data-local', //attribute, which contains in all tags, that needs to localize
	    localValues: 'data-local-values' },
	  localizationsPath: 'localization/',
	  replacementKey: '%_'
	};
	
	function replaceAllSubstrings(string, search, replacement) {
	  return string.replace(new RegExp(search, 'g'), replacement);
	}
	
	var Localization = function () {
	  function Localization() {
	    _classCallCheck(this, Localization);
	
	    this.localizations = {}; //saves loaded localizations into this array
	  }
	
	  _createClass(Localization, [{
	    key: 'init',
	    value: function init() {
	      this.updateElementsList();
	    }
	  }, {
	    key: 'updateElementsList',
	    value: function updateElementsList() {
	      this.elementsList = document.querySelectorAll('[' + config.attributes.local + ']') || [];
	    }
	  }, {
	    key: '_updateNodes',
	    value: function _updateNodes(data) {
	      this.updateElementsList();
	
	      this.elementsList.forEach(update);
	
	      function update(element) {
	        var locale = element.getAttribute(config.attributes.local),
	            valuesString = replaceAllSubstrings(element.getAttribute(config.attributes.localValues), '\'', '\"'),
	            values = void 0,
	            localizationString = JSON.parse(data)[locale];
	
	        if (valuesString) {
	          //try to parse locale values as a '%_foo': 'bar' and JSON it
	          try {
	            values = JSON.parse(valuesString);
	          } catch (e) {
	            console.log('Error. Wrong "data-local-values" attribute format: ' + e);
	          }
	          if (values) {
	            //check all values for all repeats in string from JSON
	            for (var prop in values) {
	              if (!values.hasOwnProperty(prop)) continue;
	              localizationString = replaceAllSubstrings(localizationString, config.replacementKey + prop, values[prop]);
	            }
	          }
	        }
	
	        //put formatted locale into the DOM
	        element.textContent = localizationString;
	      }
	    }
	  }, {
	    key: 'translateTo',
	    value: function translateTo(newLanguage) {
	      var _this = this;
	
	      //ru, en, etc
	      //check for localization in memory
	      for (var language in this.localizations) {
	        if (newLanguage === language) {
	          this._updateNodes(this.localizations[newLanguage]);
	          return;
	        }
	      }
	      (0, _ajax.getJSON)(config.localizationsPath + newLanguage + '.json').then(function (data) {
	        _this.localizations[newLanguage] = data;
	        _this._updateNodes(_this.localizations[newLanguage]);
	      });
	    }
	  }]);
	
	  return Localization;
	}();
	
	var localization = exports.localization = new Localization();
	;

/***/ },
/* 65 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function ajax(url, settings) {
	  var config = {
	    async: true,
	    method: 'GET',
	    headers: {
	      'X-Requested-With': 'XMLHttpRequest'
	    }
	  };
	  settings = settings || {};
	
	  Object.assign(config, settings);
	
	  return new Promise(function (resolve, reject) {
	    var request = new XMLHttpRequest(),
	        headers = config.headers || {};
	
	    request.open(config.method, url, config.async);
	
	    for (var header in headers) {
	      if (!headers.hasOwnProperty(header)) continue;
	      request.setRequestHeader(header, headers[header]);
	    }
	    request.onload = function () {
	      if (request.status === 200) {
	        resolve(request.response);
	      } else {
	        reject(Error('Error:' + request.statusText));
	      }
	    };
	    request.onerror = function () {
	      reject(Error('There was a network error.'));
	    };
	    request.send();
	  });
	}
	function getJSON(url) {
	  return ajax(url, {
	    method: 'GET',
	    headers: {
	      'Content-type': 'application/json',
	      'Accept': 'application/json'
	    }
	  });
	}
	
	exports.ajax = ajax;
	exports.getJSON = getJSON;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.scroll = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _events = __webpack_require__(67);
	
	var _popup = __webpack_require__(68);
	
	var _mobile = __webpack_require__(69);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var config = {
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
	
	var sections = void 0,
	    scroll = void 0,
	    pagerItems = [],
	    firstSrollTime = new Date().getTime(),
	    lastScrollTime = firstSrollTime,
	    mobileLastY = void 0,
	    //for touch event
	mobileScrollSensitivity = .05,
	    //percent of window height, that need to touch and move for scroll
	sectionsChangeEvent = void 0;
	
	var Scroll = function () {
	  function Scroll() {
	    _classCallCheck(this, Scroll);
	
	    this.activeSection = 0;
	  }
	
	  _createClass(Scroll, [{
	    key: 'stop',
	    value: function stop() {
	      this.disableScroll = true;
	    }
	  }, {
	    key: 'start',
	    value: function start() {
	      this.disableScroll = false;
	    }
	  }, {
	    key: 'changeSection',
	    value: function changeSection(targetIndex, noFreeze) {
	      if (_popup.popup.isOpen || (0, _mobile.isMobile)()) {
	        return null;
	      }
	
	      var currentTime = new Date().getTime();
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
	  }, {
	    key: 'init',
	    value: function init() {
	      var _this = this;
	
	      if ((0, _mobile.isMobile)() && sections) {
	        return null;
	      }
	
	      [].forEach.call(document.querySelectorAll('.go_section'), function (element) {
	        element.addEventListener('click', function () {
	          var newIndex = parseInt(element.getAttribute('data-section'));
	          _this.changeSection(newIndex, true);
	        });
	      });
	      sections = document.querySelectorAll(config.section);
	      pagerInit();
	      initHash.call(this);
	
	      (0, _events.mouseWheel)(window, wheel);
	      (0, _events.mobileScroll)(window, touchStart, touchMove, touchEnd);
	      requestAnimationFrame(function () {
	        document.body.classList.remove(config.disabledAnimationClass);
	      });
	      //key handlers
	      window.addEventListener('keydown', function (e) {
	        var direction = void 0;
	        //40 - arrow up, 38 - arrow down, 34 - page up, 33 - page down, 36 - home, 35 - end
	        if (e.keyCode === 40 || e.keyCode === 38 || e.keyCode === 34 || e.keyCode === 33) {
	          if (e.keyCode === 40 || e.keyCode === 34) {
	            direction = 1;
	          } else {
	            direction = -1;
	          }
	          if (direction) {
	            _this.changeSection(_this.activeSection + direction, true);
	          }
	        }
	
	        if (e.keyCode === 36) {
	          _this.changeSection(0, true);
	        }
	
	        if (e.keyCode === 35) {
	          _this.changeSection(sections.length - 1, true);
	        }
	      });
	    }
	  }]);
	
	  return Scroll;
	}();
	
	exports.scroll = scroll = new Scroll();
	
	sectionsChangeEvent = new CustomEvent("sectionchange", {
	  bubbles: true
	});
	
	var pagerInit = function () {
	  var pagerElementsFragment = document.createDocumentFragment(),
	      pagerWrap = document.querySelector(config.pagerWrap);
	
	  [].forEach.call(sections, function (section, i) {
	    var li = document.createElement('span');
	    i === 0 && li.classList.add(config.activeClass);
	    pagerElementsFragment.appendChild(li);
	    pagerItems.push(li);
	  });
	  if (pagerItems.length) {
	
	    pagerWrap.appendChild(pagerElementsFragment);
	    pagerWrap.classList.add(config.activeClass);
	  }
	  [].forEach.call(pagerItems, function (pagerItem, i) {
	    pagerItem.addEventListener('click', function () {
	      scroll.changeSection(i, true);
	    });
	  });
	}.bind(scroll);
	
	var touchPadInertia = void 0,
	    lastWheel = void 0;
	var wheel = function (e) {
	  var direction = 1,
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
	
	var touchMove = function (e) {
	
	  var currentY = void 0,
	      direction = void 0;
	  currentY = (0, _events.getCurrentTouchCoordinates)(e).y;
	  if (currentY < mobileLastY) {
	    direction = 1;
	  } else if (currentY > mobileLastY) {
	    direction = -1;
	  }
	
	  var sensitivity = window.innerHeight * mobileScrollSensitivity;
	  if (Math.abs(currentY - mobileLastY) > sensitivity) {
	    scroll.changeSection(this.activeSection + direction);
	  }
	}.bind(scroll);
	
	var touchStart = function touchStart(e) {
	  mobileLastY = (0, _events.getCurrentTouchCoordinates)(e).y;
	};
	
	var touchEnd = function touchEnd() {
	  mobileLastY = null;
	};
	
	function getIndexByHash() {
	  var hash = window.location.hash.substring(1),
	      index = 0;
	  if (!hash) return 0;
	  [].forEach.call(sections, function (section, i) {
	    var hashName = section.getAttribute(config.hashAttribute);
	    if (hash === hashName) {
	      index = i;
	      return null;
	    }
	  });
	  return index;
	}
	function initHash() {
	  var index = getIndexByHash();
	  scroll.changeSection(index, true);
	}
	
	exports.scroll = scroll;

/***/ },
/* 67 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var DOMContentLoaded = exports.DOMContentLoaded = function DOMContentLoaded(callback) {
	  if (!callback) {
	    return false;
	  }
	
	  if (document.readyState == "complete" || document.readyState == "loaded" || document.readyState == "interactive") {
	    callback();
	  } else {
	    document.addEventListener('DOMContentLoaded', callback);
	  }
	};
	
	var mouseWheel = exports.mouseWheel = function mouseWheel(element, callback, remove) {
	  var action = 'addEventListener';
	
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
	
	var mobileScroll = exports.mobileScroll = function mobileScroll(element, touchStart, touchMove, touchEnd, remove) {
	  var action = 'addEventListener';
	
	  if (remove) {
	    action = 'removeEventListener';
	  }
	  element[action]('touchstart', touchStart);
	  element[action]('touchmove', touchMove);
	  element[action]('touchend', touchEnd);
	};
	
	var getCurrentTouchCoordinates = exports.getCurrentTouchCoordinates = function getCurrentTouchCoordinates(e) {
	  var touches = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0];
	  return { x: touches.clienX, y: touches.clientY };
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var popups = void 0,
	    openElements = void 0,
	    closeElements = void 0,
	    popupInners = void 0;
	
	var Popup = function () {
	  function Popup() {
	    _classCallCheck(this, Popup);
	
	    this.isOpen = false;
	  }
	
	  _createClass(Popup, [{
	    key: 'init',
	    value: function init() {
	      var _this = this;
	
	      popups = document.querySelectorAll('.popup');
	      popupInners = document.querySelectorAll('.popup__inner');
	      openElements = document.querySelectorAll('.popup_link');
	      [].forEach.call(openElements, function (openButton) {
	        openButton.addEventListener('click', function (e) {
	          e.preventDefault();
	          var target = openButton.getAttribute('data-popup');
	          _this.open(target);
	        });
	      });
	      closeElements = document.querySelectorAll('.popup__close');
	      [].forEach.call(closeElements, function (closeButton) {
	        closeButton.addEventListener('click', function () {
	          return _this.close();
	        });
	      });
	      [].forEach.call(popups, function (popup) {
	        popup.addEventListener('click', function () {
	          return _this.close();
	        });
	      });
	      [].forEach.call(popupInners, function (popupInner) {
	        popupInner.addEventListener('click', function (e) {
	          return e.stopPropagation();
	        });
	      });
	      window.addEventListener('keydown', function (e) {
	        if (e.keyCode === 27) {
	          _this.close();
	        }
	      });
	    }
	  }, {
	    key: 'open',
	    value: function open(name) {
	      var _this2 = this;
	
	      [].forEach.call(popups, function (popup) {
	        if (name === popup.getAttribute('id')) {
	          _this2.isOpen = true;
	          _this2.activePopup = popup;
	          popup.scrollTop = 0;
	          _this2.activePopup.classList.add('active');
	          document.body.classList.add('popup_open');
	        }
	      });
	    }
	  }, {
	    key: 'close',
	    value: function close() {
	      if (!this.activePopup) return null;
	      if (this.lastHash) {
	        window.location.hash = this.lastHash;
	      }
	      this.isOpen = false;
	      this.activePopup.classList.remove('active');
	      this.activePopup = null;
	      document.body.classList.remove('popup_open');
	    }
	  }]);
	
	  return Popup;
	}();
	
	var popup = exports.popup = new Popup();

/***/ },
/* 69 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var isMobile = exports.isMobile = function isMobile() {
	  var check = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	  return window.innerWidth <= 700 || check;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.slider = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _popup = __webpack_require__(68);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var activeSlide = void 0,
	    xDiff = void 0,
	    slideWidth = void 0,
	    sliderWidth = void 0,
	    sliderFreeze = 700,
	    slideLock = false;
	
	var Slider = function () {
	  function Slider() {
	    _classCallCheck(this, Slider);
	  }
	
	  _createClass(Slider, [{
	    key: 'init',
	    value: function init() {
	      var _this = this;
	
	      if (this.initialized) {
	        this.initSizes();
	        this.setActive(activeSlide, true);
	        return;
	      }
	      this.slider = document.querySelector('.slider');
	
	      this.getSlides();
	
	      this.slides.forEach(function (slide) {
	        slide.xDiff = 0;
	        _this.addClick(slide);
	      });
	
	      this.initSizes();
	      var activeIndex = Math.floor(this.slides.length / 2);
	
	      this.setActive(this.slides[activeIndex], true);
	      this.initialized = true;
	    }
	  }, {
	    key: 'addClick',
	    value: function addClick(element) {
	      element.querySelector('.slide__inner').addEventListener('click', function (e) {
	        e.preventDefault();
	        click(element);
	      });
	    }
	  }, {
	    key: 'getSlides',
	    value: function getSlides() {
	      var _this2 = this;
	
	      this.slides = [];
	      [].forEach.call(this.slider.querySelectorAll('.slide'), function (slide) {
	        return _this2.slides.push(slide);
	      });
	    }
	  }, {
	    key: 'initSizes',
	    value: function initSizes() {
	      slideWidth = this.slides[0].offsetWidth;
	      sliderWidth = this.slider.offsetWidth;
	      var diff = sliderWidth - window.innerWidth;
	      if (diff <= 2 * slideWidth) {
	        diff = Math.abs(diff);
	        var slidesCount = Math.round(diff / slideWidth);
	        var slidesCountLeft = slidesCount + 2;
	        var slidesCountRight = this.slides.length - slidesCountLeft;
	
	        while (slidesCountRight < 0 || slidesCountRight < slidesCountLeft) {
	          slidesCountRight += this.slides.length;
	        }
	
	        for (var i = 0; i < slidesCountLeft; i++) {
	          var index = i;
	          while (this.slides.length <= index) {
	            index -= this.slides.length;
	          }
	          var forAppEnd = this.slides[index].cloneNode(true);
	          forAppEnd.classList.remove('active');
	          this.slider.appendChild(forAppEnd);
	          this.addClick(forAppEnd);
	        }
	        for (var _i = 0; _i < slidesCountRight; _i++) {
	          var _index = _i;
	          while (this.slides.length <= _index) {
	            _index -= this.slides.length;
	          }
	          var forPrepEnd = this.slides[this.slides.length - 1 - _index].cloneNode(true);
	          forPrepEnd.classList.remove('active');
	          this.slider.insertBefore(forPrepEnd, this.slider.querySelectorAll('.slide')[0]);
	          this.addClick(forPrepEnd);
	        }
	        this.getSlides();
	      }
	    }
	  }, {
	    key: 'setActive',
	    value: function setActive(slide, lockAnimation) {
	      var _this3 = this;
	
	      if (slideLock) return;
	
	      var slideIndex = this.slides.indexOf(slide),
	          activeIndex = this.slides.indexOf(activeSlide),
	          diff = 0,
	          next = void 0;
	
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
	      this.slider.style.transform = 'translate3d(' + diff + 'px, 0, 0)';
	      if (lockAnimation) {
	        this.slider.offsetHeight;
	        this.slider.style.transition = '';
	      }
	
	      if (typeof next !== 'undefined') {
	        slideLock = true;
	        setTimeout(function () {
	
	          if (next) {
	            if (~activeIndex) {
	              for (var i = 0; i < slideIndex - activeIndex; i++) {
	                var index = i;
	                while (_this3.slides.length <= index) {
	                  index -= _this3.slides.length;
	                }
	                _this3.slider.appendChild(_this3.slides[i]);
	              }
	            }
	          } else {
	            for (var _i2 = 0; _i2 < activeIndex - slideIndex; _i2++) {
	              var _index2 = _i2;
	              while (_this3.slides.length <= _index2) {
	                _index2 -= _this3.slides.length;
	              }
	              _this3.slider.insertBefore(_this3.slides[_this3.slides.length - 1 - _i2], document.querySelectorAll('.slide')[0]);
	            }
	          }
	          _this3.slider.style.transition = 'all 0s';
	          _this3.getSlides();
	          slideLock = false;
	          _this3.setActive(slide, true);
	        }, sliderFreeze);
	      }
	
	      if (activeSlide) {
	        activeSlide.classList.remove('active');
	      }
	      activeSlide = slide;
	      activeSlide.classList.add('active');
	    }
	  }]);
	
	  return Slider;
	}();
	
	var slider = exports.slider = new Slider();
	
	var click = function (slide) {
	  if (slide.classList.contains('active')) {
	    var target = slide.getAttribute('href').substr(1);
	    _popup.popup.open(target);
	  } else {
	    this.setActive(slide);
	  }
	}.bind(slider);

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.animationInit = undefined;
	
	var _mobile = __webpack_require__(69);
	
	var tagsAnimationDelay = 40; //ms
	var motivationsDelay = 80;
	var motivationsLi = void 0;
	
	function stepsAnimation(wrap, selector, stepDelay, baseDelay) {
	  if ((0, _mobile.isMobile)()) {
	    return null;
	  }
	  var wraps = document.querySelectorAll(wrap);
	  [].forEach.call(wraps, function (wrap) {
	    var childs = wrap.querySelectorAll(selector);
	    baseDelay = typeof baseDelay === 'undefined' ? stepDelay : baseDelay;
	    [].forEach.call(childs, function (target) {
	      target.style.transitionDelay = baseDelay + 'ms';
	      baseDelay += stepDelay;
	    });
	  });
	}
	
	var animationInit = exports.animationInit = function animationInit() {
	  stepsAnimation('.page--skills', '.tag', tagsAnimationDelay, 200);
	  motivationsLi = document.querySelectorAll('.motivations li');
	  (function () {
	    var baseDelay = 0;
	    [].forEach.call(motivationsLi, function (motivationLi) {
	      [].forEach.call(motivationLi.querySelectorAll('.motivation'), function (motivation) {
	        motivation.style.transitionDelay = baseDelay + 'ms';
	      });
	      baseDelay += motivationsDelay;
	    });
	  })();
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.rectangles = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(73);
	
	var _scroll = __webpack_require__(66);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var color = '#fff843';
	var linesColor = "#cbcbcb";
	
	var fps = 60;
	var now = void 0;
	var then = Date.now();
	var delta = void 0;
	var interval = 1000 / fps;
	// let lastMouseMoveTime = Date.now();
	
	var anglesPointsRadius = 3.5;
	var vector = new _Vector.Vector(0, 0);
	var canvas = void 0;
	var gridStep = 222;
	var grid = [],
	    gridCenter = void 0,
	    rectangleHeight = 335,
	    mouseCoordinates = [{ x: null, y: null }, { x: null, y: null }];
	document.addEventListener('sectionchange', function (e) {
	  if (_scroll.scroll.activeSection === 0) {
	    start();
	  } else {
	    stop();
	  }
	});
	var gridInit = function gridInit(element) {
	  grid = [];
	  var elementWidth = element.width,
	      center = elementWidth / 2,
	      x = center;
	
	  gridCenter = center;
	  while (x - gridStep >= 0) {
	    x -= gridStep;
	  }
	  while (x <= elementWidth) {
	    grid.push(x);
	    x += gridStep;
	  }
	};
	
	var Canvas = function () {
	  function Canvas(selector, parent) {
	    _classCallCheck(this, Canvas);
	
	    parent = parent || document;
	    this.element = parent.querySelector(selector);
	    this.ctx = this.element.getContext('2d');
	    this.width = this.element.offsetWidth;
	    this.height = this.element.offsetHeight;
	  }
	
	  _createClass(Canvas, [{
	    key: 'draw',
	    value: function draw() {
	      var ctx = this.ctx;
	      ctx.clearRect(0, 0, this.width, this.height);
	      ctx.beginPath();
	      ctx.lineWidth = 1;
	
	      grid.forEach(function (x) {
	        ctx.moveTo(x, 0);
	        ctx.lineTo(x, canvas.height);
	      });
	      rectanglesArray.forEach(function (rectangle) {
	        ctx.moveTo(rectangle.points[0][0].x, rectangle.points[0][0].y);
	        for (var i = 0; i < rectangle.points.length; i++) {
	          var next = i + 1;
	          if (next === rectangle.points.length) next = 0;
	          ctx.bezierCurveTo(rectangle.points[i][1].x, rectangle.points[i][1].y, rectangle.points[i][2].x, rectangle.points[i][2].y, rectangle.points[next][0].x, rectangle.points[next][0].y);
	        }
	      });
	      ctx.strokeStyle = linesColor;
	      ctx.fillStyle = color;
	      ctx.stroke();
	      ctx.fill();
	      ctx.closePath();
	
	      ctx.beginPath();
	      ctx.fillStyle = linesColor;
	      rectanglesArray.forEach(function (rectangle) {
	        for (var i = 0; i < 4; i++) {
	          var angle = rectangle.points[i][0];
	          ctx.moveTo(angle.x, angle.y);
	          ctx.arc(angle.x, angle.y, anglesPointsRadius, 0, 2 * Math.PI, false);
	        }
	      });
	      ctx.fill();
	    }
	  }]);
	
	  return Canvas;
	}();
	
	var rectanglesArray = [];
	
	var Point = function () {
	  function Point(point) {
	    _classCallCheck(this, Point);
	
	    this.x = point.x;
	    this.y = point.y;
	    this.constX = point.x;
	    this.constY = point.y;
	    this.stop();
	    this.animationLock = false;
	  }
	
	  _createClass(Point, [{
	    key: 'generateMovePath',
	    value: function generateMovePath(vector) {
	      var _this = this;
	
	      // let firstPoint;
	      var points = [];
	      var oscillationCount = void 0;
	      var getLastPoint = function getLastPoint() {
	        return points.length > 0 ? points[points.length - 1] : _this;
	      };
	
	      // if (vector) {
	      //   firstPoint = {x: this.x + vector.x, y: this.y + vector.y};
	      //   points.push(firstPoint);
	      //
	      // } else {
	      // }
	
	      oscillationCount = Math.round(distantFromConst(getLastPoint()) / 10);
	
	      var delta = 1;
	      for (var i = 0; i < oscillationCount; i++) {
	        delta /= 1.6;
	        var lastPoint = getLastPoint();
	        points.push({
	          x: lastPoint.x + (this.constX - lastPoint.x) * (1 + delta),
	          y: lastPoint.y + (this.constY - lastPoint.y) * (1 + delta)
	        });
	      }
	      points.push({ x: this.constX, y: this.constY });
	      this.movePath = points;
	    }
	  }, {
	    key: 'move',
	    value: function move() {
	      if (this.animationLock || this.x === this.constX && this.y === this.constY) return;
	      if (!this.movePath) {
	        this.generateMovePath();
	      }
	      if (!this.movePath.length) {
	        return;
	      }
	
	      this.x += (this.movePath[0].x - this.x) * this.speed;
	      this.y += (this.movePath[0].y - this.y) * this.speed;
	      if (pointDistance(this, this.movePath[0]) < 1) {
	        this.movePath.shift();
	        this.speed *= .75;
	      }
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      this.speed = .2;
	      this.movePath = null;
	    }
	  }]);
	
	  return Point;
	}();
	
	// top left, top right, bottom right, bottom left
	
	
	var Rectangle = function () {
	  function Rectangle(config) {
	    _classCallCheck(this, Rectangle);
	
	    this.direction = config.direction;
	    var angles = [{ x: config.x, y: config.y }, //top left
	    { x: config.x + config.width, y: config.y }, //top right
	    { x: config.x + config.width, y: config.y + rectangleHeight }, //bottom right
	    { x: config.x, y: config.y + rectangleHeight } //bottom left
	    ];
	    this.startX = config.x;
	    this.startY = config.y;
	    this.speed = config.speed || 1;
	    this.gridPosition = config.gridPosition;
	    this.points = [];
	    this.gridWidth = config.gridWidth;
	    this.isWaiting = false;
	    this.pass = null;
	    for (var i = 0; i < angles.length; i++) {
	      var next = i + 1;
	      if (next === angles.length) next = 0;
	      this.points.push([new Point({
	        x: angles[i].x,
	        y: angles[i].y
	      }), new Point({
	        x: getPointBetween(angles[i].x, angles[next].x, 1 / 2),
	        y: getPointBetween(angles[i].y, angles[next].y, 1 / 2)
	      }), new Point({
	        x: getPointBetween(angles[i].x, angles[next].x, 2),
	        y: getPointBetween(angles[i].y, angles[next].y, 2)
	      })]);
	    }
	    this.points[0].push(this.points[1][0]);
	    this.points[1].push(this.points[2][0]);
	    this.points[2].push(this.points[3][0]);
	    this.points[3].push(this.points[0][0]);
	
	    function getPointBetween(start, end, lambda) {
	      return (start + lambda * end) / (1 + lambda);
	    }
	
	    if (config.index % 1 === 0) {
	      this.index = config.index;
	      rectanglesArray[this.index] = this;
	    } else {
	      this.index = rectanglesArray.length;
	      rectanglesArray.push(this);
	    }
	  }
	
	  _createClass(Rectangle, [{
	    key: 'move',
	    value: function move() {
	      var _this2 = this;
	
	      this.points.forEach(function (line) {
	        var speed = _this2.speed;
	        for (var i = 0; i < 3; i++) {
	          var point = line[i];
	          point.x += _this2.direction.x * speed;
	          point.y += _this2.direction.y * speed;
	          point.constX += _this2.direction.x * speed;
	          point.constY += _this2.direction.y * speed;
	          if (point.movePath) {
	            point.movePath.forEach(function (point) {
	              point.x += _this2.direction.x * speed;
	              point.y += _this2.direction.y * speed;
	            });
	          }
	        }
	      });
	    }
	  }]);
	
	  return Rectangle;
	}();
	
	var animationStep = void 0;
	function animate() {
	  now = Date.now();
	  delta = now - then;
	  animationStep = requestAnimationFrame(animate);
	
	  if (delta > interval) {
	    (function () {
	
	      var curveCoef = 1;
	      var sensitivity = 40;
	      var cursorPosition = mouseCoordinates;
	      rectanglesArray.forEach(function (rectangle) {
	        if (checkRectangleVisible(rectangle)) {
	          generateRectangle(rectangle.index);
	          return;
	        }
	        checkPass(rectangle);
	        var closestLine = getClosestLine(rectangle, cursorPosition[1]);
	        var closestPoint = getClosestPoint(closestLine, cursorPosition[1]);
	        var cursorMoveVector = {
	          x: cursorPosition[1].x - cursorPosition[0].x,
	          y: cursorPosition[1].y - cursorPosition[0].y
	        };
	
	        if (vector.length.call(cursorMoveVector) > 100) return;
	        if (!rectangle.pass) rectangle.move();
	
	        rectangle.points.forEach(function (line) {
	          for (var i = 0; i < 3; i++) {
	            line[i].move();
	          }
	        });
	        if (closestPoint) {
	          closestPoint.stop();
	          clearTimeout(closestPoint.timeout);
	          closestPoint.animationLock = true;
	          if (distantFromConst(closestPoint) < sensitivity) {
	            closestPoint.x += curveCoef * cursorMoveVector.x;
	            closestPoint.y += curveCoef * cursorMoveVector.y;
	          }
	
	          closestPoint.timeout = setTimeout(function () {
	            closestPoint.animationLock = false;
	          }, 50);
	        }
	        canvas.draw();
	      });
	
	      then = now - delta % interval;
	    })();
	  }
	}
	
	function stop() {
	  document.body.removeEventListener('mousemove', mouseMove);
	  cancelAnimationFrame(animationStep);
	}
	function start() {
	  stop();
	  document.body.addEventListener('mousemove', mouseMove);
	  animationStep = requestAnimationFrame(animate);
	}
	
	var rectangles = exports.rectangles = {
	  init: function init() {
	    rectanglesArray = [];
	
	    if (!canvas) {
	      canvas = new Canvas('canvas.rectangles');
	    }
	    canvas.width = window.innerWidth;
	    canvas.height = window.innerHeight;
	
	    canvas.element.width = window.innerWidth;
	    canvas.element.height = window.innerHeight;
	
	    canvas.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
	    gridInit(canvas);
	    generateRectangle(0);
	    generateRectangle(1);
	    generateRectangle(2);
	
	    start();
	  },
	  start: start,
	  stop: stop
	};
	
	function generateRectangle(index) {
	  if (rectanglesArray[index] && rectanglesArray[index].isWaiting) return;
	  var gridWidth = getRandomInt(1, 2),
	      width = gridWidth * gridStep,
	      direction = void 0,
	      speed = Math.round(100 * (1 + 2 * Math.random())) / 100,
	      x = void 0,
	      y = void 0,
	      gridPosition = getRandomInt(0, grid.length - 2),
	      availableGridPositions = getAvailableGridPositions(index, gridWidth),
	      availableYPositions = getAvailableYPosition(index);
	  var directions = [{ x: 1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: -1 }];
	
	  direction = getRandomDirection();
	  function getRandomDirection() {
	    return directions[getRandomInt(0, directions.length - 1)];
	  }
	
	  if (direction.y && availableGridPositions.length) {
	    gridPosition = availableGridPositions[getRandomInt(0, availableGridPositions.length - 1)];
	    x = grid[gridPosition];
	    if (direction.y === 1) {
	      y = -rectangleHeight;
	    } else {
	      y = canvas.height;
	    }
	  } else if (direction.y) {
	    while (direction.y) {
	      direction = getRandomDirection();
	    }
	  }
	  if (direction.x && availableYPositions.length) {
	    var segment = availableYPositions[getRandomInt(0, availableYPositions.length - 1)];
	    y = getRandomArbitrary(segment[0], segment[1]);
	    if (direction.x === 1) {
	      x = -width;
	    } else {
	      x = canvas.width;
	    }
	  }
	  if (!x || !y) {
	    if (rectanglesArray[index]) {
	      rectanglesArray[index].isWaiting = true;
	    }
	    setTimeout(function () {
	      if (rectanglesArray[index]) {
	        rectanglesArray[index].isWaiting = false;
	      }
	      generateRectangle(index);
	    }, 200);
	    return;
	  }
	  new Rectangle({
	    x: x,
	    y: y,
	    width: width,
	    gridWidth: gridWidth,
	    canvas: canvas,
	    direction: direction,
	    index: index,
	    speed: speed,
	    gridPosition: gridPosition
	  });
	}
	
	function mouseMove(e) {
	  // lastMouseMoveTime = Date.now();
	  mouseCoordinates[0] = mouseCoordinates[1];
	  mouseCoordinates[1] = {
	    x: e.clientX,
	    y: e.clientY
	  };
	}
	function checkPass(rectangle) {
	  var direction = rectangle.direction,
	      lineToCheck = void 0,
	      otherRectangleLineIndex = void 0,
	      pass = null,
	      distances = {},
	      distanceToPass = 50;
	
	  if (direction.x) {
	    if (direction.x === 1) {
	      lineToCheck = rectangle.points[1];
	      otherRectangleLineIndex = 3;
	    } else {
	      lineToCheck = rectangle.points[3];
	      otherRectangleLineIndex = 1;
	    }
	  } else if (direction.y) {
	    if (direction.y === 1) {
	      lineToCheck = rectangle.points[2];
	      otherRectangleLineIndex = 0;
	    } else {
	      lineToCheck = rectangle.points[0];
	      otherRectangleLineIndex = 2;
	    }
	  }
	
	  rectanglesArray.forEach(function (otherRectangle) {
	    if (otherRectangle.pass === rectangle) return;
	    var otherLine = otherRectangle.points[otherRectangleLineIndex];
	    if (direction.x) {
	      if (Math.abs(lineToCheck[0].constX - otherLine[0].constX) < distanceToPass) {
	        lineToCheck.forEach(function (point) {
	          if (point.constY > otherLine[0].constY && point.constY < otherLine[3].constY || point.constY > otherLine[3].constY && point.constY < otherLine[0].constY) {
	            pass = otherRectangle;
	          }
	        });
	      }
	    } else {
	      if (Math.abs(lineToCheck[0].constY - otherLine[0].constY) < distanceToPass) {
	        lineToCheck.forEach(function (point) {
	          if (point.constX > otherLine[0].constX && point.constX < otherLine[3].constX || point.constX > otherLine[3].constX && point.constX < otherLine[0].constX) {
	            pass = otherRectangle;
	          }
	        });
	      }
	    }
	  });
	
	  rectangle.pass = pass;
	}
	function getAvailableGridPositions(index, gridWidth) {
	  var lockedGridPositions = [],
	      availableGridPositions = [],
	      lockedGridPositionsTemp = [];
	  rectanglesArray.forEach(function (rectangle, i) {
	    if (i === index) return;
	    if (rectangle.direction.y) {
	      lockedGridPositionsTemp.push(rectangle.gridPosition);
	      lockedGridPositionsTemp.push(rectangle.gridPosition - 1);
	      if (gridWidth === 2) {
	        lockedGridPositionsTemp.push(rectangle.gridPosition - 2);
	      }
	      lockedGridPositionsTemp.push(rectangle.gridPosition + 1);
	      if (rectangle.gridWidth === 2) {
	        lockedGridPositionsTemp.push(rectangle.gridPosition + 2);
	      }
	    }
	  });
	  lockedGridPositionsTemp.forEach(function (position) {
	    if (position >= 0 && position < grid.length && !~lockedGridPositions.indexOf(position)) {
	      lockedGridPositions.push(position);
	    }
	  });
	  grid.forEach(function (coordinate, i) {
	    if (!~lockedGridPositions.indexOf(i)) {
	      availableGridPositions.push(i);
	    }
	  });
	  return availableGridPositions;
	}
	function getAvailableYPosition(index) {
	  var ordinates = [];
	  rectanglesArray.forEach(function (rectangle, i) {
	    if (i === index) return;
	    if (rectangle.direction.x) {
	      ordinates.push(rectangle.startY);
	    }
	  });
	  ordinates.sort(function (a, b) {
	    return a - b;
	  });
	  var available = [];
	  var fullSegment = [0, canvas.height - rectangleHeight];
	
	  if (!ordinates.length) {
	    return [fullSegment];
	  }
	  if (ordinates[0] - rectangleHeight > fullSegment[0]) {
	    available.push([fullSegment[0], ordinates[0] - rectangleHeight]);
	  }
	  for (var i = 0; i < ordinates.length; i++) {
	    var first = void 0,
	        second = void 0;
	    if (i + 1 < ordinates.length) {
	      first = ordinates[i] + rectangleHeight;
	      second = ordinates[i + 1] - rectangleHeight;
	      if (second > first) {
	        available.push([first, second]);
	      }
	    }
	  }
	  if (available[available.length - 1] < fullSegment[1]) {
	    available.push([ordinates[ordinates.length - 1] + rectangleHeight, fullSegment[1]]);
	  }
	
	  return available;
	}
	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	function getRandomArbitrary(min, max) {
	  return Math.random() * (max - min) + min;
	}
	function getClosestLine(rectangle, point) {
	  var sensitivity = 40;
	  var closestLine = false;
	  for (var i = 0; i < rectangle.points.length; i++) {
	    var line = rectangle.points[i];
	    var next = i + 1 === 4 ? rectangle.points[0] : rectangle.points[i + 1];
	
	    if (line[0].constY === line[1].constY) {
	      if (point.y > line[0].constY - sensitivity && point.y < line[0].constY + sensitivity) {
	        if (point.x > line[0].constX - sensitivity && point.x < next[0].constX + sensitivity) {
	          closestLine = line;
	          break;
	        } else if (point.x < line[0].constX - sensitivity && point.x > next[0].constX + sensitivity) {
	          closestLine = line;
	          break;
	        }
	      }
	    } else if (point.x > line[0].constX - sensitivity && point.x < line[0].constX + sensitivity) {
	      if (point.y > line[0].constY - sensitivity && point.y < next[0].constY + sensitivity) {
	        closestLine = line;
	        break;
	      } else if (point.y < line[0].constY - sensitivity && point.y > next[0].constY + sensitivity) {
	        closestLine = line;
	        break;
	      }
	    }
	  }
	  return closestLine;
	}
	function checkRectangleVisible(rectangle) {
	  var direction = rectangle.direction;
	  var coordinateForCheck = void 0,
	      coordinateScreen = void 0;
	  var isPositive = true;
	  var delta = 5;
	  if (direction.x === 1) {
	    coordinateForCheck = rectangle.points[0][0].x;
	    coordinateScreen = canvas.width + delta;
	    isPositive = false;
	  } else if (direction.x === -1) {
	    coordinateForCheck = rectangle.points[1][0].x;
	    coordinateScreen = -delta;
	  } else if (direction.y === 1) {
	    coordinateForCheck = rectangle.points[0][0].y;
	    coordinateScreen = canvas.height + delta;
	    isPositive = false;
	  } else if (direction.y === -1) {
	    coordinateForCheck = rectangle.points[2][0].y;
	    coordinateScreen = -delta;
	  }
	  if (isPositive) {
	    return coordinateScreen - coordinateForCheck > 0;
	  }
	  return coordinateScreen - coordinateForCheck < 0;
	}
	function intersection(segment1, segment2) {
	  var x1 = segment1[0].x,
	      x2 = segment1[1].x,
	      x3 = segment2[0].x,
	      x4 = segment2[1].x,
	      y1 = segment1[0].y,
	      y2 = segment1[1].y,
	      y3 = segment2[0].y,
	      y4 = segment2[1].y,
	      ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1)),
	      ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1)),
	      x = x1 + ua * (x2 - x1),
	      y = y1 + ua * (y2 - y1);
	
	  if (ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1) {
	    return { x: x, y: y };
	  } else {
	    return null;
	  }
	}
	function pointDistance(point1, point2) {
	  return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
	}
	function distantFromConst(point) {
	  return pointDistance(point, { x: point.constX, y: point.constY });
	}
	function getClosestPoint(line, point) {
	  if (!line) return null;
	  var closest = void 0;
	  for (var i = 1; i < line.length - 1; i++) {
	    if (!closest) closest = line[i];
	    if (pointDistance(line[i], point) < pointDistance(closest, point)) {
	      closest = line[i];
	    }
	  }
	
	  return closest;
	}

/***/ },
/* 73 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Vector = function () {
	  function Vector(x, y) {
	    _classCallCheck(this, Vector);
	
	    this.x = x;
	    this.y = y;
	  }
	
	  _createClass(Vector, [{
	    key: 'change',
	    value: function change(x, y) {
	      this.x = x;
	      this.y = y;
	    }
	  }, {
	    key: 'scale',
	    value: function scale(_scale) {
	      this.x *= _scale;
	      this.y *= _scale;
	    }
	  }, {
	    key: 'sum',
	    value: function sum(vector) {
	      return new Vector(this.x + vector.x, this.y + vector.y);
	    }
	  }, {
	    key: 'diff',
	    value: function diff(vector) {
	      return new Vector(this.x - vector.x, this.y - vector.y);
	    }
	  }, {
	    key: 'add',
	    value: function add(vector) {
	      this.x += vector.x;
	      this.y += vector.y;
	    }
	  }, {
	    key: 'sub',
	    value: function sub(vector) {
	      this.x -= vector.x;
	      this.y -= vector.y;
	    }
	  }, {
	    key: 'negate',
	    value: function negate() {
	      this.x = -this.x;
	      this.y = -this.y;
	    }
	  }, {
	    key: 'length',
	    value: function length() {
	      return Math.sqrt(this.x * this.x + this.y * this.y);
	    }
	  }, {
	    key: 'lengthSquared',
	    value: function lengthSquared() {
	      return this.x * this.x + this.y * this.y;
	    }
	  }, {
	    key: 'normalize',
	    value: function normalize(copy) {
	      var vector = copy ? new Vector(this.x, this.y) : this;
	      var length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
	      if (length) {
	        vector.x /= length;
	        vector.y /= length;
	      }
	      return vector;
	    }
	
	    //радианы
	
	  }, {
	    key: 'rotate',
	    value: function rotate(angle) {
	      var x = this.x,
	          y = this.y,
	          cos = Math.cos(angle),
	          sin = Math.sin(angle);
	      this.x = x * cos - y * sin;
	      this.y = x * sin + y * cos;
	    }
	  }]);
	
	  return Vector;
	}();
	
	exports.Vector = Vector;

/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map