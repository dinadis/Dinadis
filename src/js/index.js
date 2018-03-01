'use strict'

/**
 * App entry point.
 *
 * @module App
 */

/** Import initialized-by-default modules/libs */
import './components/PublicAPI'
import './components/slider'
import './components/sticky-header'
import './components/animations'
import './components/popup'
import './components/customScroll'
import './components/parallax'
import './components/scrollDown'
import './components/fancybox-modal'
import  ScrollController  from './components/scrollDown'
import Popup from './components/popup'
/** Import page controllers */
import Home from './pages/Home'

import { currentPage } from './modules/dev/_helpers'



/**
 * Run appropriate scripts for each page.
 **/
switch (currentPage) {
  /** Home page */
  case 'home':
    ScrollController.initScroll($('.scroll-down-btn'), 'about')
    ScrollController.initScroll($('.contact-us-btn'), 'contact-form')
    ScrollController.initScroll($('.services-btn'), 'services')
    break;
  case 'sub' :
    ScrollController.initScroll($('.scroll-down-btn'), 'about')
    ScrollController.initScroll($('.contact-us-btn'), 'contact-form')
    ScrollController.initScrollService($('.services-btn'), 'services')
    new Popup();
    break;
  /** No page found */
  default: console.warn('Undefined page');
}
