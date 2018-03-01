import { fancybox } from '@fancyapps/fancybox';
import { $document } from '../modules/dev/_helpers';

$document.ready(() => {
  $("[data-fancybox]").fancybox({
    afterShow: function() {
      // After play modal - play video
      let vid = document.getElementById("video_modal");
      vid.play();
    },
    afterClose: () => {
      // After close modal - pause video
      let vid = document.getElementById("video_modal");
      vid.pause();
    }

  });
})