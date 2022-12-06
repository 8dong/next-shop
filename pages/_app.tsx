import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import PageLayout from '../components/templates/PageLayout';

import store, { persistor } from '../redux/store/store';

import type { AppProps } from 'next/app';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
