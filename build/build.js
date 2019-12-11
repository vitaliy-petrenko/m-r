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

	var _localization = __webpack_require__(63);

	var _scroll = __webpack_require__(65);

	var _popup = __webpack_require__(67);

	var _slider = __webpack_require__(70);

	var _animation = __webpack_require__(71);

	var _mobile = __webpack_require__(68);

	var _rectangles = __webpack_require__(72);

	var _canvasBg = __webpack_require__(74);

	var _events = __webpack_require__(66);

	var bC = void 0; //body.classList
	var sizeCheck = function sizeCheck() {
	  bC.add('disabled_scroll_animation');
	  if ((0, _mobile.isMobile)()) {
	    bC.add('mobile');
	    bC.remove('longrid');

	    _rectangles.rectangles.stop();
	  } else {
	    if ((0, _mobile.isLongrid)()) {
	      bC.add('longrid');
	    } else {
	      bC.remove('longrid');
	    }
	    bC.remove('mobile');

	    _slider.slider.init();
	    _rectangles.rectangles.init();
	    (0, _animation.animationInit)();
	  }

	  (0, _canvasBg.canvasBg)();
	  bC.remove('disabled_scroll_animation');
	};
	function init() {
	  bC = document.body.classList;
	  sizeCheck();
	  window.addEventListener('resize', function () {
	    return (0, _events.resizeEnd)(sizeCheck);
	  });
	  _localization.localization.init();
	  _scroll.scroll.init();
	  _popup.popup.init();
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
	var update = __webpack_require__(62)(content, {});
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
	exports.push([module.id, "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\narticle, aside, details, figcaption, figure, footer, header, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nsvg {\n  display: inline-block;\n  vertical-align: middle;\n  position: relative;\n  width: inherit;\n  height: inherit;\n  max-width: inherit;\n  max-height: inherit; }\n\na, a:hover, a:focus, a:visited, a:link, a:active {\n  color: inherit;\n  text-decoration: none;\n  outline: none; }\n\na:hover {\n  text-decoration: underline; }\n\nbutton {\n  cursor: pointer; }\n\ninput, input:focus, button, textarea {\n  outline: none;\n  color: inherit;\n  font-family: inherit;\n  background-color: transparent;\n  border: 0;\n  box-sizing: border-box; }\n\n@font-face {\n  font-family: balezdrov11-Regular;\n  src: url(" + __webpack_require__(4) + ");\n  src: url(" + __webpack_require__(4) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(5) + ") format(\"woff\"), url(" + __webpack_require__(6) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: GothamPro;\n  src: url(" + __webpack_require__(7) + ");\n  src: url(" + __webpack_require__(7) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(8) + ") format(\"woff\"), url(" + __webpack_require__(9) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: GothamPro-Black;\n  src: url(" + __webpack_require__(10) + ");\n  src: url(" + __webpack_require__(10) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(11) + ") format(\"woff\"), url(" + __webpack_require__(12) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: GothamPro-Bold;\n  src: url(" + __webpack_require__(13) + ");\n  src: url(" + __webpack_require__(13) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(14) + ") format(\"woff\"), url(" + __webpack_require__(15) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: GothamPro-Medium;\n  src: url(" + __webpack_require__(16) + ");\n  src: url(" + __webpack_require__(16) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(17) + ") format(\"woff\"), url(" + __webpack_require__(18) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: logo;\n  src: url(" + __webpack_require__(19) + ");\n  src: url(" + __webpack_require__(19) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(20) + ") format(\"woff\"), url(" + __webpack_require__(21) + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n#logo_main_yellow .st0 {\n  fill: #fff843; }\n\n#logo_main_yellow .st1 {\n  fill: #fff843; }\n\n#logo_main_yellow .st2 {\n  enable-background: new; }\n\n#logo_main_yellow .st3 {\n  fill: none;\n  stroke: #fff843;\n  stroke-width: 5;\n  stroke-miterlimit: 10; }\n\n#logo_main_yellow .st4 {\n  fill: none;\n  stroke: #fff843;\n  stroke-width: 4.88;\n  stroke-miterlimit: 10; }\n\n#logo_main_yellow .st5 {\n  fill: none;\n  stroke: #fff843;\n  stroke-width: 4.88;\n  stroke-miterlimit: 10;\n  stroke-dasharray: 17.5897, 8.7949; }\n\n#logo_main_yellow .st6 {\n  fill: none;\n  stroke: #fff843;\n  stroke-width: 4.88;\n  stroke-miterlimit: 10;\n  stroke-dasharray: 16.1637, 8.0818; }\n\n#logo_main .st0 {\n  fill: #231F20; }\n\n#logo_main .st1 {\n  fill: #002BFF; }\n\n#logo_main .st2 {\n  enable-background: new; }\n\n#logo_main .st3 {\n  fill: none;\n  stroke: #231F20;\n  stroke-width: 5;\n  stroke-miterlimit: 10; }\n\n#logo_main .st4 {\n  fill: none;\n  stroke: #002BFF;\n  stroke-width: 4.88;\n  stroke-miterlimit: 10; }\n\n#logo_main .st5 {\n  fill: none;\n  stroke: #002BFF;\n  stroke-width: 4.88;\n  stroke-miterlimit: 10;\n  stroke-dasharray: 17.5897, 8.7949; }\n\n#logo_main .st6 {\n  fill: none;\n  stroke: #002BFF;\n  stroke-width: 4.88;\n  stroke-miterlimit: 10;\n  stroke-dasharray: 16.1637, 8.0818; }\n\n#logo_small .a {\n  fill: #231f20; }\n\n#logo_small .b {\n  fill: #002bff; }\n\n#logo_small_black .a, #logo_small_black .b {\n  fill: #231f20 !important; }\n\n.master_icon .a {\n  fill: none; }\n\n.master_icon .b {\n  fill: #231f20; }\n\n.resize_icon .a {\n  fill: none; }\n\n.resize_icon .b, .resize_icon .c, .resize_icon .d {\n  fill: none;\n  stroke: #000;\n  stroke-miterlimit: 10;\n  stroke-width: 4.88px; }\n\n.resize_icon .c {\n  stroke-dasharray: 17.59 8.79; }\n\n.resize_icon .d {\n  stroke-dasharray: 16.16 8.08; }\n\n.logo {\n  font-size: 19px;\n  width: 23.158em;\n  display: inline-block;\n  position: relative; }\n  .logo:after {\n    content: '';\n    display: block;\n    width: 100%;\n    clear: both; }\n  .logo > * {\n    display: block;\n    float: left;\n    line-height: 1;\n    height: inherit;\n    box-sizing: border-box; }\n\n.logo--part {\n  width: auto; }\n\n.logo--center {\n  position: relative;\n  display: block;\n  left: 50%;\n  margin-left: -8.895em; }\n\n.logo__master {\n  height: 100%;\n  border: 0.263em solid #000;\n  padding: 0.789em 0.737em 0.789em 0.842em;\n  position: relative; }\n\n.logo__resize {\n  height: 100%;\n  padding: 1.053em 1em 1.053em 1.105em;\n  position: relative;\n  color: #002bff;\n  transition: padding-right .5s; }\n  .logo__resize .logo__resize__border:after, .logo__resize .logo__resize__border:before {\n    content: '';\n    display: block;\n    position: absolute; }\n  .logo__resize .logo__resize__border.logo__resize__border--horizontal:after, .logo__resize .logo__resize__border.logo__resize__border--horizontal:before {\n    height: 0.263em;\n    background: url(" + __webpack_require__(22) + ") repeat-x center;\n    background-size: auto 100%;\n    left: 1.105em;\n    right: 1.105em; }\n    @media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n      .logo__resize .logo__resize__border.logo__resize__border--horizontal:after, .logo__resize .logo__resize__border.logo__resize__border--horizontal:before {\n        background-image: url(" + __webpack_require__(23) + ");\n        background-size: auto 100%; } }\n  .logo__resize .logo__resize__border.logo__resize__border--horizontal:after {\n    top: 0; }\n  .logo__resize .logo__resize__border.logo__resize__border--horizontal:before {\n    bottom: 0; }\n  .logo__resize .logo__resize__border.logo__resize__border--vertical:after, .logo__resize .logo__resize__border.logo__resize__border--vertical:before {\n    width: 0.263em;\n    background: #002bff;\n    top: 1.105em;\n    bottom: 1.105em; }\n  .logo__resize .logo__resize__border.logo__resize__border--vertical:after {\n    right: 0; }\n  .logo__resize .logo__resize__border.logo__resize__border--vertical:before {\n    left: 0; }\n  .logo__resize .logo__resize__corner:after, .logo__resize .logo__resize__corner:before {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 0.632em;\n    height: 0.632em; }\n  .logo__resize .logo__resize__corner.logo__resize__corner--top:after, .logo__resize .logo__resize__corner.logo__resize__corner--top:before {\n    top: 0; }\n  .logo__resize .logo__resize__corner.logo__resize__corner--top:after {\n    right: 0;\n    border-top: 0.263em solid #002bff;\n    border-right: 0.263em solid #002bff; }\n  .logo__resize .logo__resize__corner.logo__resize__corner--top:before {\n    border-top: 0.263em solid #002bff;\n    border-left: 0.263em solid #002bff;\n    left: 0; }\n  .logo__resize .logo__resize__corner.logo__resize__corner--bottom:after, .logo__resize .logo__resize__corner.logo__resize__corner--bottom:before {\n    bottom: 0; }\n  .logo__resize .logo__resize__corner.logo__resize__corner--bottom:after {\n    border-bottom: 0.263em solid #002bff;\n    border-right: 0.263em solid #002bff;\n    right: 0; }\n  .logo__resize .logo__resize__corner.logo__resize__corner--bottom:before {\n    border-bottom: 0.263em solid #002bff;\n    border-left: 0.263em solid #002bff;\n    left: 0; }\n\n.logo:hover .logo__text--resize:after {\n  margin-right: -1.263em;\n  letter-spacing: 1.368em; }\n\n.page--main .logo:hover .logo__text--resize {\n  transition-delay: .3s; }\n  .page--main .logo:hover .logo__text--resize:after {\n    transition-delay: .3s; }\n\n.logo__text {\n  letter-spacing: 0.211em;\n  display: block;\n  font-family: logo; }\n\n.logo__text--and:after {\n  content: '\\E900'; }\n\n.logo__text--master:after {\n  content: '\\E904\\E901\\E906\\E907\\E902\\E905'; }\n\n.logo__text--resize {\n  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); }\n  .logo__text--resize:after {\n    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    content: '\\E905\\E902\\E906\\E903\\E908\\E902'; }\n\n.logo__text--and {\n  font-size: 1.053em;\n  margin: 0 0.45em 0 0.55em;\n  line-height: 2.9em; }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .page--skills .tags .tag {\n  transition: opacity .2s;\n  -webkit-backface-visibility: hidden;\n  opacity: 0;\n  will-change: opacity; }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .page.active .tags .tag {\n  opacity: 1; }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .page:not(.active) .tags .tag {\n  transition-delay: 0s !important; }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .team__row {\n  will-change: transform;\n  transition: transform .8s; }\n  body:not(.mobile):not(.disabled_scroll_animation) .team__row:nth-child(odd) {\n    transform: translate3d(-5%, 0, 0); }\n  body:not(.mobile):not(.disabled_scroll_animation) .team__row:nth-child(even) {\n    transform: translate3d(5%, 0, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .page.active .team__row {\n  transform: translate3d(0, 0, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .page--main .arrow--down {\n  will-change: transform;\n  transform: translate3d(0, -50%, 0);\n  transition: transform .6s; }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .page--main.active .arrow--down {\n  transform: translate3d(0, 0, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .page .page__inner {\n  will-change: transform;\n  transform: translate3d(0, 5%, 0);\n  transition: transform .5s; }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .page .title {\n  -webkit-backface-visibility: hidden;\n  will-change: transform;\n  transform: scale(0.9) translate3d(0, 0, 0);\n  transition: transform .8s; }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .page.active .page__inner {\n  transition: transform .6s;\n  transform: translate3d(0, 0, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .page.active .title {\n  transform: scale(1) translate3d(0, 0, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .face {\n  will-change: transform;\n  transition: transform 1.2s; }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .face--1 {\n  transform: translate3d(-40%, -40%, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .face--2 {\n  transform: translate3d(40%, -40%, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .face--3 {\n  transform: translate3d(50%, 0, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .face--4 {\n  transform: translate3d(-20%, -20%, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .face--5 {\n  transform: translate3d(8%, 40%, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .page.active .face {\n  transform: translate3d(0, 0, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .book .arrow {\n  will-change: transform;\n  transition: transform .8s; }\n  body:not(.mobile):not(.disabled_scroll_animation) .book .arrow.arrow--left {\n    transform: translate3d(100%, 0, 0); }\n  body:not(.mobile):not(.disabled_scroll_animation) .book .arrow.arrow--right {\n    transform: translate3d(-100%, 0, 0); }\n\nbody:not(.mobile):not(.disabled_scroll_animation) .page.active .book .arrow {\n  transform: translate3d(0, 0, 0); }\n\n@-webkit-keyframes bubbleAnimation {\n  0% {\n    transform: translateY(0); }\n  20% {\n    transform: translateY(-5px); }\n  30% {\n    transform: translateY(0); } }\n\n@-moz-keyframes bubbleAnimation {\n  0% {\n    transform: translateY(0); }\n  20% {\n    transform: translateY(-5px); }\n  30% {\n    transform: translateY(0); } }\n\n@-ms-keyframes bubbleAnimation {\n  0% {\n    transform: translateY(0); }\n  20% {\n    transform: translateY(-5px); }\n  30% {\n    transform: translateY(0); } }\n\n@keyframes bubbleAnimation {\n  0% {\n    transform: translateY(0); }\n  20% {\n    transform: translateY(-5px); }\n  30% {\n    transform: translateY(0); } }\n\n@-webkit-keyframes masterAnimation {\n  0% {\n    width: 100%; }\n  40% {\n    width: 0; }\n  80% {\n    width: 100%; } }\n\n@-moz-keyframes masterAnimation {\n  0% {\n    width: 100%; }\n  40% {\n    width: 0; }\n  80% {\n    width: 100%; } }\n\n@-ms-keyframes masterAnimation {\n  0% {\n    width: 100%; }\n  40% {\n    width: 0; }\n  80% {\n    width: 100%; } }\n\n@keyframes masterAnimation {\n  0% {\n    width: 100%; }\n  40% {\n    width: 0; }\n  80% {\n    width: 100%; } }\n\n@-webkit-keyframes resizeAnimation {\n  0% {\n    letter-spacing: 4px; }\n  50% {\n    letter-spacing: 28px;\n    margin-right: -26px; }\n  90% {\n    letter-spacing: 2px; }\n  100% {\n    letter-spacing: 4px; } }\n\n@-moz-keyframes resizeAnimation {\n  0% {\n    letter-spacing: 4px; }\n  50% {\n    letter-spacing: 28px;\n    margin-right: -26px; }\n  90% {\n    letter-spacing: 2px; }\n  100% {\n    letter-spacing: 4px; } }\n\n@-ms-keyframes resizeAnimation {\n  0% {\n    letter-spacing: 4px; }\n  50% {\n    letter-spacing: 28px;\n    margin-right: -26px; }\n  90% {\n    letter-spacing: 2px; }\n  100% {\n    letter-spacing: 4px; } }\n\n@keyframes resizeAnimation {\n  0% {\n    letter-spacing: 4px; }\n  50% {\n    letter-spacing: 28px;\n    margin-right: -26px; }\n  90% {\n    letter-spacing: 2px; }\n  100% {\n    letter-spacing: 4px; } }\n\n.bubble_points {\n  will-change: transform; }\n\n.page--products.active .bubble_points span, .page--products.active .bubble_points:after, .page--products.active .bubble_points:before {\n  animation: bubbleAnimation 1s; }\n\n.page--products.active .bubble_points:before {\n  animation-delay: .4s; }\n\n.page--products.active .bubble_points span {\n  animation-delay: .6s; }\n\n.page--products.active .bubble_points:after {\n  animation-delay: .8s; }\n\n.page--products.active .step__icon--master .logo:before {\n  animation: masterAnimation 3s;\n  animation-delay: 1.2s; }\n\n.page--products.active .step__icon--resize .logo__text--resize:after {\n  animation: resizeAnimation 1.4s;\n  animation-delay: 3s; }\n\n.step__icon--bubble:hover .bubble_points span, .step__icon--bubble:hover .bubble_points:after, .step__icon--bubble:hover .bubble_points:before {\n  animation: bubbleAnimation 1s infinite; }\n\n.step__icon--bubble:hover .bubble_points:before {\n  animation-delay: .4s; }\n\n.step__icon--bubble:hover .bubble_points span {\n  animation-delay: .6s; }\n\n.step__icon--bubble:hover .bubble_points:after {\n  animation-delay: .8s; }\n\n.step__icon--master:hover .logo:before {\n  width: 0 !important; }\n\nhtml, body {\n  min-height: 100%; }\n\nhtml {\n  font-size: 15px; }\n\nbody {\n  overflow: hidden;\n  font-family: GothamPro;\n  line-height: 1.6rem; }\n\n.mobile-show {\n  display: none; }\n\n.popup_open {\n  overflow: hidden !important; }\n\n.svg_wrapper {\n  display: none; }\n\n.left {\n  float: left; }\n\n.right {\n  float: right; }\n\n.button {\n  font-family: GothamPro-Black;\n  font-weight: bold;\n  text-transform: uppercase;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.m0auto {\n  margin: 0 auto; }\n\nheader {\n  box-sizing: border-box;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 12;\n  height: 48px;\n  line-height: 48px;\n  background-color: #000;\n  color: #fff;\n  transition: background-color 0.2s cubic-bezier(0.175, 0.885, 0.32, 1);\n  padding: 0 15px;\n  will-change: background-color; }\n  header .left > * {\n    float: left; }\n  header .right > * {\n    float: right; }\n  header:after {\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: -4px;\n    background: #fff623;\n    transition: width 0.13333s;\n    width: 0;\n    right: 0;\n    height: 4px; }\n  header .logo_small {\n    float: left;\n    cursor: pointer;\n    display: block;\n    width: 43px;\n    height: 100%;\n    margin-right: 18px; }\n    header .logo_small svg {\n      top: -2px;\n      height: 25px; }\n      header .logo_small svg .a, header .logo_small svg .b {\n        fill: #fff;\n        transition: fill 0.2s cubic-bezier(0.175, 0.885, 0.32, 1); }\n\n.order_button {\n  font-size: 12px;\n  color: #000;\n  background-color: #fff843;\n  transition: color 0.2s cubic-bezier(0.175, 0.885, 0.32, 1), background-color 0.2s cubic-bezier(0.175, 0.885, 0.32, 1), opacity 0.2s cubic-bezier(0.175, 0.885, 0.32, 1) 0.1s;\n  cursor: pointer;\n  will-change: opacity;\n  height: 48px; }\n  .order_button:hover {\n    background: #002bff;\n    color: #fff; }\n\n.header_contacts svg {\n  fill: #fff;\n  transition: fill 0.2s cubic-bezier(0.175, 0.885, 0.32, 1); }\n\n.header_contacts .phone svg {\n  top: -1px;\n  width: 24px;\n  height: 24px; }\n\n.header_contacts .messenger svg {\n  width: 25px;\n  height: 26px; }\n\n.header_contacts .phone, .header_contacts .messenger {\n  position: relative;\n  margin-left: 2px;\n  padding: 0 4px;\n  cursor: pointer;\n  display: block;\n  float: left;\n  height: 100%; }\n\n.header_contacts a:hover svg {\n  fill: #fff843; }\n\n.language {\n  font-size: 14px;\n  cursor: pointer;\n  margin: 0 33px 0 37px;\n  transition: color 0.2s cubic-bezier(0.175, 0.885, 0.32, 1); }\n\n.fb-like {\n  float: left; }\n  .fb-like > span {\n    top: -1px;\n    vertical-align: middle !important; }\n\n.like-label {\n  color: #fff;\n  transition: color 0.2s cubic-bezier(0.175, 0.885, 0.32, 1); }\n  .like-label svg {\n    margin: 0 12px 0 15px;\n    width: 54px;\n    height: 12px;\n    stroke: #fff;\n    fill: none;\n    transition: stroke 0.2s cubic-bezier(0.175, 0.885, 0.32, 1); }\n\n.page--main.active ~ header {\n  transition: background-color 0.1s cubic-bezier(0.175, 0.885, 0.32, 1);\n  background-color: transparent; }\n  .page--main.active ~ header .like-label {\n    color: #000; }\n    .page--main.active ~ header .like-label svg {\n      stroke: #000; }\n  .page--main.active ~ header .logo_small svg .a {\n    fill: #000; }\n  .page--main.active ~ header .logo_small svg .b {\n    fill: #002bff; }\n  .page--main.active ~ header .header_contacts svg {\n    fill: #000; }\n  .page--main.active ~ header .language {\n    color: #000; }\n  .page--main.active ~ header .order_button {\n    pointer-events: none;\n    opacity: 0;\n    transition: color 0.2s cubic-bezier(0.175, 0.885, 0.32, 1), background-color 0.2s cubic-bezier(0.175, 0.885, 0.32, 1), opacity 0.15385s cubic-bezier(0.175, 0.885, 0.32, 1); }\n\n.page--products.active ~ header .order_button {\n  background: #fff;\n  color: #002bff; }\n  .page--products.active ~ header .order_button:hover {\n    background: #0014d9;\n    color: #fff; }\n\n.page--portfolio.active ~ header .order_button {\n  background: #0014d9;\n  color: #fff; }\n  .page--portfolio.active ~ header .order_button:hover {\n    background: #fff;\n    color: #002bff; }\n\n.page--skills.active ~ header .order_button {\n  background: #0014d9;\n  color: #fff; }\n  .page--skills.active ~ header .order_button:hover {\n    background: #fff;\n    color: #002bff; }\n\n.page--contacts.active ~ header:after {\n  width: 100%; }\n\n.page--production.active ~ header .order_button {\n  background: #fff;\n  color: #002bff; }\n\nsection.page:nth-child(1) {\n  z-index: 10; }\n\nsection.page:nth-child(2) {\n  z-index: 9; }\n\nsection.page:nth-child(3) {\n  z-index: 8; }\n\nsection.page:nth-child(4) {\n  z-index: 7; }\n\nsection.page:nth-child(5) {\n  z-index: 6; }\n\nsection.page:nth-child(6) {\n  z-index: 5; }\n\nsection.page:nth-child(7) {\n  z-index: 4; }\n\nsection.page:nth-child(8) {\n  z-index: 3; }\n\nsection.page:nth-child(9) {\n  z-index: 2; }\n\nsection.page:nth-child(10) {\n  z-index: 1; }\n\nsection.page:nth-child(11) {\n  z-index: 0; }\n\n.page {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  text-align: center;\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  will-change: transform;\n  pointer-events: none;\n  transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1);\n  backface-visibility: hidden;\n  -moz-transform: translate3d(0, -100%, 0);\n  -o-transform: translate3d(0, -100%, 0);\n  -ms-transform: translate3d(0, -100%, 0);\n  -webkit-transform: translate3d(0, -100%, 0);\n  transform: translate3d(0, -100%, 0);\n  -webkit-backface-visibility: hidden;\n  background: #f6f6f6; }\n\n.page.active {\n  pointer-events: initial;\n  -moz-transform: translate3d(0, 0, 0);\n  -o-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n  .page.active ~ .page {\n    -moz-transform: translate3d(0, 0, 0);\n    -o-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); }\n\n.page--team {\n  background: #fff; }\n\n.page--products, .page--production {\n  background: #fff843; }\n\n.page--contacts {\n  background: #000000;\n  color: #fff; }\n\n.page--prices {\n  background: #fff; }\n\nbody.disabled_scroll_animation section.page {\n  transition: none; }\n\n.page__bg {\n  position: absolute;\n  width: 100%;\n  height: 100%; }\n  .page__bg canvas.canvas-bg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n  .page__bg canvas.rectangles {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n\n.page__inner {\n  position: relative;\n  z-index: 1;\n  margin: auto 0;\n  padding: 60px 0; }\n  .page__inner .logo_small {\n    display: inline-block;\n    width: 42px;\n    height: 25px;\n    margin-top: 6vh; }\n\n.page__inner--production {\n  padding: 60px 60px 0; }\n\n.page__inner--team {\n  position: relative;\n  z-index: 2; }\n\n.copyright {\n  background: url(" + __webpack_require__(24) + ") center no-repeat;\n  width: 16px;\n  height: 158px;\n  left: 6px;\n  bottom: 45px;\n  position: absolute; }\n\n.points_group {\n  position: absolute;\n  z-index: 2; }\n\n.points {\n  background: url(" + __webpack_require__(25) + ") center no-repeat;\n  width: 115px;\n  height: 134px;\n  float: left;\n  margin: 5px 6px 6px 0; }\n\n.points--horizontal {\n  background: url(" + __webpack_require__(26) + ") center no-repeat;\n  height: 115px;\n  width: 134px;\n  margin: 0 5px 6px 6px; }\n\n.points--horizontal--blue {\n  background-image: url(" + __webpack_require__(27) + "); }\n\n.points--horizontal--yellow {\n  background-image: url(" + __webpack_require__(28) + "); }\n\n.points--horizontal--yellow--thin {\n  background-image: url(" + __webpack_require__(29) + "); }\n\n.figure {\n  position: absolute;\n  z-index: 0;\n  background: #fff623; }\n\n.pager {\n  position: absolute;\n  right: 29px;\n  bottom: 110px;\n  width: 10px;\n  z-index: 12;\n  will-change: opacity;\n  opacity: 0;\n  transition: opacity .5s; }\n  .pager.active {\n    will-change: none;\n    opacity: 1; }\n  .pager:after {\n    content: '';\n    display: block;\n    position: absolute;\n    left: 50%;\n    width: 2px;\n    margin-left: -1px;\n    top: 0;\n    background: #000;\n    bottom: 0;\n    transition: background 0.2s cubic-bezier(0.175, 0.885, 0.32, 1); }\n  .pager span {\n    cursor: pointer;\n    z-index: 2;\n    display: block;\n    position: relative;\n    margin-bottom: 16px;\n    border: 3px solid #000;\n    background: #000;\n    width: 10px;\n    height: 10px;\n    box-sizing: border-box;\n    will-change: transform;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    transform: translateZ(0);\n    transition: background 0.2s cubic-bezier(0.175, 0.885, 0.32, 1), border-color 0.2s cubic-bezier(0.175, 0.885, 0.32, 1), transform 100ms;\n    border-radius: 50%; }\n    .pager span:hover {\n      transform: scale(1.2) translateZ(0); }\n    .pager span:after {\n      content: '';\n      display: block;\n      position: absolute;\n      left: -8px;\n      top: -8px;\n      right: -8px;\n      bottom: -8px; }\n    .pager span.active {\n      pointer-events: none;\n      background: #fff; }\n    .pager span:last-child {\n      margin-bottom: 0; }\n\n.page--contacts.active ~ .pager:after {\n  background: #fff; }\n\n.page--contacts.active ~ .pager span {\n  background: #fff;\n  border-color: #fff; }\n  .page--contacts.active ~ .pager span.active {\n    background: #000; }\n\n.button {\n  display: inline-block;\n  padding: 0 23px;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  letter-spacing: .2em;\n  cursor: pointer; }\n\n.button--big {\n  font-size: 18px;\n  box-sizing: border-box;\n  height: 70px;\n  line-height: 60px;\n  border: 5px solid #000;\n  color: #002bff;\n  transition: all 0.2s; }\n  .button--big:hover {\n    color: #fff;\n    background: #000; }\n\n.arrow {\n  display: inline-block; }\n\n.arrow--down {\n  display: block;\n  width: 40px;\n  height: 90px;\n  margin: 52px auto 0;\n  background: url(" + __webpack_require__(30) + ") no-repeat center center; }\n\n.arrow--left:before, .arrow--right:before {\n  content: '';\n  padding-bottom: 45.56%;\n  display: block;\n  width: 100%;\n  background: url(" + __webpack_require__(31) + ") no-repeat center; }\n\n.arrow--right:before {\n  background: url(" + __webpack_require__(32) + ") no-repeat center; }\n\n.arrow--brands {\n  width: 10.59%; }\n\n.section_next {\n  cursor: pointer; }\n\n.title {\n  font-family: balezdrov11-Regular, Arial, sans-serif;\n  font-size: 3.333em;\n  line-height: 1.3em;\n  display: block;\n  max-width: 900px;\n  padding: 0 20px;\n  margin: 0 auto; }\n\n.title--contacts {\n  margin-top: 75px; }\n\n.title--main {\n  max-width: 1000px; }\n\n.title--skills:before {\n  content: '';\n  display: block;\n  width: 2.7em;\n  height: 2.7em;\n  background: url(" + __webpack_require__(33) + ") no-repeat;\n  margin: 0 auto 35px; }\n\n.title--popup {\n  margin-bottom: 30px; }\n\n.subtitle {\n  max-width: 670px;\n  line-height: 24px;\n  margin: 18px auto 0; }\n\n.tags {\n  font-size: 0;\n  max-width: 1100px;\n  margin: 0 auto; }\n\n.tag {\n  padding: 0 1.23em;\n  display: inline-block;\n  line-height: 2.54em;\n  margin: 0 12px 15px;\n  font-size: 13px; }\n\n.tags--skills .tag {\n  background: #042dff;\n  color: #fff; }\n\n.tags--platforms .tag {\n  background: #fff623;\n  color: #000; }\n\n.tags--brands {\n  font-family: Helvetica Neue, Helvetica, Arial;\n  max-width: 896px; }\n  .tags--brands .tag {\n    padding: 0 .56em;\n    font-size: 18px;\n    background: #f6f6f6;\n    color: #000000;\n    margin: 0 7px 15px;\n    line-height: 2em; }\n\n.page--main .subtitle {\n  margin-top: 29px;\n  font-size: 20px;\n  margin-bottom: 75px; }\n\n.page--main .logo {\n  margin-bottom: 90px; }\n\n.page--main canvas.canvas-bg {\n  display: none; }\n\n.page--products .subtitle {\n  max-width: 590px; }\n\n.page--portfolio {\n  background: #fff; }\n  .page--portfolio .logo {\n    margin-top: 3vh; }\n\n.page--skills .skills_text {\n  font-family: \"GothamPro-Bold\";\n  text-transform: uppercase;\n  letter-spacing: .2em;\n  max-width: 520px;\n  font-size: 11.7px;\n  line-height: 1.7em;\n  margin: 35px auto 0; }\n\n.page--skills .tags {\n  margin-top: 40px; }\n\n.page--skills .tags_platforms {\n  margin-top: 25px; }\n\n.page--team .subtitle {\n  max-width: 580px;\n  margin-top: 30px; }\n\n.page--contacts .logo * {\n  color: #fff843; }\n\n.page--contacts .logo .logo__master {\n  border-color: #fff843; }\n\n.page--contacts .logo .logo__resize .logo__resize__corner:before, .page--contacts .logo .logo__resize .logo__resize__corner:after {\n  border-color: #fff843; }\n\n.page--contacts .logo .logo__resize .logo__resize__border.logo__resize__border--vertical:before, .page--contacts .logo .logo__resize .logo__resize__border.logo__resize__border--vertical:after {\n  background: #fff843; }\n\n.page--contacts .logo .logo__resize .logo__resize__border.logo__resize__border--horizontal:before, .page--contacts .logo .logo__resize .logo__resize__border.logo__resize__border--horizontal:after {\n  background-image: url(" + __webpack_require__(34) + "); }\n  @media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n    .page--contacts .logo .logo__resize .logo__resize__border.logo__resize__border--horizontal:before, .page--contacts .logo .logo__resize .logo__resize__border.logo__resize__border--horizontal:after {\n      background-image: url(" + __webpack_require__(35) + ");\n      background-size: auto 100%; } }\n\n.page--production .subtitle {\n  color: #747128;\n  line-height: 26px; }\n\n.motivations {\n  margin-top: 50px;\n  display: table;\n  width: 100%; }\n\n.motivation {\n  min-height: 150px;\n  box-sizing: border-box;\n  width: 50%;\n  display: block;\n  float: left;\n  text-align: left;\n  position: relative;\n  background-color: #fff; }\n  .motivation:nth-child(odd) .motivation__inner {\n    float: right; }\n\n.motivation__inner {\n  max-width: 489px;\n  padding: 0 40px 0 150px;\n  box-sizing: border-box;\n  position: relative; }\n  .motivation__inner:before {\n    height: 150px;\n    width: 150px;\n    content: '';\n    display: block;\n    position: absolute;\n    background: no-repeat center center;\n    background-size: contain; }\n\n.motivation__text {\n  min-height: 150px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  line-height: 24px;\n  position: relative;\n  padding: 20px 0 20px 5px; }\n\n.motivation_image {\n  height: 150px;\n  width: 150px;\n  float: left;\n  position: relative; }\n  .motivation_image:after {\n    content: '';\n    display: block;\n    position: absolute;\n    background: no-repeat center center;\n    background-size: contain; }\n\n.motivation--click, .motivation--interactive, .motivation--time {\n  background: #fff843; }\n\n.motivation--click .motivation__inner:before {\n  top: 23px;\n  left: -13px;\n  width: 130px;\n  height: 100px;\n  background-image: url(" + __webpack_require__(36) + "); }\n  @media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n    .motivation--click .motivation__inner:before {\n      background-image: url(" + __webpack_require__(37) + "); } }\n\n.motivation--focus .motivation__inner:before {\n  top: 36px;\n  left: -26px;\n  width: 158px;\n  height: 68px;\n  background-image: url(" + __webpack_require__(38) + "); }\n  @media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n    .motivation--focus .motivation__inner:before {\n      background-image: url(" + __webpack_require__(39) + "); } }\n\n.motivation--media .motivation__inner:before {\n  top: 25px;\n  left: -5px;\n  width: 123px;\n  height: 112px;\n  background-image: url(" + __webpack_require__(40) + "); }\n  @media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n    .motivation--media .motivation__inner:before {\n      background-image: url(" + __webpack_require__(41) + "); } }\n\n.motivation--interactive .motivation__inner:before {\n  top: 8px;\n  left: 35px;\n  width: 117px;\n  height: 133px;\n  background-image: url(" + __webpack_require__(42) + "); }\n  @media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n    .motivation--interactive .motivation__inner:before {\n      background-image: url(" + __webpack_require__(43) + "); } }\n\n.motivation--time .motivation__inner:before {\n  top: 24px;\n  left: 14px;\n  width: 80px;\n  height: 103px;\n  background-image: url(" + __webpack_require__(44) + "); }\n  @media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n    .motivation--time .motivation__inner:before {\n      background-image: url(" + __webpack_require__(45) + "); } }\n\n.motivation--success .motivation__inner:before {\n  top: 22px;\n  left: 33px;\n  width: 99px;\n  height: 101px;\n  background-image: url(" + __webpack_require__(46) + "); }\n  @media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n    .motivation--success .motivation__inner:before {\n      background-image: url(" + __webpack_require__(47) + "); } }\n\n.team {\n  margin-top: 35px;\n  font-size: 0;\n  font-family: GothamPro-Medium; }\n\n.team__row {\n  line-height: 32px;\n  margin-bottom: 5px; }\n  .team__row li {\n    display: inline-block;\n    font-size: 20px;\n    padding-left: 50px;\n    position: relative; }\n    .team__row li:before {\n      content: '';\n      position: absolute;\n      display: block;\n      width: 6px;\n      height: 6px;\n      background: currentColor;\n      border-radius: 3px;\n      left: 22px;\n      top: 50%;\n      margin-top: -3px; }\n    .team__row li:first-child {\n      padding-left: 0; }\n      .team__row li:first-child:before {\n        display: none; }\n\n.products_steps {\n  text-align: left;\n  width: 1060px;\n  margin: 55px auto 0; }\n  .products_steps:after {\n    content: '';\n    display: block;\n    width: 100%;\n    clear: both; }\n\n.step {\n  display: block;\n  float: left;\n  width: 351px;\n  position: relative; }\n  .step:last-child {\n    width: 290px; }\n  .step:first-child {\n    padding-left: 68px; }\n  .step:after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 90px;\n    height: 41px;\n    right: 60px;\n    background: url(" + __webpack_require__(32) + ") no-repeat center;\n    background-size: cover;\n    top: 11px; }\n  .step:last-child:after {\n    display: none; }\n  .step:last-child .step__text {\n    width: auto; }\n\n.step__icon {\n  position: relative;\n  margin-bottom: 35px;\n  display: inline-block; }\n\n.logo--steps * {\n  color: #000; }\n\n.logo--steps .logo__master {\n  border-color: #000; }\n\n.logo--steps .logo__resize .logo__resize__corner:before, .logo--steps .logo__resize .logo__resize__corner:after {\n  border-color: #000; }\n\n.logo--steps .logo__resize .logo__resize__border.logo__resize__border--vertical:before, .logo--steps .logo__resize .logo__resize__border.logo__resize__border--vertical:after {\n  background: #000; }\n\n.logo--steps .logo__resize .logo__resize__border.logo__resize__border--horizontal:before, .logo--steps .logo__resize .logo__resize__border.logo__resize__border--horizontal:after {\n  background-image: url(" + __webpack_require__(48) + "); }\n  @media (min--moz-device-pixel-ratio: 1.3), (-o-min-device-pixel-ratio: 2.6 / 2), (-webkit-min-device-pixel-ratio: 1.3), (min-device-pixel-ratio: 1.3), (min-resolution: 1.3dppx) {\n    .logo--steps .logo__resize .logo__resize__border.logo__resize__border--horizontal:before, .logo--steps .logo__resize .logo__resize__border.logo__resize__border--horizontal:after {\n      background-image: url(" + __webpack_require__(49) + ");\n      background-size: auto 100%; } }\n\n.step__icon--bubble {\n  height: 76px;\n  width: 137px;\n  margin-top: -8px;\n  margin-bottom: 20px;\n  background: url(" + __webpack_require__(50) + ") no-repeat center; }\n  .step__icon--bubble .bubble_points {\n    top: 23px;\n    font-size: 0;\n    position: absolute;\n    z-index: 2;\n    width: 100%;\n    left: 0;\n    text-align: center; }\n    .step__icon--bubble .bubble_points span {\n      position: relative; }\n    .step__icon--bubble .bubble_points span, .step__icon--bubble .bubble_points:before, .step__icon--bubble .bubble_points:after {\n      display: inline-block;\n      width: 10px;\n      border-radius: 50%;\n      height: 10px;\n      background: #000;\n      margin: 0 7px; }\n    .step__icon--bubble .bubble_points:before, .step__icon--bubble .bubble_points:after {\n      content: ''; }\n  .step__icon--bubble svg {\n    width: 138px;\n    height: 76px;\n    top: -7px; }\n  .step__icon--bubble:after {\n    right: -149px; }\n\n.step__icon--master:after {\n  right: -142px; }\n\n.step__icon--master .logo:before, .step__icon--resize .logo:before {\n  transition: width 1s;\n  content: '';\n  width: 100%;\n  right: 0;\n  position: absolute;\n  height: 100%;\n  display: block;\n  background: #fff;\n  z-index: 0; }\n\n.step__text {\n  width: 260px; }\n\n.brands_title {\n  text-align: center;\n  max-width: 852px;\n  padding: 0 18px;\n  margin: 55px auto 30px;\n  overflow: hidden;\n  box-sizing: border-box;\n  font-size: 0; }\n  .brands_title .arrow {\n    width: 10.59%; }\n  .brands_title > * {\n    display: inline-block;\n    vertical-align: middle; }\n  .brands_title span {\n    width: 78.82%;\n    font-size: 18px;\n    font-family: \"GothamPro-Bold\";\n    line-height: 2.33em; }\n\n.faces {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1; }\n\n.face {\n  position: absolute;\n  background: 0 0 no-repeat;\n  background-size: 100% auto; }\n\n.face--1 {\n  right: 50%;\n  margin-right: 444px;\n  top: 60px;\n  background-image: url(" + __webpack_require__(51) + ");\n  width: 239px;\n  height: 331px; }\n\n.face--2 {\n  left: 50%;\n  margin-left: 376px;\n  top: 114px;\n  width: 147px;\n  height: 282px;\n  background-image: url(" + __webpack_require__(52) + "); }\n\n.face--3 {\n  top: 384px;\n  right: 0;\n  background-image: url(" + __webpack_require__(53) + ");\n  width: 174px;\n  height: 186px; }\n\n.face--4 {\n  width: 126px;\n  height: 184px;\n  bottom: 106px;\n  margin-right: 353px;\n  right: 50%;\n  background-image: url(" + __webpack_require__(54) + "); }\n\n.face--5 {\n  width: 92px;\n  height: 137px;\n  bottom: 32px;\n  margin-left: 97px;\n  left: 50%;\n  background-image: url(" + __webpack_require__(55) + "); }\n\n.prices_image {\n  background: url(" + __webpack_require__(56) + ") no-repeat center;\n  background-size: contain;\n  width: 143px;\n  height: 140px;\n  margin: 0 auto 42px; }\n\n.price_list {\n  overflow: hidden;\n  margin: 55px auto 0;\n  display: block;\n  max-width: 886px;\n  text-align: left; }\n\n.price {\n  display: block;\n  width: 33.33%;\n  float: left;\n  margin-bottom: 40px;\n  padding-left: 64px;\n  box-sizing: border-box; }\n  .price:nth-child(3n+4) {\n    clear: both; }\n\n.price__value {\n  font-size: 16px; }\n\n.step__title {\n  margin: 0 0 5px; }\n\n.step__title, .price__title {\n  font-family: GothamPro-Bold;\n  font-size: 20px;\n  margin-bottom: 15px;\n  line-height: 1.35em;\n  width: 260px; }\n\n.contacts_list {\n  width: 886px;\n  margin: 80px auto 0;\n  font-size: 0;\n  text-align: left; }\n\n.contacts_list__item {\n  display: inline-block;\n  font-size: 20px;\n  margin-left: 90px; }\n  .contacts_list__item:first-child {\n    margin-left: 80px; }\n\n.contact_link {\n  transition: color 0.2s; }\n  .contact_link:hover {\n    text-decoration: none;\n    color: #fff843; }\n  .contact_link svg {\n    fill: currentColor;\n    display: inline-block;\n    background: center no-repeat;\n    background-size: contain;\n    width: 30px;\n    height: 30px;\n    vertical-align: middle;\n    margin-right: 19px;\n    position: relative;\n    top: -2px; }\n\n.contact_link--phone:before {\n  background-image: url(" + __webpack_require__(57) + "); }\n\n.contact_link--email:before {\n  width: 31px;\n  height: 24px;\n  background-image: url(" + __webpack_require__(58) + "); }\n\n.address {\n  color: #505050;\n  font-size: 12px;\n  letter-spacing: .2em;\n  margin-top: 120px;\n  font-family: GothamPro-Bold;\n  text-transform: uppercase; }\n\n.book {\n  margin: 2vh auto 0;\n  box-sizing: border-box;\n  text-transform: uppercase;\n  position: relative;\n  max-width: 250px;\n  width: 25vh; }\n\n.book__image {\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  height: 0;\n  padding: 0 1.9vh 137.28% .6vh;\n  overflow: hidden; }\n  .book__image:before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: url(" + __webpack_require__(59) + ") no-repeat center;\n    width: 100%;\n    height: 100%; }\n\n.arrow--book {\n  width: 99px;\n  position: absolute;\n  top: 50%;\n  margin-top: -22px; }\n  .arrow--book.arrow--left {\n    left: 100%;\n    margin-left: 112px; }\n  .arrow--book.arrow--right {\n    right: 100%;\n    margin-right: 112px; }\n\n.book__title {\n  font-family: GothamPro-Black;\n  font-weight: bold;\n  font-size: 1.1vh;\n  line-height: 2vh;\n  letter-spacing: .2em;\n  padding: 0 1vh;\n  margin-top: 4vh; }\n\n.book__logo {\n  margin: 3vh auto 0;\n  width: 10vh;\n  height: 6.08vh;\n  max-width: 135px;\n  max-height: 82px;\n  position: relative;\n  left: 2%; }\n\n.book_description {\n  max-width: 650px;\n  line-height: 27px;\n  margin: 2vh auto 0; }\n\n.book_request_title {\n  font-family: GothamPro-Black;\n  font-weight: bold;\n  font-size: 11px;\n  line-height: 2em;\n  text-transform: uppercase;\n  margin-top: 2vh;\n  margin-bottom: 1.5vh; }\n\n.book_request_inner {\n  margin: 0 auto;\n  font-size: 0; }\n  .book_request_inner input, .book_request_inner button {\n    vertical-align: top;\n    display: inline-block;\n    margin: 0 12px 12px;\n    width: 312px; }\n\nbutton {\n  display: block;\n  background-color: #fff; }\n\ninput, textarea {\n  font-size: 1rem;\n  display: block;\n  background-color: #fff;\n  height: 70px;\n  line-height: 42px;\n  color: #000;\n  padding: 14px 34px;\n  margin-bottom: 12px; }\n  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {\n    color: #000; }\n  input::-moz-placeholder, textarea::-moz-placeholder {\n    color: #000; }\n  input:-moz-placeholder, textarea:-moz-placeholder {\n    color: #000; }\n  input:-ms-input-placeholder, textarea:-ms-input-placeholder {\n    color: #000; }\n  input:focus, textarea:focus {\n    background: #fff; }\n    input:focus::-webkit-input-placeholder, textarea:focus::-webkit-input-placeholder {\n      color: transparent; }\n    input:focus::-moz-placeholder, textarea:focus::-moz-placeholder {\n      color: transparent; }\n    input:focus:-moz-placeholder, textarea:focus:-moz-placeholder {\n      color: transparent; }\n    input:focus:-ms-input-placeholder, textarea:focus:-ms-input-placeholder {\n      color: transparent; }\n\ninput:focus::-webkit-input-placeholder {\n  color: transparent; }\n\ntextarea {\n  line-height: 28px; }\n\nform {\n  position: relative;\n  z-index: 1; }\n\n.popup__close {\n  position: absolute;\n  width: 21px;\n  height: 21px;\n  background-size: contain;\n  cursor: pointer;\n  top: 32px;\n  right: 32px; }\n  .popup__close svg {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    stroke: #000;\n    transition: stroke 0.2s; }\n  .popup__close:hover svg {\n    stroke: #002bff; }\n\n.popup__inner {\n  overflow-x: hidden;\n  box-sizing: border-box;\n  margin: 100px auto;\n  position: relative;\n  will-change: transform;\n  transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1);\n  transform: translate3d(0, -30%, 0);\n  border: 4px solid #000;\n  padding: 87px 187px 113px;\n  background: #fff843;\n  max-width: 886px; }\n  .popup__inner input, .popup__inner textarea {\n    width: 100%; }\n  .popup__inner textarea {\n    resize: none;\n    height: 160px; }\n  .popup__inner button {\n    margin-top: 32px;\n    padding: 0 53px; }\n\n.popup__inner--banner {\n  padding: 85px 100px 120px;\n  width: 100%;\n  background: #fff; }\n\n.popup {\n  z-index: 100;\n  position: fixed;\n  height: 100%;\n  left: 0;\n  top: 0;\n  width: 100%;\n  overflow-y: auto;\n  opacity: 0;\n  pointer-events: none;\n  will-change: opacity;\n  transition: opacity 0.2s cubic-bezier(0.175, 0.885, 0.32, 1);\n  background-color: rgba(0, 0, 0, 0.3); }\n  .popup.active {\n    opacity: 1;\n    pointer-events: auto; }\n    .popup.active .popup__inner {\n      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1);\n      transform: translate3d(0, 0, 0); }\n\n.popup--order {\n  flex-direction: column;\n  text-align: center; }\n\n.popup_banner_title {\n  font-size: 18px;\n  text-align: center;\n  margin-bottom: 40px;\n  font-family: Helvetica Neue, Helvetica, Arial; }\n\n.popup_banner_description {\n  max-width: 563px;\n  margin-bottom: 30px; }\n\n.banners {\n  overflow: hidden;\n  margin-bottom: 27px; }\n\n.banner {\n  margin-right: 20px;\n  margin-bottom: 20px;\n  float: left; }\n\n.banner_code {\n  clear: both;\n  color: #0014d9;\n  max-width: 563px; }\n\n.slider_wrap {\n  width: 100%;\n  margin: 0 auto;\n  padding-top: 80px; }\n\n.slider {\n  font-size: 0;\n  margin: 0 auto;\n  white-space: nowrap;\n  transition: transform .7s; }\n\n.slide {\n  display: inline-block;\n  position: relative;\n  will-change: transform; }\n  .slide:hover:not(.active) .slide__inner:after {\n    opacity: 0; }\n  .slide:hover:not(.active) .slide__inner:before {\n    background-color: rgba(255, 255, 255, 0.6); }\n  .slide:hover:not(.active) .slide__inner .slide__image {\n    -moz-filter: grayscale(50%);\n    -webkit-filter: grayscale(50%);\n    filter: grayscale(50%); }\n  .slide.active {\n    z-index: 10; }\n    .slide.active .slide__inner:after {\n      opacity: 0; }\n    .slide.active .slide__inner:before {\n      border-color: transparent;\n      opacity: 0; }\n    .slide.active .slide__title {\n      font-size: 1rem;\n      opacity: 1;\n      transform: translate3d(0, 0, 0);\n      transition-delay: .6s;\n      pointer-events: auto; }\n    .slide.active .slide__image {\n      -moz-filter: grayscale(0) !important;\n      -webkit-filter: grayscale(0) !important;\n      filter: grayscale(0) !important;\n      color: #fff; }\n    .slide.active:hover .slide__inner:before {\n      background-image: url(" + __webpack_require__(60) + ");\n      background-color: rgba(255, 248, 67, 0.85);\n      opacity: 1; }\n\n.slide__title {\n  position: absolute;\n  top: -55px;\n  color: #666666;\n  width: 100%;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity .3s, transform .3s;\n  will-change: opacity, transform;\n  transform: translate3d(0, 50%, 0); }\n\n.slide__image {\n  transition: all .4s;\n  position: relative;\n  background: red;\n  width: 100%;\n  padding-bottom: 166.67%;\n  height: 0;\n  color: #c7c7c7;\n  background: center no-repeat;\n  background-size: cover;\n  -moz-filter: grayscale(100%);\n  -webkit-filter: grayscale(100%);\n  filter: grayscale(100%); }\n\n.slide__inner {\n  margin: 0 42px;\n  cursor: pointer;\n  position: relative;\n  width: 240px; }\n  .slide__inner:after, .slide__inner:before {\n    content: '';\n    position: absolute;\n    display: block;\n    z-index: 2;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    transform: translate3d(0, 0, 0); }\n  .slide__inner:after {\n    background: url(" + __webpack_require__(61) + ") no-repeat center;\n    background-size: 33% auto;\n    opacity: 1;\n    will-change: opacity;\n    transition: opacity .1s; }\n  .slide__inner:before {\n    transition: all .2s;\n    background-color: rgba(255, 255, 255, 0.78);\n    box-sizing: border-box;\n    border: 4px solid #002bff;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 33% auto; }\n\n.disabled_scroll_animation .slider {\n  transition: none; }\n  .disabled_scroll_animation .slider .slide .slide__image {\n    transition: none; }\n  .disabled_scroll_animation .slider .slide .slide__title {\n    transition: none; }\n\n@media screen and (max-width: 900px) {\n  body:not(.mobile) .fb-like {\n    width: 0; }\n  body:not(.mobile) .like-label {\n    display: none; } }\n\n@media screen and (max-width: 600px) {\n  body.mobile .fb-like {\n    width: 0; }\n  body.mobile .like-label {\n    display: none; } }\n\n@media screen and (max-width: 1000px) {\n  .price {\n    width: 50%; }\n    .price:nth-child(3n+4) {\n      clear: none; }\n    .price:nth-child(2n +3) {\n      clear: both; }\n  .contacts_list {\n    width: 100%;\n    text-align: center; }\n    .contacts_list li {\n      margin: 0 45px 25px !important; }\n  .products_steps {\n    width: 100%;\n    text-align: center; }\n  .step {\n    width: 30%;\n    padding: 0 !important;\n    display: inline-block;\n    float: none; }\n    .step:after {\n      display: none; }\n  .step__title, .step__text {\n    width: 100%; }\n  .step__icon {\n    margin: 0 auto 7px; }\n  .step__icon--bubble {\n    margin: -8px auto 7px; } }\n\n@media screen and (min-width: 700px) and (max-width: 1000px) {\n  .step {\n    width: 33.33% !important;\n    box-sizing: border-box;\n    display: block;\n    float: left;\n    margin: 0 !important;\n    padding: 0 20px !important; }\n    .step:first-child {\n      margin: 0; }\n    .step:last-child {\n      width: 33.33% !important; } }\n\n@media screen and (max-height: 770px) {\n  .book {\n    width: 18vh; } }\n\n@media screen and (max-height: 900px) {\n  .slider .slide .slide__inner {\n    margin: 0 2vh;\n    width: 20vh; }\n  .slider .slide .slide__title {\n    font-size: 2vh;\n    line-height: 1.5em; } }\n\nbody.mobile {\n  overflow: auto;\n  font-size: 14px; }\n  body.mobile .page {\n    position: relative;\n    height: auto;\n    z-index: 1 !important;\n    pointer-events: all;\n    transform: none !important;\n    transition: all 0s !important;\n    min-height: 500px; }\n  body.mobile .page__inner {\n    transform: none !important;\n    transition: all 0s !important; }\n  body.mobile .title {\n    transform: none !important;\n    transition: all 0s !important; }\n  body.mobile .pager {\n    position: fixed; }\n  body.mobile .mobile-hide {\n    display: none !important; }\n  body.mobile .mobile-show {\n    display: block; }\n  body.mobile .logo:not(.logo--steps) {\n    font-size: 12px; }\n    @media screen and (min-width: 700px) {\n      body.mobile .logo:not(.logo--steps) {\n        font-size: 16px; } }\n  body.mobile .page--main .logo {\n    margin-bottom: 45px; }\n  body.mobile .button--big {\n    font-size: 17px;\n    height: 63px;\n    line-height: 53px; }\n  body.mobile .button--big--popup {\n    margin-top: 0;\n    width: 100%; }\n  body.mobile .button {\n    padding: 0 22px; }\n  body.mobile .arrow--down {\n    margin-top: 37px;\n    width: 21px;\n    height: 45px; }\n  body.mobile canvas.canvas-bg {\n    display: block; }\n  body.mobile canvas.rectangles {\n    display: none; }\n  body.mobile .page {\n    font-size: 14px; }\n    body.mobile .page .page__inner {\n      padding: 50px 0; }\n  body.mobile .page--contacts .page__inner {\n    padding-bottom: 100px; }\n  body.mobile .logo_small {\n    display: none !important; }\n  body.mobile header {\n    position: absolute;\n    top: 0;\n    bottom: auto;\n    background: transparent !important; }\n    body.mobile header:after {\n      display: none; }\n    body.mobile header * {\n      color: #000 !important; }\n    body.mobile header svg {\n      fill: #000 !important; }\n  body.mobile .page--contacts.active ~ header * {\n    color: #fff !important; }\n  body.mobile .page--contacts.active ~ header svg {\n    fill: #fff !important; }\n  body.mobile .language {\n    margin: 0 14px; }\n  body.mobile .order_button {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 2;\n    background: #000 !important;\n    color: #fff !important;\n    width: 100%;\n    opacity: 1 !important;\n    transform: translateY(0);\n    transition: transform .3s, color .2s, background .2s; }\n  @media screen and (max-width: 700px) {\n    body.mobile .step {\n      width: 100%;\n      margin: 0 0 35px; } }\n  @media screen and (max-width: 700px) {\n    body.mobile .step__title {\n      max-width: 220px;\n      margin-left: auto;\n      margin-right: auto;\n      margin-bottom: 5px; } }\n  body.mobile .pager {\n    display: none; }\n  body.mobile .title {\n    max-width: 80vw;\n    font-size: 35px;\n    line-height: 48px; }\n  body.mobile .title--contacts {\n    margin-top: 35px; }\n  body.mobile .title--skills:before {\n    margin-bottom: 20px; }\n  body.mobile .page--main.active ~ header .order_button {\n    transform: translateY(100px); }\n  body.mobile .page--main .page__inner {\n    padding-top: 112px; }\n  body.mobile .page--contacts.active ~ header .order_button {\n    background: #fbfc50 !important;\n    color: #000 !important; }\n  body.mobile .page--prices {\n    background: #fff; }\n  body.mobile .tags-wrap {\n    width: 100%;\n    overflow-x: auto; }\n  body.mobile .tags {\n    padding-bottom: 10px;\n    width: 820px; }\n  body.mobile .tag {\n    margin: 0 6px 7px; }\n  body.mobile .page--main .arrow_down {\n    margin-top: 35px;\n    width: 21px;\n    height: 45px; }\n  body.mobile .page--main .logo_big {\n    margin-bottom: 52px; }\n  body.mobile .page--main .subtitle {\n    font-size: 18px;\n    margin: 25px auto; }\n  @media screen and (max-width: 700px) {\n    body.mobile .price_list {\n      margin-top: 20px; }\n    body.mobile .price {\n      width: 100%;\n      text-align: center;\n      padding: 0;\n      margin-bottom: 20px; }\n    body.mobile .price__title {\n      margin: 0 auto 10px;\n      max-width: 80vw;\n      width: 100%; }\n    body.mobile .prices_image {\n      width: 96px;\n      height: 95px;\n      margin-bottom: 20px; } }\n  @media screen and (max-width: 700px) {\n    body.mobile .contacts_list {\n      margin-top: 50px;\n      text-align: left; }\n    body.mobile .contacts_list__item {\n      display: block;\n      margin: 0 0 24px 49px !important; }\n      body.mobile .contacts_list__item:after {\n        content: '';\n        display: block;\n        width: 100%;\n        clear: both; } }\n  body.mobile .address {\n    font-size: 9px;\n    margin-top: 50px; }\n    @media screen and (min-width: 700px) {\n      body.mobile .address {\n        font-size: 11px; } }\n  @media screen and (max-width: 800px) {\n    body.mobile .motivations {\n      display: flex;\n      flex-direction: column;\n      margin-top: 30px; }\n    body.mobile .motivation {\n      display: flex;\n      width: 100%;\n      min-height: 0;\n      background: #fff843 !important;\n      padding: 0; }\n    body.mobile .motivation__inner {\n      max-width: initial;\n      width: 100%; } }\n  @media screen and (max-width: 800px) and (max-width: 700px) {\n    body.mobile .motivation__inner {\n      padding: 0 4% 0 50%; } }\n  @media screen and (max-width: 800px) {\n    body.mobile .motivation__text {\n      padding: 20px 0; }\n    body.mobile .motivation--click {\n      order: 1; }\n      body.mobile .motivation--click .motivation__inner:before {\n        top: 24px;\n        left: 21px;\n        width: 110px;\n        height: 85px; }\n    body.mobile .motivation--focus {\n      order: 4;\n      background-color: #fff !important; }\n      body.mobile .motivation--focus .motivation__inner:before {\n        top: 30px;\n        left: -10px;\n        width: 131px;\n        height: 60px; }\n    body.mobile .motivation--media {\n      order: 2;\n      background-color: #fff !important; }\n      body.mobile .motivation--media .motivation__inner:before {\n        top: 27px;\n        left: 26px;\n        width: 92px;\n        height: 84px; }\n    body.mobile .motivation--interactive {\n      order: 5; }\n      body.mobile .motivation--interactive .motivation__inner:before {\n        top: 14px;\n        left: 30px;\n        width: 94px;\n        height: 115px; }\n    body.mobile .motivation--time {\n      order: 3; }\n      body.mobile .motivation--time .motivation__inner:before {\n        top: 21px;\n        left: 38px;\n        width: 70px;\n        height: 91px; }\n    body.mobile .motivation--success {\n      order: 6;\n      background-color: #fff !important; }\n      body.mobile .motivation--success .motivation__inner:before {\n        top: 26px;\n        left: 28px;\n        width: 95px;\n        height: 95px; } }\n  body.mobile .skills_text {\n    width: 90%;\n    margin-top: 20px; }\n  @media screen and (max-width: 700px) {\n    body.mobile .team__row {\n      margin: 0; }\n      body.mobile .team__row li {\n        font-size: 16px;\n        padding-bottom: 30px;\n        width: 100%;\n        padding-left: 0;\n        line-height: 1; }\n        body.mobile .team__row li:first-child:before {\n          display: block; }\n        body.mobile .team__row li:before {\n          position: absolute;\n          left: 50%;\n          bottom: 12px;\n          top: auto; }\n      body.mobile .team__row:last-child li:last-child:before {\n        display: none; } }\n  body.mobile .face--1 {\n    left: 0;\n    top: 80px;\n    width: 150px;\n    margin-left: -80px;\n    display: block; }\n  body.mobile .face--5 {\n    display: block;\n    width: 72px;\n    top: 360px;\n    margin-left: 0;\n    left: 0; }\n  body.mobile .face--2 {\n    right: -21px;\n    margin-left: 0;\n    top: 210px;\n    width: 87px;\n    display: block;\n    left: auto; }\n  body.mobile .popup {\n    overflow: hidden; }\n  body.mobile .popup--order .popup__inner {\n    max-width: initial;\n    border: 0;\n    padding: 60px 13px 45px; }\n  body.mobile .popup__inner {\n    margin: 0;\n    left: 0;\n    position: absolute;\n    bottom: 0;\n    top: 0;\n    width: 100%;\n    box-sizing: border-box;\n    overflow-y: auto; }\n    body.mobile .popup__inner form {\n      max-width: 600px;\n      margin: 0 auto; }\n    body.mobile .popup__inner.popup_open {\n      overflow: hidden; }\n\nbody.longrid {\n  overflow-y: auto; }\n  body.longrid .page {\n    position: relative;\n    height: auto;\n    z-index: 1 !important;\n    pointer-events: all;\n    transform: none !important;\n    transition: all 0s !important;\n    min-height: 500px; }\n  body.longrid .page__inner {\n    transform: none !important;\n    transition: all 0s !important; }\n  body.longrid .title {\n    transform: none !important;\n    transition: all 0s !important; }\n  body.longrid .pager {\n    position: fixed; }\n", ""]);

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

	module.exports = __webpack_require__.p + "build/assets/mail.svg";

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/book.svg";

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/slider_plus.svg";

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "build/assets/play.svg";

/***/ },
/* 62 */
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.localization = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _ajax = __webpack_require__(64);

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
/* 64 */
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.scroll = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(66);

	var _popup = __webpack_require__(67);

	var _mobile = __webpack_require__(68);

	var _smoothScroll = __webpack_require__(69);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var config = {
	  section: 'section.page',
	  pagerWrap: '.pager',
	  activeClass: 'active',
	  hashAttribute: 'id',
	  disabledAnimationClass: 'disabled_scroll_animation',
	  scrollFreeze: ~navigator.userAgent.indexOf('Mac OS X') ? 1300 : 500
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
	    firstScrollTime = new Date().getTime(),
	    lastScrollTime = firstScrollTime,
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
	      if (_popup.popup.isOpen) {
	        return;
	      }
	      if ((0, _mobile.isMobile)() || (0, _mobile.isLongrid)()) {
	        return;
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
	        sections[this.activeSection].classList.add(config.activeClass);
	        pagerItems[this.activeSection].classList.add(config.activeClass);
	        document.dispatchEvent(sectionsChangeEvent);
	      }
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      var _this = this;

	      [].forEach.call(document.querySelectorAll('.go_section'), function (element) {
	        element.addEventListener('click', function () {
	          var newIndex = parseInt(element.getAttribute('data-section'));
	          if ((0, _mobile.isMobile)() || (0, _mobile.isLongrid)()) {
	            var time = Math.abs(document.body.scrollTop - sections[newIndex].offsetTop) * .8;
	            (0, _smoothScroll.smoothScroll)(document.body, sections[newIndex].offsetTop, time, true);
	            return;
	          }
	          _this.changeSection(newIndex, true);
	        });
	      });
	      sections = document.querySelectorAll(config.section);
	      pagerInit();

	      (0, _events.mouseWheel)(window, wheel);
	      (0, _events.mobileTouchAndMove)(window, touchStart, touchMove, touchEnd);
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
	      if ((0, _mobile.isMobile)() || (0, _mobile.isLongrid)()) {
	        var time = Math.abs(document.body.scrollTop - sections[i].offsetTop) * .8;
	        (0, _smoothScroll.smoothScroll)(document.body, sections[i].offsetTop, time, true);
	        return;
	      }
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

	var longridScroll = function () {
	  if (!(0, _mobile.isMobile)() && !(0, _mobile.isLongrid)()) return;
	  var activeSection = void 0,
	      i = void 0,
	      scrollTop = window.scrollY,
	      targetIndex = void 0;

	  for (i = 0; i < sections.length; i++) {
	    if (scrollTop > sections[i].offsetTop + sections[i].offsetHeight - window.innerHeight / 4) {
	      activeSection = sections[i];
	    } else {
	      break;
	    }
	  }
	  targetIndex = i;
	  if (this.activeSection === targetIndex) return;
	  sections[this.activeSection].classList.remove(config.activeClass);
	  pagerItems[this.activeSection].classList.remove(config.activeClass);
	  this.activeSection = targetIndex;
	  sections[this.activeSection].classList.add(config.activeClass);
	  pagerItems[this.activeSection].classList.add(config.activeClass);
	  document.dispatchEvent(sectionsChangeEvent);
	}.bind(scroll);

	window.addEventListener('scroll', longridScroll);

	exports.scroll = scroll;

/***/ },
/* 66 */
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

	var mobileTouchAndMove = exports.mobileTouchAndMove = function mobileTouchAndMove(element, touchStart, touchMove, touchEnd, remove) {
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

	var resizeTimeout = void 0;
	var resizeEnd = exports.resizeEnd = function resizeEnd(callback) {
	  var freeze = 100;
	  clearTimeout(resizeTimeout);
	  resizeTimeout = setTimeout(function () {
	    callback && callback();
	  }, freeze);
	};

/***/ },
/* 67 */
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
/* 68 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var isMobile = exports.isMobile = function isMobile() {
	  var check = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	  return window.innerWidth <= 700 || check;
	};

	var isLongrid = exports.isLongrid = function isLongrid() {
	  return window.innerHeight < 650 && !isMobile();
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var startValue = void 0;
	var firstTime = void 0;
	var frame = void 0;
	var smoothScroll = exports.smoothScroll = function smoothScroll(element, to, duration, start) {
	  if (start) {
	    cancelAnimationFrame(frame);
	    startValue = element.scrollTop;
	    to = to - element.scrollTop;
	    firstTime = new Date().getTime();
	  }
	  var currentTime = new Date().getTime();
	  var time = currentTime - firstTime;

	  element.scrollTop = Math.easeOutCubic(element.scrollTop, time, startValue, to, duration);

	  if (time >= duration) {
	    startValue = null;
	    firstTime = null;
	    return;
	  }
	  frame = requestAnimationFrame(function () {
	    return smoothScroll(element, to, duration);
	  });
	};

	Math.easeOutCubic = function (x, t, b, c, d) {
	  return -c * (t /= d) * (t - 2) + b;
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

	var _popup = __webpack_require__(67);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var activeSlide = void 0,
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
	      if (this.initialized) {
	        this.initSizes();
	        this.getSlides();
	        this.addClick();
	        var _activeIndex = Math.floor(this.slides.length / 2);
	        this.setActive(this.slides[_activeIndex], true);
	        return;
	      }
	      this.slider = document.querySelector('.slider');
	      this.constSlides = this.slider.querySelectorAll('.slide');

	      this.initSizes();
	      this.getSlides();
	      this.addClick();
	      var activeIndex = Math.floor(this.slides.length / 2);
	      this.setActive(this.slides[activeIndex], true);
	      this.initialized = true;
	    }
	  }, {
	    key: 'addClick',
	    value: function addClick() {
	      this.slides.forEach(function (element) {
	        element.addEventListener('click', function (e) {
	          e.preventDefault();
	          click(element);
	        });
	      });
	    }
	  }, {
	    key: 'getSlides',
	    value: function getSlides() {
	      var _this = this;

	      this.slides = [];
	      [].forEach.call(this.slider.querySelectorAll('.slide'), function (slide) {
	        _this.slides.push(slide);
	      });
	    }
	  }, {
	    key: 'initSizes',
	    value: function initSizes() {
	      var _this2 = this;

	      this.slides = [];
	      var fragment = document.createDocumentFragment();

	      [].forEach.call(this.constSlides, function (slide) {
	        var newSlide = slide.cloneNode(true);
	        fragment.appendChild(newSlide);
	        _this2.slides.push(newSlide);
	      });
	      if (!this.slider.querySelector('slide')) {
	        //for width check
	        this.slider.appendChild(this.slides[0].cloneNode(true));
	      }

	      slideWidth = this.slider.querySelector('.slide').offsetWidth;
	      sliderWidth = this.slider.offsetWidth;
	      this.slider.innerHTML = '';
	      var slidesCountLeft = Math.floor(window.innerWidth / slideWidth);
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
	        fragment.appendChild(forAppEnd);
	      }
	      for (var _i = 0; _i < slidesCountRight; _i++) {
	        var _index = _i;
	        while (this.slides.length <= _index) {
	          _index -= this.slides.length;
	        }
	        var forPrepEnd = this.slides[this.slides.length - 1 - _index].cloneNode(true);
	        forPrepEnd.classList.remove('active');
	        fragment.insertBefore(forPrepEnd, fragment.querySelectorAll('.slide')[0]);
	      }
	      this.slider.appendChild(fragment);
	    }
	  }, {
	    key: 'setActive',
	    value: function setActive(slide, lockAnimation) {
	      var _this3 = this;

	      if (slideLock) return;

	      var slideIndex = this.slides.indexOf(slide),
	          activeIndex = this.slides.indexOf(activeSlide),
	          diff = void 0,
	          next = void 0;

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

	      this.slider.style.transform = 'translate3d(' + diff + 'px, 0, 0)';
	      if (lockAnimation) {
	        this.slider.offsetHeight;
	        this.slider.style.transition = '';
	      } else if (typeof next !== 'undefined') {
	        slideLock = true;
	        this.slider.style.pointerEvents = 'none';
	        setTimeout(function () {
	          var fragmentAfter = document.createDocumentFragment();
	          var fragmentBefore = document.createDocumentFragment();
	          _this3.slider.style.pointerEvents = 'all';
	          if (next) {
	            if (~activeIndex) {
	              for (var i = 0; i < slideIndex - activeIndex; i++) {
	                var index = i;
	                while (_this3.slides.length <= index) {
	                  index -= _this3.slides.length;
	                }
	                fragmentAfter.appendChild(_this3.slides[i]);
	              }
	            }
	          } else {
	            for (var _i2 = 0; _i2 < activeIndex - slideIndex; _i2++) {
	              var _index2 = _i2;
	              while (_this3.slides.length <= _index2) {
	                _index2 -= _this3.slides.length;
	              }
	              if (!fragmentBefore.querySelector('.slide')) {
	                fragmentBefore.appendChild(_this3.slides[_this3.slides.length - 1 - _i2]);
	              } else {
	                fragmentBefore.insertBefore(_this3.slides[_this3.slides.length - 1 - _i2], fragmentBefore.querySelectorAll('.slide')[0]);
	              }
	            }
	          }
	          if (fragmentAfter.querySelectorAll('.slide')) {
	            _this3.slider.appendChild(fragmentAfter);
	          }
	          if (fragmentBefore.querySelectorAll('.slide')) {
	            _this3.slider.insertBefore(fragmentBefore, _this3.slider.querySelectorAll('.slide')[0]);
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

	var _mobile = __webpack_require__(68);

	var tagsAnimationDelay = 60; //ms
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

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _scroll = __webpack_require__(65);

	var _Vector = __webpack_require__(73);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var rectanglesMoveSpeedCoef = .5; //сама по себе скорость генерируется рандомно в каком то диапазоне, тут всего лишь коэффициент (ищите генерацию по названию, если что то менять)
	var gridStep = 222; //шаг серых полосок
	var rectangleHeight = 335; //дефолтная высота блока (из дизайна, для расчета площади больше)
	var sizes = [1 / 2, 1 / 2, 1, 1, 1, 1, 1, 2]; //эмуляция рандомного выбора размера нового прямоугольника. Типа, чем больше повторяется, тем больше вероятность. (1/2, 1, 2 - ширина относительно gridStep)
	var square = gridStep * rectangleHeight; //площадь, для расчета действительной высоты. Типа площадь всегда константа.
	var anglesPointsRadius = 3.5;
	var linesColor = "#cbcbcb"; //цвет вертикальных полос
	var curves = true; //переключатель кривизны


	var fps = 60;
	var now = void 0;
	var then = Date.now();
	var delta = void 0;
	var interval = 1000 / fps;
	var vector = new _Vector.Vector(0, 0);
	var mouseCoordinates = [{ x: null, y: null }, { x: null, y: null }];
	var maxRectanglesCount = void 0;

	function initMaxRectanglesCount() {
	  maxRectanglesCount = Math.floor(.5 * window.innerWidth / gridStep); //считай половина сетки
	}

	var rectanglesConfig = {
	  bright: {
	    color: '#fff848',
	    borderColor: '#cbcbcb'
	  },
	  default: {
	    color: '#fff848',
	    borderColor: '#cbcbcb'
	  }
	};
	var canvas = void 0;

	var grid = [],
	    gridCenter = void 0;
	document.addEventListener('sectionchange', function () {
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
	    key: 'drawGrid',
	    value: function drawGrid() {
	      var ctx = this.ctx;
	      ctx.clearRect(0, 0, this.width, this.height);

	      ctx.beginPath();
	      ctx.lineWidth = 1;
	      ctx.strokeStyle = linesColor;

	      grid.forEach(function (x) {
	        ctx.moveTo(x, 0);
	        ctx.lineTo(x, canvas.height);
	      });

	      ctx.stroke();
	      ctx.closePath();
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
	    value: function generateMovePath() {
	      var _this = this;

	      var points = [];
	      var oscillationCount = void 0;
	      var getLastPoint = function getLastPoint() {
	        return points.length > 0 ? points[points.length - 1] : _this;
	      };

	      var lastPointDistance = distanceFromConst(getLastPoint());

	      oscillationCount = Math.round(lastPointDistance / 10);
	      this.speed += (1 - (100 - lastPointDistance) / 100) / 10;
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
	      var nextMovePoint = this.movePath[0];
	      this.x += (nextMovePoint.x - this.x) * this.speed;
	      this.y += (nextMovePoint.y - this.y) * this.speed;
	      if (pointDistance(this, nextMovePoint) < 1) {
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
	    { x: config.x + config.width, y: config.y + config.height }, //bottom right
	    { x: config.x, y: config.y + config.height } //bottom left
	    ];
	    this.width = config.width;
	    this.height = config.height;
	    this.startY = config.y;
	    this.speed = config.speed || 1;
	    this.gridPosition = config.gridPosition;
	    this.gridWidth = config.gridWidth;
	    this.color = rectanglesConfig.default.color;
	    this.borderColor = rectanglesConfig.default.borderColor;
	    this.points = [];
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
	  }

	  _createClass(Rectangle, [{
	    key: 'draw',
	    value: function draw() {
	      var ctx = canvas.ctx;
	      var rectangle = this;
	      ctx.beginPath();
	      ctx.strokeStyle = this.borderColor;
	      ctx.fillStyle = this.color;
	      ctx.moveTo(rectangle.points[0][0].x, rectangle.points[0][0].y);
	      for (var i = 0; i < rectangle.points.length; i++) {
	        var next = i + 1;
	        if (next === rectangle.points.length) next = 0;
	        ctx.bezierCurveTo(rectangle.points[i][1].x, rectangle.points[i][1].y, rectangle.points[i][2].x, rectangle.points[i][2].y, rectangle.points[next][0].x, rectangle.points[next][0].y);
	      }
	      ctx.fill();
	      ctx.stroke();
	      ctx.closePath();
	    }
	  }, {
	    key: 'move',
	    value: function move() {
	      var _this2 = this;

	      this.points.forEach(function (line) {
	        var speed = _this2.speed;
	        var xDiff = _this2.direction.x * speed;
	        var yDiff = _this2.direction.y * speed;
	        for (var i = 0; i < 3; i++) {
	          var point = line[i];
	          point.x += xDiff;
	          point.y += yDiff;
	          point.constX += xDiff;
	          point.constY += yDiff;
	          if (point.movePath) {
	            point.movePath.forEach(function (movePoint) {
	              movePoint.x += xDiff;
	              movePoint.y += yDiff;
	            });
	          }
	        }
	      });
	    }
	  }]);

	  return Rectangle;
	}();

	var BrightRectangle = function (_Rectangle) {
	  _inherits(BrightRectangle, _Rectangle);

	  function BrightRectangle(config) {
	    _classCallCheck(this, BrightRectangle);

	    var _this3 = _possibleConstructorReturn(this, (BrightRectangle.__proto__ || Object.getPrototypeOf(BrightRectangle)).call(this, config));

	    _this3.color = rectanglesConfig.bright.color;
	    _this3.borderColor = rectanglesConfig.bright.borderColor;
	    _this3.height = rectanglesConfig.bright.height;
	    _this3.type = 'bright';
	    rectanglesArray.push(_this3);
	    return _this3;
	  }

	  _createClass(BrightRectangle, [{
	    key: 'draw',
	    value: function draw() {
	      _get(BrightRectangle.prototype.__proto__ || Object.getPrototypeOf(BrightRectangle.prototype), 'draw', this).call(this);
	      var ctx = canvas.ctx;
	      var rectangle = this;
	      ctx.beginPath();
	      ctx.fillStyle = rectangle.borderColor;
	      rectangle.points.forEach(function (line) {
	        ctx.moveTo(line[0].x, line[0].y);
	        ctx.arc(line[0].x, line[0].y, anglesPointsRadius, 0, 2 * Math.PI, false);
	      });

	      ctx.fill();
	      ctx.closePath();
	    }
	  }]);

	  return BrightRectangle;
	}(Rectangle);

	var FadedRectangle = function (_Rectangle2) {
	  _inherits(FadedRectangle, _Rectangle2);

	  function FadedRectangle(config) {
	    _classCallCheck(this, FadedRectangle);

	    var _this4 = _possibleConstructorReturn(this, (FadedRectangle.__proto__ || Object.getPrototypeOf(FadedRectangle)).call(this, config));

	    _this4.color = rectanglesConfig.faded.color;
	    _this4.borderColor = rectanglesConfig.faded.borderColor;
	    _this4.size = rectanglesConfig.faded.height;
	    _this4.type = 'faded';
	    rectanglesArray.push(_this4);
	    return _this4;
	  }

	  return FadedRectangle;
	}(Rectangle);

	var animationStep = void 0;
	function animate() {
	  now = Date.now();
	  delta = now - then;
	  animationStep = requestAnimationFrame(animate);

	  while (rectanglesArray.length < maxRectanglesCount) {
	    generateRectangle(null, 'bright');
	  }
	  if (delta > interval) {
	    for (var i = 0; i < rectanglesArray.length; i++) {
	      var rectangle = rectanglesArray[i];
	      if (checkRectangleIsNotVisible(rectangle)) {
	        generateRectangle(rectangle, rectangle.type);
	        break;
	      }
	    }
	    canvas.drawGrid();
	    if (curves) {
	      (function () {
	        var curveCoef = 1;
	        var senseDistance = 100;
	        var cursorPosition = mouseCoordinates;

	        rectanglesArray.forEach(function (rectangle) {

	          // checkPass(rectangle);
	          var closestLine = getClosestLine(rectangle, cursorPosition[1]);
	          var closestPoint = getClosestPoint(closestLine, cursorPosition[1]);
	          var cursorMoveVector = {
	            x: cursorPosition[1].x - cursorPosition[0].x,
	            y: cursorPosition[1].y - cursorPosition[0].y
	          };

	          if (vector.length.call(cursorMoveVector) > 100) return;
	          if (!rectangle.pass) rectangle.move();

	          rectangle.points.forEach(function (line) {
	            for (var _i = 0; _i < 3; _i++) {
	              line[_i].move();
	            }
	          });
	          if (closestPoint) {
	            closestPoint.stop();
	            clearTimeout(closestPoint.timeout);
	            closestPoint.animationLock = true;
	            var closestDistance = distanceFromConst(closestPoint);
	            if (closestDistance < senseDistance) {
	              closestPoint.x += curveCoef * cursorMoveVector.x;
	              closestPoint.y += curveCoef * cursorMoveVector.y;
	            }

	            closestPoint.timeout = setTimeout(function () {
	              closestPoint.animationLock = false;
	            }, 100);
	          }
	        });
	      })();
	    }
	    rectanglesArray.forEach(function (rectangle) {
	      rectangle.draw();
	      rectangle.move();
	    });

	    then = now - delta % interval;
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
	    initMaxRectanglesCount();
	    if (!canvas) {
	      canvas = new Canvas('canvas.rectangles');
	    }
	    var width = canvas.element.parentNode.offsetWidth;
	    var height = canvas.element.parentNode.offsetHeight;
	    canvas.width = width;
	    canvas.height = height;

	    canvas.element.width = width;
	    canvas.element.height = height;

	    canvas.ctx.clearRect(0, 0, width, height);
	    gridInit(canvas);
	    for (var type in rectanglesConfig) {
	      if (type === 'bright') {
	        for (var i = 0; i < maxRectanglesCount; i++) {
	          generateRectangle(null, type);
	        }
	      }
	    }
	    start();
	  },
	  start: start,
	  stop: stop
	};

	function removeRectangle(rectangle) {
	  removeArrayElement(rectangle, rectanglesArray);
	}

	function removeArrayElement(element, array) {
	  ~array.indexOf(element) && array.splice(array.indexOf(element), 1);
	}

	function generateRectangle(invisibleRectangle, type) {
	  if (invisibleRectangle) {
	    removeRectangle(invisibleRectangle);
	  }
	  var gridWidth = void 0,
	      width = void 0,
	      direction = void 0,
	      speed = rectanglesMoveSpeedCoef * Math.round(100 * (1 + 2 * Math.random())) / 100,
	      x = void 0,
	      y = void 0,
	      height = void 0,
	      config = void 0,
	      gridPosition = getRandomInt(0, grid.length - 2);
	  direction = getRandomDirection();

	  gridWidth = sizes[getRandomInt(0, sizes.length - 1)];
	  width = gridWidth * gridStep;
	  height = square / width;

	  if (direction.y) {
	    x = getRandomAvailableGridPosition(width);
	    if (direction.y > 0) {

	      y = -height - getRandomInt(20, 120);
	    } else {
	      y = canvas.height + getRandomInt(20, 120);
	    }
	  }
	  function getRandomAvailableGridPosition() {
	    var tempGrid = [],
	        availableGrid = [];
	    for (var i = 0; i < grid.length - 2; i++) {
	      var item = grid[i];
	      if (gridWidth === .5) {
	        tempGrid.push({ x: item, isEnabled: true });
	        tempGrid.push({ x: item + gridStep / 2, isEnabled: true });
	      } else if (gridWidth === 1) {
	        tempGrid.push({ x: item, isEnabled: true });
	      } else if (gridWidth === 2 && i !== grid.length - 3) {
	        tempGrid.push({ x: item, isEnabled: true });
	      }
	    }

	    var _loop = function _loop(_i2) {
	      rectanglesArray.forEach(function (rectangle) {
	        if (rectangle.direction.x) return;

	        var x11 = tempGrid[_i2].x,
	            x12 = x11 + width,
	            x21 = rectangle.points[0][0].x,
	            x22 = rectangle.points[0][3].x;

	        if (Math.min(x12, x22) - Math.max(x11, x21) > 0) {
	          tempGrid[_i2].isEnabled = false;
	        }
	      });
	    };

	    for (var _i2 = 0; _i2 < tempGrid.length; _i2++) {
	      _loop(_i2);
	    }
	    for (var _i3 = 0; _i3 < tempGrid.length; _i3++) {
	      if (tempGrid[_i3].isEnabled) {
	        availableGrid.push(tempGrid[_i3].x);
	      }
	    }
	    return availableGrid[getRandomInt(0, availableGrid.length - 1)];
	  }

	  if (!x || !y) return;
	  config = {
	    x: x,
	    y: y,
	    width: width,
	    height: height,
	    gridWidth: gridWidth,
	    canvas: canvas,
	    direction: direction,
	    speed: speed,
	    gridPosition: gridPosition,
	    type: type
	  };
	  if (type === 'bright') {
	    new BrightRectangle(config);
	  } else if (type === 'faded') {
	    new FadedRectangle(config);
	  }
	}

	// let moveTimeout;
	function mouseMove(e) {
	  // lastMouseMoveTime = Date.now();
	  // clearTimeout(moveTimeout);
	  mouseCoordinates[0] = mouseCoordinates[1];
	  mouseCoordinates[1] = {
	    x: e.clientX,
	    y: e.clientY
	  };
	  // moveTimeout = setTimeout(()=> {
	  //   mouseCoordinates[0] = mouseCoordinates[1];
	  // }, 200)
	}
	// function checkPass(rectangle) {
	//   let direction = rectangle.direction,
	//     lineToCheck, otherRectangleLineIndex, pass = null, distanceToPass = 50;
	//
	//   if (direction.x) {
	//     if (direction.x === 1) {
	//       lineToCheck = rectangle.points[1];
	//       otherRectangleLineIndex = 3;
	//     } else {
	//       lineToCheck = rectangle.points[3];
	//       otherRectangleLineIndex = 1;
	//     }
	//   } else if (direction.y) {
	//     if (direction.y === 1) {
	//       lineToCheck = rectangle.points[2];
	//       otherRectangleLineIndex = 0;
	//     } else {
	//       lineToCheck = rectangle.points[0];
	//       otherRectangleLineIndex = 2;
	//     }
	//   }
	//
	//   rectanglesArray.forEach(otherRectangle => {
	//     if (otherRectangle.pass === rectangle) return;
	//     let otherLine = otherRectangle.points[otherRectangleLineIndex];
	//     if (direction.x) {
	//       if (Math.abs(lineToCheck[0].constX - otherLine[0].constX) < distanceToPass) {
	//         lineToCheck.forEach(point => {
	//           if ((point.constY > otherLine[0].constY && point.constY < otherLine[3].constY) || (point.constY >
	// otherLine[3].constY && point.constY < otherLine[0].constY)) { pass = otherRectangle; } }); } } else { if
	// (Math.abs(lineToCheck[0].constY - otherLine[0].constY) < distanceToPass) { lineToCheck.forEach(point => { if
	// ((point.constX > otherLine[0].constX && point.constX < otherLine[3].constX) || (point.constX > otherLine[3].constX
	// && point.constX < otherLine[0].constX)) { pass = otherRectangle; } }); } } });  rectangle.pass = pass; }
	function getAvailableGridPositions(gridWidth, type) {
	  var lockedGridPositions = [],
	      availableGridPositions = [],
	      lockedGridPositionsTemp = [];
	  rectanglesArray.forEach(function (rectangle) {
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

	function getAvailableYPosition(type) {
	  var ordinates = [];
	  rectanglesArray.forEach(function (rectangle) {
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
	  var senseDistance = 40;
	  var closestLine = false;
	  var x = point.x;
	  var y = point.y;
	  for (var i = 0; i < rectangle.points.length; i++) {
	    var line = rectangle.points[i];
	    if (Math.abs(line[0].constY - line[1].constY) < 1) {
	      if (y > line[0].constY - senseDistance && y < line[0].constY + senseDistance) {
	        var x1 = line[0].constX - senseDistance;
	        var x2 = line[3].constX + senseDistance;
	        if (x > x1 && x < x2 || x < x1 && x > x2) {
	          closestLine = line;
	        }
	      }
	    } else if (x > line[0].constX - senseDistance && x < line[0].constX + senseDistance) {
	      var y1 = line[0].constY - senseDistance;
	      var y2 = line[3].constY + senseDistance;
	      if (y > y1 && y < y2 || y < y1 && y > y2) {
	        closestLine = line;
	      }
	    }
	  }

	  return closestLine;
	}
	function checkRectangleIsNotVisible(rectangle) {
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
	function pointDistance(point1, point2) {
	  return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
	}
	function distanceFromConst(point) {
	  return Math.sqrt(Math.pow(point.x - point.constX, 2) + Math.pow(point.y - point.constY, 2));
	}
	function getRandomDirection() {
	  var directions = [/*{ x: 1, y: 0 }, { x: -1, y: 0 },*/{
	    x: 0,
	    y: 1
	  }, { x: 0, y: -1 }];
	  return directions[getRandomInt(0, directions.length - 1)];
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

	function roundToMultiply(number, multiply) {
	  var tmp = void 0;
	  if ((tmp = number % multiply) != 0) {
	    number += number > -1 ? multiply - tmp : -tmp;
	  }
	  return number;
	}

	Array.prototype.getUnique = function () {
	  var u = {},
	      a = [];
	  for (var i = 0, l = this.length; i < l; ++i) {
	    if (u.hasOwnProperty(this[i])) {
	      continue;
	    }
	    a.push(this[i]);
	    u[this[i]] = 1;
	  }
	  return a;
	};

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

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.canvasBg = undefined;

	var _mobile = __webpack_require__(68);

	var settings = {
	  main: {
	    mobile: {
	      rectangles: [{
	        x: 2,
	        y: -12,
	        width: 3,
	        height: 150
	      }, {
	        x: -1,
	        y: 430,
	        width: 3,
	        height: 150
	      }]
	    }
	  },
	  products: {
	    mobile: {
	      strokeStyle: '#e5df3c'
	    },
	    desktop: {
	      strokeStyle: '#e5df3c'
	    }
	  },
	  production: {
	    mobile: {
	      strokeStyle: '#e5df3c'
	    },
	    desktop: {
	      strokeStyle: '#e5df3c'
	    }
	  },
	  prices: {
	    mobile: {
	      rectangles: [{
	        x: -1,
	        y: 210,
	        width: 3,
	        height: 150
	      }, {
	        x: 2,
	        y: 360,
	        width: 1,
	        height: 150
	      }, {
	        x: -1,
	        y: 590,
	        width: 3,
	        height: 220
	      }]
	    },
	    desktop: {
	      gridStep: 110,
	      rectangles: [{
	        x: -3,
	        y: 220,
	        width: 1,
	        height: 90
	      }, {
	        x: -5,
	        y: 310,
	        width: 2,
	        height: 90
	      }, {
	        x: 4,
	        y: 170,
	        width: 1,
	        height: 180
	      }, {
	        x: 0,
	        y: 760,
	        width: 5,
	        height: 225
	      }]
	    }

	  }
	};

	var anglesPointsRadius = 3.5;
	var mobileLines = 3;
	var canvasBg = exports.canvasBg = function canvasBg() {
	  var canvasElements = document.querySelectorAll('.canvas-bg');
	  [].forEach.call(canvasElements, function (canvas) {
	    var grid = [],
	        gridCenter = void 0;
	    var fillColor = '#fff843';
	    var strokeStyle = "#cbcbcb";
	    var config = canvas.getAttribute('data-config') && settings[canvas.getAttribute('data-config')][(0, _mobile.isMobile)() ? 'mobile' : 'desktop'];
	    var ctx = canvas.getContext('2d');
	    if (config) {
	      if (config.fillColor) {
	        fillColor = config.fillColor;
	      }
	      if (config.strokeStyle) {
	        strokeStyle = config.strokeStyle;
	      }
	    }

	    var gridStep = void 0;
	    if ((0, _mobile.isMobile)()) {
	      gridStep = window.innerWidth / mobileLines;
	    } else {
	      gridStep = config && config.gridStep || 222;
	    }

	    canvas.width = canvas.parentNode.offsetWidth;
	    canvas.height = canvas.parentNode.offsetHeight;
	    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
	    ctx.lineWidth = 1;
	    ctx.strokeStyle = strokeStyle;
	    if ((0, _mobile.isMobile)()) {
	      for (var i = 1; i < mobileLines; i++) {
	        var x = i * gridStep;
	        ctx.beginPath();
	        ctx.moveTo(x, 0);
	        ctx.lineTo(x, canvas.offsetHeight);
	        ctx.stroke();
	        ctx.closePath();
	      }
	    } else {
	      var elementWidth = canvas.width,
	          center = elementWidth / 2,
	          _x = center;

	      while (_x - gridStep >= 0) {
	        _x -= gridStep;
	      }
	      while (_x <= elementWidth) {
	        if (_x === center) {
	          gridCenter = _x;
	        }
	        grid.push(_x);
	        _x += gridStep;
	      }

	      for (var _i = 0; _i < grid.length; _i++) {
	        var _x2 = grid[_i];
	        ctx.beginPath();
	        ctx.moveTo(_x2, 0);
	        ctx.lineTo(_x2, canvas.offsetHeight);
	        ctx.stroke();
	        ctx.closePath();
	      }
	    }

	    if (!config || config && !config.rectangles) return;

	    config.rectangles.forEach(function (rectangleConfig) {
	      var rectangle = void 0;

	      if ((0, _mobile.isMobile)()) {
	        rectangle = [{
	          x: rectangleConfig.x * gridStep,
	          y: rectangleConfig.y
	        }, {
	          x: (rectangleConfig.x + rectangleConfig.width) * gridStep,
	          y: rectangleConfig.y
	        }, {
	          x: (rectangleConfig.x + rectangleConfig.width) * gridStep,
	          y: rectangleConfig.y + rectangleConfig.height
	        }, {
	          x: rectangleConfig.x * gridStep,
	          y: rectangleConfig.y + rectangleConfig.height
	        }];
	      } else {
	        rectangle = [{
	          x: gridCenter + rectangleConfig.x * gridStep,
	          y: rectangleConfig.y
	        }, {
	          x: gridCenter + (rectangleConfig.x + rectangleConfig.width) * gridStep,
	          y: rectangleConfig.y
	        }, {
	          x: gridCenter + (rectangleConfig.x + rectangleConfig.width) * gridStep,
	          y: rectangleConfig.y + rectangleConfig.height
	        }, {
	          x: gridCenter + rectangleConfig.x * gridStep,
	          y: rectangleConfig.y + rectangleConfig.height
	        }];
	      }
	      ctx.beginPath();
	      ctx.fillStyle = fillColor;
	      ctx.strokeStyle = strokeStyle;
	      ctx.moveTo(rectangle[0].x, rectangle[0].y);
	      rectangle.forEach(function (point) {
	        ctx.lineTo(point.x, point.y);
	      });
	      ctx.stroke();
	      ctx.fill();
	      ctx.closePath();

	      ctx.beginPath();
	      ctx.fillStyle = strokeStyle;
	      rectangle.forEach(function (point) {
	        ctx.moveTo(point.x, point.y);
	        ctx.arc(point.x, point.y, anglesPointsRadius, 0, 2 * Math.PI, false);
	      });
	      ctx.fill();
	      ctx.closePath();
	    });
	  });
	};

/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map
