import { fancybox } from '@fancyapps/fancybox';
import { $document } from '../modules/dev/_helpers';

$document.ready(() => {
  $("[data-fancybox]").fancybox({
    afterShow: function() {
      // After modal - play the video
      var vid = document.getElementById("video_modal");
      vid.play();
    }
  });
})