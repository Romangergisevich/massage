import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { Suspense, lazy } from 'react';
import Loader from './components/ui/loader/Loader.tsx';

const App = lazy(() => import('./App.tsx'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
);
