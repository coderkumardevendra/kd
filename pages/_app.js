import { SSRProvider } from '@react-aria/ssr';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Topbar from '../components/Top';
import Middle from '../components/Middle';
import Bottombar from '../components/Bottom';
import 'nprogress/nprogress.css';
import Nprogress from 'nprogress';
import { Router } from 'next/router';

Router.events.on('routeChangeStart', () => Nprogress.start().configure({ showSpinner: false, easing: 'ease', speed: 500, }));
Router.events.on('routeChangeComplete', () => Nprogress.done().configure());
Router.events.on('routeChangeError', () => Nprogress.done().configure());

function MyApp({ Component, pageProps }) {
  return <>
    <SSRProvider>
      <div className="body-inner">
        <Topbar />
        <Middle />
        <Bottombar />
        <Component {...pageProps} />
      </div>
    </SSRProvider>
  </>
}

export default MyApp