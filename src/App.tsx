import { Route, Routes } from 'react-router-dom';
import MainHeader from './components/header/MainHeader';
import Home from './components/pages/Home';
import Contraindications from './components/pages/Contraindications';
import Requirements from './components/pages/Requirements';
import Questions from './components/pages/Questions';
import Booking from './components/pages/Booking';

const App: React.FC = () => {
  return (
    <>
      <MainHeader />
      <div className="main__body">
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
