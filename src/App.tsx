import { Route, Routes } from 'react-router-dom';
import MainHeader from './components/header/MainHeader';
import { Suspense, lazy, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from './custom_hooks/hooks';
import { closeNav } from './store/slices/MobileNav';
import { RootState } from './store/store';

const Home = lazy(() => import('./components/pages/Home'));
const Booking = lazy(() => import('./components/pages/Booking'));
const Contraindications = lazy(() => import('./components/pages/Contraindications'));
const Requirements = lazy(() => import('./components/pages/Requirements'));
const Questions = lazy(() => import('./components/pages/Questions'));

const App: React.FC = () => {
  const bodyBlur_ref = useRef<HTMLDivElement>(null);
  const burgerOpened = useAppSelector((state: RootState) => state.MobileNav.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target === bodyBlur_ref.current) dispatch(closeNav());
    });
    return () => {
      window.removeEventListener('click', (e) => {
        if (e.target === bodyBlur_ref.current) dispatch(closeNav());
      });
    };
  }, []);

  useEffect(() => {
    burgerOpened
      ? bodyBlur_ref.current?.classList.add('bodyBlur_active')
      : bodyBlur_ref.current?.classList.remove('bodyBlur_active');
  }, [burgerOpened]);

  return (
    <>
      <MainHeader />
      <div ref={bodyBlur_ref} className="bodyBlur"></div>
      <div className="main__body-container">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<p>loading...</p>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/Booking"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Booking />
              </Suspense>
            }
          />
          <Route
            path="/Contraindications"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Contraindications />
              </Suspense>
            }
          />
          <Route
            path="/Requirements"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Requirements />
              </Suspense>
            }
          />
          <Route
            path="/Questions"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Questions />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
