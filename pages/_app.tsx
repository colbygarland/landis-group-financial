import type { AppProps } from 'next/app';
import { StoreProvider, rootStore } from '../stores/rootStore';
import 'tailwindcss/tailwind.css';
import { PageHead } from '../components/PageHead';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider value={rootStore}>
      <PageHead />
      <div className="font-sans-serif">
        <Component {...pageProps} />
        <Footer />
      </div>
    </StoreProvider>
  );
}

export default MyApp;
