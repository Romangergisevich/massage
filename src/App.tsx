import { Route, Routes } from 'react-router-dom';
import MainHeader from './components/header/MainHeader';
import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from './custom_hooks/hooks';
import { closeNav } from './store/slices/MobileNav';
import { RootState } from './store/store';
import Home from './components/pages/Home';

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
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
