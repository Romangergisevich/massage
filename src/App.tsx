import { Route, Routes } from 'react-router-dom';
import MainHeader from './components/header/MainHeader';
import Home from './components/pages/Home';
import Contraindications from './components/pages/Contraindications';
import Requirements from './components/pages/Requirements';
import Questions from './components/pages/Questions';
import Booking from './components/pages/Booking';
import { useEffect, useRef } from 'react';
import { useAppDispatch } from './custom_hooks/hooks';
import { closeNav } from './store/slices/MobileNav';

const App: React.FC = () => {
  const main_body = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (e.target === main_body.current) dispatch(closeNav());
    });
    return () => {
      window.removeEventListener('click', (e) => {
        if (e.target === main_body.current) dispatch(closeNav());
      });
    };
  }, []);

  return (
    <>
      <MainHeader />
      <div ref={main_body} className="main__body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Contraindications" element={<Contraindications />} />
          <Route path="/Requirements" element={<Requirements />} />
          <Route path="/Questions" element={<Questions />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
