import {
  $body,
  $header, $footer, $section, $document
} from '../modules/dev/_helpers'

import getScrollbarWidth from 'scrollbar-width'

export default class Popup {
  constructor () {
    this.scrollbarWidth = getScrollbarWidth();
    this.popupBody = $('.popup-body');
    this.popUpBg = '.popup-bg';
    this.popUp = $('.popup');
    this.tl = new TimelineLite();
    this.tl2 = new TimelineLite();
    this.closeBtn = '.closeBtn';
    this.btn = $('.filter-content__item');
    this.initOpenPopupEvent();
    this.initClosePopupEvent();
    this.sections = [$header, $footer, $section];
  }

  initOpenPopupEvent () {
    this.btn.on('click', (e) => {
      e.preventDefault()
      this.popUp.addClass('active-popup')
      $body.addClass('lock')

      this.sections.forEach((elem) => {
        elem.addClass('scrollPadding')
      });

      this.tl
        .to($(this.popUpBg), 0.5, {opacity: 1, zIndex: 1})
        .to(this.popupBody, 0.5, {x: '0', ease: Power2.easeOut});
      this.tl.play()
    })
  }

  initClosePopupEvent () {
    $document.on('click', '.closePopup', (e) => {
      this.closePopup()
    })

  }

  closePopup () {
    this.tl2
      .to(this.popupBody, 0.5, {x: -1000, ease: Power2.easeIn})
      .to($(this.popUpBg), 0.5, { opacity: 0, zIndex: -1, onComplete: () => {
        this.clearCssData();
      }});
    this.tl2.play()
  }

  clearCssData () {
    this.popUp.removeClass('active-popup')
    $body.removeClass('lock')
    this.sections.forEach((elem) => {
      elem.removeClass('scrollPadding')
    });
  }
}