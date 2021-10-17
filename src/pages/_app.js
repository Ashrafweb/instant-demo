import { Modal } from '@redq/reuse-modal';
import 'common/assets/css/flaticon.css';
import 'swiper/swiper-bundle.css';
import 'common/assets/css/icon-example-page.css';
export default function CustomApp({ Component, pageProps }) {
  return (
    <Modal>
      <Component {...pageProps} />
    </Modal>
  );
}
