import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RocketsPage from './pages/RocketsPage';
import MissionsPage from './pages/MissionsPage';
import MyProfilePage from './pages/MyProfilePage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<RocketsPage />} />
        <Route path="Missions" element={<MissionsPage />} />
        <Route path="MyProfile" element={<MyProfilePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
