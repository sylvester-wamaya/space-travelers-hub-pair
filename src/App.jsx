import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MyProfile from './components/MyProfile';
import Missions from './components/Missions';
import NoPage from './components/NoPage';
import Rockets from './components/RocketsComponent';

function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path="myprofile" element={<MyProfile />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

    </div>
  );
}

export default App;
