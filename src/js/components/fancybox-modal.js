import { fancybox }  from '@fancyapps/fancybox';
import { $document } from '../modules/dev/_helpers';

$document.ready(() => {
  $("[data-fancybox]").fancybox();
})