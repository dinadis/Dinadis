import {
  currentPage,
  headerHeight
} from '../modules/dev/_helpers'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
export default class ScrollController {

  /**
   * Init scroll events by btn click
   * @param $btn
   * @param elemClass
   */
  static initScroll ($btn, elemClass) {

    if (!$(`.${elemClass}`).length) return

    let scrollElemOffset = $(`.${elemClass}`)[0].offsetTop;

    $btn.on('click', (e) => {
      window.checker = 0;
      e.preventDefault();
      this.initTweenLite(scrollElemOffset, headerHeight());
    });

    this.checkScrollHash();
  }

  /**
   * Init scroll events without service block
   * @param $btn
   * @param elemClass
   */
  static initScrollService ($btn, elemClass) {
    $btn.on('click', (e) => {
      checker = 0;
      if (!$(`.${elemClass}`).length) window.location = 'home.html#services';
      let scrollElemOffset = $(`.${elemClass}`)[0].offsetTop;
      e.preventDefault();
      this.initTweenLite(scrollElemOffset, headerHeight());
    });
  }

  /**
   * Init timeline animatiom
   * @param scrollElemOffset
   * @param headerHeight
   */
  static initTweenLite (scrollElemOffset, headerHeight) {
    TweenLite.to(window, 2, {
      scrollTo: ( scrollElemOffset - headerHeight ),
      ease: Power3.easeOut
    });
  }

  static checkScrollHash () {
    if (!(window.location.hash === '#services' && currentPage === 'home' && $('.services').length)) return;
    setTimeout(() => {
      $('.services-btn').trigger('click')
    }, 2000);
  }
}




