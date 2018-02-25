import { mousewheel } from 'jquery-mousewheel';
import { mCustomScrollbar } from 'malihu-custom-scrollbar-plugin';
import { $window } from '../modules/dev/_helpers'
  let container = $('.popup-body');
  container.mCustomScrollbar({
    scrollInertia: 350,
    autoExpandScrollbar: true,
    mouseWheel:{ scrollAmount: 270 }
  });
