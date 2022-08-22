import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="Missions" element={<Missions />} />
        <Route path="MyProfile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
