'use strict';

/**
 * App entry point.
 *
 * @module App
 */

/** Import initialized-by-default modules/libs */
import './components/PublicAPI';
import './components/slider';
import './components/sticky-header';
import './components/animations';
import './components/popup';
import './components/customScroll';
import './components/parallax';
import './components/scrollDown';
import './components/fancybox-modal';
/** Import page controllers */
import Home from './pages/Home';

import { currentPage } from './modules/dev/_helpers';

/**
 * Run appropriate scripts for each page.
 **/

